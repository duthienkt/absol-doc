var searchQuery = location.search.replace(/^\?/, '').split('&')
    .reduce((ac, cr)=>{
        var t = cr.split('=');
        var key = t[0];
        var value = t[1] ||'';
        ac[key] = value;
        return ac;
    }, {});

function changeLocation(modifyData) {
    Object.assign(searchQuery, modifyData)
    var newUrl = [location.origin, location.pathname].join('/')+'?'
        + Object.keys(searchQuery).map(key=> key+'='+ searchQuery[key]).join('&');
    location.replace(newUrl);
}

var _ = absol._;
var $ = absol.$;

var requireAsync = absol.remoteNodeRequireAsync;

window.render = function render(o) {
    return _(o).addTo(document.body);
}

var  converter = new showdown.Converter();


var tocList =    require('../content/table_of_content.js')

var tocElt = _({
    tag: 'expgroup',
});


var type2icon = {
    package: 'span.mdi.mdi-package',
    default: 'span',
    class:'soan.mdi.mdi-cube-scan',
    'dom-class': 'span.mdi.mdi-webpack',
    group: 'span.mdi.mdi-package-variant'
}

var activeExp = null;
function makeTocTree(pElt, node) {
    var exp = _({
        tag: 'exptree',
        props: {
            name: node.name || node.tagName,
            icon: type2icon[node.type] || type2icon.default
        },
        on:{
            statuschange: function (){
                window.dispatchEvent(new Event('resize'));
            },
            press: function (){
                if (activeExp) {
                    activeExp.active = false;
                }
                if (node.href){
                   fetch(node.href).then(res=> res.text()).then(text=>{
                      var html = converter.makeHtml(text);
                       contentElt.innerHTML = html;
                       hljs.highlightAll();
                       activeExp = exp;
                       activeExp.active = true;

                   }).catch(error=>{
                       contentElt = '<h3 color="red">Not found</h3>'
                   })

                }
            }
        }
    });

    pElt.addChild(exp);
    if (node.children && node.children.length > 0) {
        exp.status = 'open';
        node.children.sort((a, b)=>{
            if (a.name < b.name) return -1;
            return 1;
        })
        node.children.forEach(it => makeTocTree(exp, it));

    }
}

tocList.forEach(it => makeTocTree(tocElt, it));

tocElt.once('mousedown', function () {
    var bound = tocElt.getBoundingClientRect();
    tocElt.addStyle('width', bound.width + 'px')
});

var contentElt = _('.main-content');


var mainElt = render({
    class: 'main',
    child: [
        { class: ['main-left', 'as-bscroller'], child: tocElt },
        {class:  'main-right', child: contentElt }
    ]
});

