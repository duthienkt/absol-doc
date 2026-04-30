## LinearColorTinyBar

### Tạo mới

```js
var component = absol._({
    tag: 'LinearColorTinyBar'
});
```

### Tên tag

- `LinearColorTinyBar`

### require

```js
var clazz = absol.require('LinearColorTinyBar');
```

### Class

`LinearColorTinyBar`

### Nguồn

- `js/LinearColorTinyBar.js`

### Demo

- https://absol.cf/libs/absol-acomp/demo/LinearColorTinyBar.html

### props

<script>
var clazz = absol.require('LinearColorTinyBar');
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
