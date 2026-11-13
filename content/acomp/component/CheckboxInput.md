## CheckboxInput

### Tạo mới

```js
var component = absol._({
    tag: 'checkboxinput'
});
```

### Tên tag

- `checkboxinput`

### require

```js
var clazz = absol.require('checkboxinput');
```

### Class

`CheckboxInput`

### Nguồn

- `js/CheckBoxInput.js`
- `js/CheckboxButton.js`

### Demo

- https://absol.cf/libs/absol-acomp/demo/checkboxinput.html

### props

<script>
var clazz = absol.require('checkboxinput');
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


### Ví dụ

`checkboxinput` là ô chọn riêng, có thể ghép với nội dung hoặc bố cục tùy ý.

Các ví dụ dưới đây dùng `render(...)` của trang tài liệu để hiển thị component. Trong ứng dụng, có thể dùng `absol._(descriptor).addTo(container)` thay cho `render(descriptor)`.

#### Các trạng thái

`checked` xác định giá trị chọn. `disabled` vô hiệu hóa tương tác; `readOnly` giữ trạng thái chỉ đọc. `minus` đổi biểu tượng thành dấu trừ khi đang chọn, không tạo thêm giá trị thứ ba cho `checked`.

```js
render({
    style: { display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' },
    child: [
        { child: [
            { tag: 'checkboxinput', props: { checked: false } },
            { tag: 'span', child: { text: ' Chưa chọn' } }
        ] },
        { child: [
            { tag: 'checkboxinput', props: { checked: true } },
            { tag: 'span', child: { text: ' Đã chọn' } }
        ] },
        { child: [
            { tag: 'checkboxinput', props: { checked: true, minus: true } },
            { tag: 'span', child: { text: ' Dấu trừ' } }
        ] },
        { child: [
            { tag: 'checkboxinput', props: { checked: true, disabled: true } },
            { tag: 'span', child: { text: ' Vô hiệu hóa' } }
        ] },
        { child: [
            { tag: 'checkboxinput', props: { checked: true, readOnly: true } },
            { tag: 'span', child: { text: ' Chỉ đọc' } }
        ] }
    ]
});
```

<script>
render({
    style: { display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' },
    child: [
        { child: [
            { tag: 'checkboxinput', props: { checked: false } },
            { tag: 'span', child: { text: ' Chưa chọn' } }
        ] },
        { child: [
            { tag: 'checkboxinput', props: { checked: true } },
            { tag: 'span', child: { text: ' Đã chọn' } }
        ] },
        { child: [
            { tag: 'checkboxinput', props: { checked: true, minus: true } },
            { tag: 'span', child: { text: ' Dấu trừ' } }
        ] },
        { child: [
            { tag: 'checkboxinput', props: { checked: true, disabled: true } },
            { tag: 'span', child: { text: ' Vô hiệu hóa' } }
        ] },
        { child: [
            { tag: 'checkboxinput', props: { checked: true, readOnly: true } },
            { tag: 'span', child: { text: ' Chỉ đọc' } }
        ] }
    ]
});
</script>

#### Theo dõi thay đổi

Nhấn vào ô chọn để cập nhật trạng thái bên dưới. Đọc giá trị hiện tại qua `this.checked` trong trình xử lý `change`. Gán `input.checked = true` bằng JavaScript cập nhật trạng thái nhưng không tự phát sự kiện `change`.

```js
var status = absol._({
    tag: 'p',
    child: { text: 'Trạng thái: chưa chọn' }
});
var input = absol._({
    tag: 'checkboxinput',
    props: { checked: false },
    on: {
        change: function () {
            status.textContent = 'Trạng thái: ' + (this.checked ? 'đã chọn' : 'chưa chọn');
        }
    }
});
render({ child: [input, status] });
```

<script>
var status = absol._({
    tag: 'p',
    child: { text: 'Trạng thái: chưa chọn' }
});
var input = absol._({
    tag: 'checkboxinput',
    props: { checked: false },
    on: {
        change: function () {
            status.textContent = 'Trạng thái: ' + (this.checked ? 'đã chọn' : 'chưa chọn');
        }
    }
});
render({ child: [input, status] });
</script>

#### Kiểu hiển thị

Đặt `variant` và `size` trong `style`. Các kích thước gồm `small`, `regular`, `large`; kiểu hiển thị gồm `v0` (mặc định), `check-box`, `check-circle`, `reject-circle`.

```js
render({
    style: { display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' },
    child: ['check-box', 'check-circle', 'reject-circle'].map(function (variant) {
        return {
            child: [
                {
                    tag: 'checkboxinput',
                    style: { variant: variant, size: 'regular' },
                    props: { checked: true }
                },
                { tag: 'span', child: { text: ' ' + variant } }
            ]
        };
    })
});
```

<script>
render({
    style: { display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' },
    child: ['check-box', 'check-circle', 'reject-circle'].map(function (variant) {
        return {
            child: [
                {
                    tag: 'checkboxinput',
                    style: { variant: variant, size: 'regular' },
                    props: { checked: true }
                },
                { tag: 'span', child: { text: ' ' + variant } }
            ]
        };
    })
});
</script>

### Ghi chú

- Bảng `props` phía trên được render từ `clazz.property` tại thời điểm mở tài liệu, nên sẽ phản ánh trực tiếp API hiện có của component.
