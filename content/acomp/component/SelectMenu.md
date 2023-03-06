
## SelectMenu

### [Demo](https://absol.cf/libs/absol-acomp/demo/selectmenu.html)

### props 

<script>
var clazz = absol.require('selectmenu');
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
                        { tag: 'td', child: { text: '' } },
                    ]
                }
            })
        }
    ]
});
</script>

### Ví dụ

abc

