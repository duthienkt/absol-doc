## TextArea2 và TextInput

### Tổng quan

TextArea2, TextInput là module nhập text nâng cao, hỗ trợ tự động co giãn chiều cao theo nội dung, giới hạn độ dài theo byte UTF-8
### Thuộc tính (props)

| Tên         | Giá trị                | Mô tả                                                                                 |
|-------------|------------------------|--------------------------------------------------------------------------------------|
| value       | `string`               | Giá trị nội dung hiện tại của textarea                                               |
| maxU8Length | `number`               | Giới hạn số byte UTF-8 tối đa cho nội dung (cắt tự động nếu vượt quá)                |
| readOnly    | `true`\|`false`        | Nếu true, không cho phép chỉnh sửa                                                   |
| disabled    | `true`\|`false`        | Nếu true, không cho phép thao tác                                                    |
| placeholder | `string`               | Văn bản gợi ý khi chưa nhập nội dung                                                 |

### Sự kiện

- `input`: Gọi khi nội dung thay đổi (gõ, dán, cắt, v.v.).
- `change`: Gọi khi nội dung thay đổi và textarea mất focus.

### Ví dụ khởi tạo

```js
var ta = absol._({
    tag: 'textarea2',
    props: {
        value: 'Nội dung ban đầu',
        maxU8Length: 100,
        placeholder: 'Nhập nội dung...'
    }
});

var ti = absol._({
    tag: 'textinput',
    props: {
        value: 'Nội dung ban đầu',
        maxU8Length: 100,
        placeholder: 'Nhập nội dung...'
    }
});
```

### Ghi chú
- Tự động co giãn chiều cao theo nội dung.
- Nếu vượt quá `maxU8Length`, nội dung sẽ bị cắt bớt theo byte UTF-8.
- Có thể dùng props hoặc setter để thay đổi các thuộc tính động.
- Hỗ trợ đầy đủ các sự kiện nhập liệu như textarea chuẩn.
