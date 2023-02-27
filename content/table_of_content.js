var tocList = [];

var toc;
toc = {
    name: 'absol(core)',
    type: 'package',
    children: [
        {
            name:'Dom Syntax',
            type: 'group',
            href:__dir +'/absol/dom_syntax.md'
        },
        {
            name:'Alarm',
            type: 'class',
            href:__dir +'/absol/Alarm.md'
        },
        {
            name:'DynamicCSS',
            type: 'class',
            href:__dir +'/absol/DynamicCSS.md'
        },
        {
            name:'datetime',
            type: 'group',
            href:__dir +'/absol/datetime.md'
        }
    ]
};

tocList.push(toc);


toc = {
    name: 'absol-acomp',
    type: 'package',
    children: [
        {
            name:'Component List',
            type: 'group',
            href:__dir +'/acomp/component_list.js'
        },
        {
            name: 'Dom Component',
            type: 'group',
            children: Object.keys(absol.AComp.core.creator).map(key => {
                var clazz = absol.AComp.core.creator[key];
                var name = (clazz + '').match(/function\s+([a-zA-Z0-9_]+)/);
                name = (name && name[1]) || key;
                var res = {
                    type: 'dom-class',
                    tagName: key,
                    name: name,
                    href: [__dir, 'acomp','component', name+'.md'].join('/')
                };

                return res;

            })
        },
        {
            name: 'Utils',
            type: 'group'
        }
    ]
};

tocList.push(toc);

module.exports = tocList;