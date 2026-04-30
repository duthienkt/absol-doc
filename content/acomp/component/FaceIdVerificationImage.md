## FaceIdVerificationImage

### Tạo mới

```js
var component = absol._({
    tag: 'faceidverificationimage'
});
```

### Tên tag

- `faceidverificationimage`
### require

```js
var clazz = absol.require('faceidverificationimage');
```

### Class

`FaceIdVerificationImage`

### Nguồn

- `js/FaceIdEnrollment.js`

### Demo

- https://absol.cf/libs/absol-acomp/demo/faceidverificationimage.html

### props

<script>
var clazz = absol.require('faceidverificationimage');
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
