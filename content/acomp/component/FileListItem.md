
## SelectMenu

### [Demo](https://absol.cf/libs/absol-acomp/demo/selectmenu.html)

### props 

<script>
var clazz = absol.require('filelistitem');
var descriptions = {};
descriptions.value = 'Nhận giá trị bất kì';

render({
    tag: 'table',
    child: [
        {
            tag: 'thead',
            child: [
                {
                    tag: 'tr',
                    child: [
                        { tag: 'td', child: { text: 'Tên' } },
                        { tag: 'td', child: { text: 'Chú thích' } }
                    ]
                }
            ]
        },
        {
            tag: 'tbody',
            child: Object.keys(clazz.property).map(function (name) {
                return {
                    tag: 'tr',
                    child: [
                        { tag: 'td', child: { text: name } },
                        { tag: 'td', child: { text: descriptions[name] ||'' } },
                    ]
                }
            })
        }
    ]
});
</script>

### Ví dụ

abc

