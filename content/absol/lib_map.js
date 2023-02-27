var md = `# Library Indexed\n\n`;

var lines = [];

var dontRecursive = {
    language2LocalDateFormat: true,
    dateFormat2LocationList: true,
    operatorOrder: true,
    PAGE_SIZE_IN_DOT: true,
    PAGE_SIZE_IN_POINT: true,
    allWordDict: true
}

function iconOf(obj) {
    var iconName = 'cube';
    var type = typeof obj;
    if (obj && (type === "object") && obj.constructor === Object) {
        iconName = 'code-braces';
    }
    else if (type === 'function') {
        if (obj.render && obj.tag) {
            iconName = 'webpack';
        }
        else if (obj.name.match(/^[A-Z]/)) {
            iconName = 'cube-scan';
        }
        else iconName = 'function'
    }
    else if (obj instanceof Array) {
        iconName = 'view-array-outline';
    }
    else if (type === 'number') {
        iconName = 'numeric';
    }
    else if (type === "string") {
        iconName = 'format-text-variant';
    }
    return `<span class="mdi mdi-${iconName}"></span>`;
}

function makeRow(obj, name,  path) {
    if (name.startsWith('_') && name.length > 1) return;
    var type = typeof obj;
    var level = path.length;
    path = path.concat([name]);
    var pathText = path.join('.');
    var line = '<div onclick="copyLibMapItem(\''+pathText+'\');" class="as-lib-map-item" title="'+pathText+'"><span>' + '&nbsp'.repeat(level * 4) + '</span>';
    line += iconOf(obj)+' ';
    line += `<span>${name}</span>`;
    line += '</div>'
    lines.push(line);
    if (dontRecursive[name]) return;
    if (obj instanceof Array) {

    }
    else if (obj && (type === "object") && obj.constructor === Object) {
        Object.keys(obj).forEach(function (key) {
            makeRow(obj[key], key, path)
        })
    }
}

makeRow(absol, 'absol',[] );

md += lines.join('\n');

window.copyLibMapItem = window.copyLibMapItem || function (pathText) {
    absol.clipboard.copyText(pathText);
    absol.require('snackbar').show('copy: '+ pathText);

}

module.exports = md;