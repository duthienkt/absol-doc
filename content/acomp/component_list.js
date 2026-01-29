var groups = [
    {
        name: 'boolean',
        tags: ['checkboxinput', 'radioinput', 'checkboxbutton', 'checkbox', 'radio', 'switch']
    },
    {
        name: 'button',
        tags: ['flexiconbutton', 'ribbonbutton', 'ribbonsplitbutton']
    },
    {
        name: 'number',
        tags: ['linearcolorbar', 'numberinput', 'numberspaninput', 'trackbar', 'trackbarinput']
    },
    {
        name: 'text',
        tags: ['autocompleteinput', 'flexiconinput', 'spaninput', 'mediainput', 'textarea2', 'editabletext', 'preinput', 'tokenfield',
            'searchtextinput', 'searchcrosstextinput']
    },
    {
        name: 'static-text, label',
        tags: ['circlesectionlabel', 'hexasectionlabel', 'rotatedtext']
    },
    {
        name: 'loading',
        tags: ['loadingcubemodal', 'progressbar']
    },
    {
        name: 'chat',
        tags: ['emojipickertooltip', 'messageinput', 'mediainput', 'emojicounter', 'kvcommentitem', 'tokenizehyperinput']
    },
    {
        name: 'tab',
        tags: ['buttonrange', 'pageindicator', 'pageselector', 'frame', 'frameview', 'tabview', 'singlepage']
    },
    {
        name: 'datetime',
        tags: ['chromecalendar', 'chrometimepicker', 'dateinyearpicker', 'timeinput', 'chrometime24picker',
            'time24input', 'dateinput', 'timepicker', 'timerange24input', 'timeselectinput', 'calendarinput', 'datetimeinput',
            'countdownclock', 'countdowntext', 'dateinyearinput']

    },
    {
        name: 'item',
        tags: ['checklistitem', 'selectboxitem', 'treelistitem']
    },
    {
        name: "dropdown-box",
        tags: ["selecttreebox", "dualselectbox", "checklistbox", "checktreebox", "checktreeleafonlybox", "selectlist",
            'selectlist_v2', "treelist", "dualselectbox", "selectlistbox", "selecttreeleafbox", "mdualselectbox",
            "mchecktreebox", "mchecktreeleafbox"]
    },
    {
        name: "input-box",
        tags: ["selecttreemenu", "selectmenu", "selecttreeleafmenu", "dualselectmenu", "multicheckmenu", "multichecktreemenu",
            "multiselectmenu", "multichecktreeleafmenu", "selectbox"]
    },
    {
        name: "window/wiget",
        tags: ["onscreenwidget", "snackbar", "tooltip", "toast", "messagedialog", "yesnoquestiondialog", "windowbox",
            "selecttable", 'selecttable2', "tablescroller", "tablevscroller", "dynamictable", "objectmergetool"]
    },
    {
        name: "virtualview",
        tags: ["scrollbar", "vscrollbar", "hscrollbar", "bscroller", "contextcaptor", "follower", "modal", "dropright",
            "dropdown", "hanger"]
    },
    { name: "file", tags: ["dropzone", "fileinputbox", "filelistitem", "filelistinput"] }, {
        name: "menu",
        tags: ["hmenu", "vmenu", "vmenuline", "vmenuitem", "droppanel", "droppanelstack", "quicklistbutton", "quickmenu",
            "ribbonbutton", "ribbonsplitbutton"]
    },
    { name: "drag-drop", tags: ["board", "boardtable", "draggablehstack", "draggablevstack"] }, {
        name: "image",
        tags: ["verticaltreediagramnode", "verticaltreediagram", "sprite", "remotesvg", "iconsprite"]
    },
    {
        name: "location",
        tags: ["locationview", "locationpicker", "locationinput", "placesearchautocompleteinput"]
    },
    { name: "tool", tags: ["vruler", "hruler", "resizerbox", "widthheightresizer"] },
    {
        name: "ckeditor",
        tags: ["ckplaceholder", "ckinlineshorttext"]
    }
]


var md = `## [Bảng tra cứu nhanh](https://absol.cf/libs/absol-acomp/document/)

## Danh sách component

${
    groups.map(function (it) {
        return `### ${it.name}
       
| Tên | Demo | Chú thích | 
|-----|------|------|
${it.tags.map(function (tag) {
            var id = (Math.random() + '').replace('.', '');
            absol.FileSaver.fileExist('https://absol.cf/libs/absol-acomp/demo/' + tag + '.html').then(result => {
                if (result) {
                    absol.$('#s' + id).addChild(absol._({
                        tag: 'a',
                        props: {
                            href: 'https://absol.cf/libs/absol-acomp/demo/' + tag + '.html',
                            target: '_blank'
                        },
                        child: {
                            text: 'demo:' + tag
                        }
                    }))
                }
            });
            
            return `| ${tag} |  <span id="s${id}"></span>   |    |`
        }).join('\n')}
        
        `;
    }).join('\n')
}

`
module.exports = md;