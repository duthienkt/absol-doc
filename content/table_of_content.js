var tocList = [];

var toc;
toc = {
    name: 'LibraryMap',
    type: 'package',
    href: [__dir, 'absol', 'lib_map.js'].join('/')
}

tocList.push(toc);

toc = {
    name: 'absol(core)',
    type: 'package',
    children: [
        {
            name: 'Dom Syntax',
            type: 'group',
            href: __dir + '/absol/dom_syntax.md'
        },
        {
            name: 'Alarm',
            type: 'class',
            href: __dir + '/absol/Alarm.md'
        },
        {
            name: 'DynamicCSS',
            type: 'class',
            href: __dir + '/absol/DynamicCSS.md'
        },
        {
            name: 'datetime',
            type: 'group',
            href: __dir + '/absol/datetime.md'
        },
        {
            name: 'number',
            type: 'group',
            href: __dir + '/absol/number.md'
        },
        {
            name: 'object',
            type: 'group',
            href: __dir + '/absol/object.md'
        },
        {
            name: 'sclang',
            type: 'group',
            href: __dir + '/absol/sclang.md'
        }
    ]
};

tocList.push(toc);


toc = {
    name: 'absol-acomp',
    type: 'package',
    children: [
        {
            name: 'Component List',
            type: 'group',
            href: __dir + '/acomp/component_list.js'
        },
        {
            name: 'Dom Component',
            type: 'group',
            children: Object.keys(absol.AComp.core.creator).sort().map(key => {
                var clazz = absol.AComp.core.creator[key];
                var name = (clazz + '').match(/function\s+([a-zA-Z0-9_]+)/);
                name = (name && name[1]) || key;
                name = name.replace(/2$/, '');
                var res = {
                    type: 'dom-class',
                    tagName: key,
                    name: name,
                    href: [__dir, 'acomp', 'component', name + '.md'].join('/')
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


toc = {
    name: 'absol-vchart',
    type: 'package',
    children: [
        {
            name: 'Chart List',
            type: 'group',
            href: __dir + '/vchart/chart_list.js'
        },
        {
            name: 'Svg Charts',
            type: 'group',
            children:[
                {
                    type:'svg-class',
                    name: 'AssessmentChart ',
                    href: __dir + '/vchart/charts/AssessmentChart.md'
                },
                {
                    type:'svg-class',
                    name: 'BarStackChart ',
                    href: __dir + '/vchart/charts/BarStackChart.md'
                },
                {
                    type:'svg-class',
                    name: 'FunnelChart ',
                    href: __dir + '/vchart/charts/FunnelChart.md'
                },
                {
                    type:'svg-class',
                    name: 'DualChart',
                    href: __dir + '/vchart/charts/DualChart.md'
                },
                {
                    type:'svg-class',
                    name: 'HorizontalRangeChart ',
                    href: __dir + '/vchart/charts/HorizontalRangeChart.md'
                },
                {
                    type:'svg-class',
                    name: 'HorizontalRankChart ',
                    href: __dir + '/vchart/charts/HorizontalRankChart.md'
                }
            ]
        }
    ]
}

tocList.push(toc);


toc = {
    name: 'LibraryMap',
    type: 'package',
    href: [__dir, 'absol', 'lib_map.js'].join('/')
}

tocList.push(toc);

toc = {
    name: 'form',
    type: 'package',
    children: [
        {
            name: 'FmFragment',
            type: 'class',
            href: __dir + '/form/FmFragment.md'
        },
    ]
};

tocList.push(toc);


toc = {
    name: 'absol-brace',
    type: 'package',
    children: [
        { name: 'Bản đơn giản', type: 'group', href: [__dir, 'brace', 'simple.md'].join('/') }
    ]
}

tocList.push(toc);

toc = {
    name: 'absol-poser',
    type: 'package',

    href: [__dir, 'poser', 'index.md'].join('/')
}

tocList.push(toc);

toc = {
    name: 'absol-sheet',
    type: 'package',
    children: [
        { name: 'Kiểu dữ liệu', type: 'group', href: [__dir, 'sheet', 'index.md'].join('/') },
        { name: 'TableEditor', type: 'group', href: [__dir, 'sheet', 'TableEditor.md'].join('/') }
    ],

}

tocList.push(toc);

toc = {
    name: 'keeview-notes',
    type: 'package',
    href: [__dir, 'keeview', 'index.md'].join('/')
}

tocList.push(toc);

var toc;
toc = {
    name: 'Other',
    type: 'package',
    children: [
        { name: 'HistoryHelper', type: 'group', href: [__dir, 'other', 'HistoryHelper.md'].join('/') }
    ]
}

tocList.push(toc);


module.exports = tocList;