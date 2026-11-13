## CheckBox

### Tạo mới

```js
var component = absol._({
    tag: 'checkbox'
});
```

### Tên tag

- `checkbox`

### require

```js
var clazz = absol.require('checkbox');
```

### Class

`CheckBox`

### Nguồn

- `js/CheckBox.js`

### Demo

- https://absol.cf/libs/absol-acomp/demo/checkbox.html

### props

<script>
var clazz = absol.require('checkbox');
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

`checkbox` gồm ô chọn và nhãn, đặt nội dung nhãn bằng `props.text`.

Các ví dụ dưới đây dùng `render(...)` của trang tài liệu để hiển thị component. Trong ứng dụng, có thể dùng `absol._(descriptor).addTo(container)` thay cho `render(descriptor)`.

#### Các trạng thái

`checked` xác định giá trị chọn. `disabled` vô hiệu hóa tương tác; `readOnly` giữ trạng thái chỉ đọc. `minus` đổi biểu tượng thành dấu trừ khi đang chọn, không tạo thêm giá trị thứ ba cho `checked`.

```js
render({
    style: { display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' },
    child: [
        { tag: 'checkbox', props: { text: 'Chưa chọn', checked: false } },
        { tag: 'checkbox', props: { text: 'Đã chọn', checked: true } },
        { tag: 'checkbox', props: { text: 'Dấu trừ', checked: true, minus: true } },
        { tag: 'checkbox', props: { text: 'Vô hiệu hóa', checked: true, disabled: true } },
        { tag: 'checkbox', props: { text: 'Chỉ đọc', checked: true, readOnly: true } }
    ]
});
```

<script>
render({
    style: { display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' },
    child: [
        { tag: 'checkbox', props: { text: 'Chưa chọn', checked: false } },
        { tag: 'checkbox', props: { text: 'Đã chọn', checked: true } },
        { tag: 'checkbox', props: { text: 'Dấu trừ', checked: true, minus: true } },
        { tag: 'checkbox', props: { text: 'Vô hiệu hóa', checked: true, disabled: true } },
        { tag: 'checkbox', props: { text: 'Chỉ đọc', checked: true, readOnly: true } }
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
    tag: 'checkbox',
    props: { text: 'Nhận thông báo', checked: false },
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
    tag: 'checkbox',
    props: { text: 'Nhận thông báo', checked: false },
    on: {
        change: function () {
            status.textContent = 'Trạng thái: ' + (this.checked ? 'đã chọn' : 'chưa chọn');
        }
    }
});
render({ child: [input, status] });
</script>

#### Kiểu hiển thị

Đặt `variant` và `size` trong `style`. Các kích thước gồm `small`, `regular`, `large`; kiểu hiển thị gồm `v0` (mặc định), `check-box`, `check-circle`, `reject-circle`. Dùng `checkPosition: 'right'` để đưa ô chọn sang phải nhãn.

```js
render({
    style: { display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' },
    child: ['check-box', 'check-circle', 'reject-circle'].map(function (variant) {
        return {
            child: [
                {
                    tag: 'checkbox',
                    style: { variant: variant, size: 'regular', checkPosition: 'right' },
                    props: { text: variant, checked: true }
                }
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
                    tag: 'checkbox',
                    style: { variant: variant, size: 'regular', checkPosition: 'right' },
                    props: { text: variant, checked: true }
                }
            ]
        };
    })
});
</script>

### Ghi chú

- Bảng `props` phía trên được render từ `clazz.property` tại thời điểm mở tài liệu, nên sẽ phản ánh trực tiếp API hiện có của component.
