## SelectMenu

### [Demo](https://absol.cf/libs/absol-acomp/demo/selectmenu.html)

### prototype

| Tên              | Tham số    | Trả về                                                                                            |
|------------------|------------|---------------------------------------------------------------------------------------------------|
| findItemsByValue | value: any | Nếu không  tồn tại, trả undefined, nếu có, trả array 1 phần tử, có thể nhiều phần tử nếu bị trùng |

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

