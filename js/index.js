var searchQuery = location.search.replace(/^\?/, '').split('&')
    .reduce((ac, cr) => {
        var t = cr.split('=');
        var key = t[0];
        key = key.trim();
        if (!key) return ac;
        var value = t[1] || '';
        ac[key] = value;
        return ac;
    }, {});

searchQuery.page = searchQuery.page || 'LibraryMap_LibraryMap';


function changeLocation(modifyData, name, replace) {
    Object.assign(searchQuery, modifyData)
    var newUrl = location.pathname + '?'
        + Object.keys(searchQuery).map(key => key + '=' + searchQuery[key]).join('&');
    if (replace)
        window.history.replaceState(modifyData, name | 'Document', newUrl);
    else
        window.history.pushState(modifyData, name | 'Document', newUrl);
    // location.replace(newUrl);
}

var _ = absol._;
var $ = absol.$;
var $$ = absol.$$;

var requireAsync = absol.remoteNodeRequireAsync;

window.render = function render(o) {
    return _(o).addTo(document.body);
}


var tocList = require('../content/table_of_content.js')

var tocElt = _({
    tag: 'expgroup',
});


var type2icon = {
    package: 'span.mdi.mdi-package',
    default: 'span',
    class: 'soan.mdi.mdi-cube-scan',
    'dom-class': 'span.mdi.mdi-webpack',
    group: 'span.mdi.mdi-package-variant'
}

var activeExp = null;

var stateCallbacks = {};

window.addEventListener('popstate', function (event) {
    var state = event.state;
    if (state.page && stateCallbacks[state.page]) {
        stateCallbacks[state.page]();
    }
});


function runDocumentScript(contentElt) {
    var scripts = $$('script', contentElt);
    scripts.forEach(scriptElt => {
        var scriptCode = scriptElt.innerHTML;
        var ath = _('attachhook');
        scriptElt.parentElement.replaceChild(ath, scriptElt);

        function render(o) {
            var res = _(o);
            ath.parentElement.insertBefore(res, ath);
        }

        ath.once('attached', function () {
            try {
                var f = new Function('_', '$', '$$', 'render', 'doc', scriptCode);
                f.call(window, _, $, $$, render, contentElt);
            } catch (e) {
                console.error(e);
            }

        });
    });

    $$('a', contentElt).forEach(function (elt) {
        var href = elt.attr('href');
        if (href && href.match(/^http(s?):\/\//)) elt.attr('target', '_blank');
    })
}

function makeTocTree(pElt, node, path) {
    path = path.concat([node.name || node.tagName]);
    var id = absol.string.nonAccentVietnamese(path.join('_')).replace(/[^a-zA-Z0-9_]/g, '')
    var name = node.name || node.tagName;

    function select(doState) {
        if (activeExp === exp) return;
        if (activeExp) {
            activeExp.active = false;
        }
        activeExp = exp;
        activeExp.active = true;
        setTimeout(function () {
            absol.$.vScrollIntoView(activeExp);
        }, 100);

        if (doState) changeLocation({ page: id }, name, doState === 'replace');

        absol.remoteNodeRequireAsync(node.href).then(text => {
            if (activeExp !== exp) return;
            var html = marked.parse(text);
            contentElt.innerHTML = html;
            runDocumentScript(contentElt);
            hljs.highlightAll();


        }).catch(error => {
            contentElt = '<h3 color="red">Not found</h3>'
        })
    }

    stateCallbacks[id] = select;

    var exp = _({
        tag: 'exptree',
        props: {
            name: name,
            icon: type2icon[node.type] || type2icon.default
        },
        on: {
            statuschange: function () {
                window.dispatchEvent(new Event('resize'));
            },
            press: function () {
                if (activeExp) {
                    activeExp.active = false;
                }
                if (node.href) {
                    select(true);
                }
            }
        }
    });

    pElt.addChild(exp);
    if (node.children && node.children.length > 0) {
        exp.status = 'open';
        // node.children.sort((a, b)=>{
        //     if (a.name < b.name) return -1;
        //     return 1;
        // })
        node.children.forEach(it => makeTocTree(exp, it, path));

    }
    if (id === searchQuery.page) select('replace');
}

tocList.forEach(it => makeTocTree(tocElt, it, []));
//
// tocElt.once('mousedown', function () {
//     var bound = tocElt.getBoundingClientRect();
//     tocElt.addStyle('width', bound.width + 'px')
// });

var contentElt = _('.main-content.markdown-body');


var mainElt = render({
    class: 'main',
    child: [
        { class: ['main-left', 'as-bscroller'], child: tocElt },
        { class: 'main-right', child: contentElt }
    ]
});

mainElt.addStyle('--toc-width', tocElt.getBoundingClientRect().width + 'px')


/*********************************************************************************/

