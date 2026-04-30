## SelectListBox

### Tạo mới

```js
var component = absol._({
    tag: 'SelectListBox'
});
```

### Tên tag

- `SelectListBox`
- `selectlistbox_v2`

### require

```js
var clazz = absol.require('SelectListBox');
```

### Class

`SelectListBox`

### Nguồn

- `js/SelectListBox.js`
- `js/selectlistbox/SelectListBox.js`

### Demo

- https://absol.cf/libs/absol-acomp/demo/SelectListBox.html

### props

<script>
var clazz = absol.require('SelectListBox');
var properties = (clazz && clazz.property) || {};
render({
    tag: 'table',
    child: [
        {
            tag: 'thead',
            child: {
                tag: 'tr',
                child: [
                    { tag: 'td', child: { text: 'Tên' } },
                    { tag: 'td', child: { text: 'Chú thích' } }
                ]
            }
        },
        {
            tag: 'tbody',
            child: Object.keys(properties).map(function (name) {
                return {
                    tag: 'tr',
                    child: [
                        { tag: 'td', child: { text: name } },
                        { tag: 'td', child: { text: '' } }
                    ]
                };
            })
        }
    ]
});
</script>

### Ghi chú

- Tài liệu chi tiết cho component này đang được bổ sung.
- Bảng `props` phía trên được render từ `clazz.property` tại thời điểm mở tài liệu, nên sẽ phản ánh trực tiếp API hiện có của component.
