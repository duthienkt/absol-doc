var _ = absol._;
var $ = absol.$;
var requireAsync = absol.remoteNodeRequireAsync;
window.render = function render(o) {
    return _(o).addTo(document.body);
}

var  converter = new showdown.Converter();


var tocList =
    [
        require('https://raw.githubusercontent.com/duthienkt/absol-acomp/master/document/table_of_contents.js')
    ];

var tocElt = _({
    tag: 'expgroup',
});


var type2icon = {
    package: 'span.mdi.mdi-package',
    default: 'span',
    'dom-class': 'span.mdi.mdi-webpack',
    group: 'span.mdi.mdi-.mdi-package-variant'
}

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
                if (node.href){
                   fetch(node.href).then(res=> res.text()).then(text=>{
                      var html = converter.makeHtml(text);
                       contentElt.innerHTML = html;
                       hljs.highlightAll();
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

