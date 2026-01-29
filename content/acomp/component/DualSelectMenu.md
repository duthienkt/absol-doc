## DualSelectMenu

### Tổng quan

DualSelectMenu là module chọn 2 cấp, cho phép người dùng chọn một mục cha và một mục con liên quan. Thường dùng cho các trường hợp chọn nhóm/phân nhóm, danh mục/phân loại, v.v.

### Thuộc tính (props)

| Tên           | Giá trị                                 | Mô tả                                                                                   |
|---------------|-----------------------------------------|----------------------------------------------------------------------------------------|
| items         | `Array`                                 | Danh sách dữ liệu 2 cấp, dạng mảng các object, mỗi object có trường `items` là mảng con |
| value         | `[any, any]`                            | Giá trị được chọn, là mảng 2 phần tử `[giá trị cha, giá trị con]`                      |
| selectedItems | `[object, object]`                      | Trả về object item cha và item con đang được chọn                                      |
| format        | `string`                                | Định dạng hiển thị, mặc định: `"$0, $1"` (tên cha, tên con)                           |
| strictValue   | `true|false`                            | Nếu true, chỉ cho phép chọn giá trị hợp lệ trong danh sách, mặc định false            |
| isFocus       | `true|false`                            | Trạng thái focus (mở/đóng menu chọn)                                                   |
| readOnly      | `true|false`                            | Nếu true, không cho phép thay đổi giá trị                                              |
| disabled      | `true|false`                            | Nếu true, không cho phép thao tác                                                      |

### Sự kiện

- `change`: Gọi khi giá trị thay đổi.

### Ví dụ khởi tạo

```js
var menu = absol._({
    tag: 'DualSelectMenu',
    props: {
        items: [
            { text: 'Nhóm 1', value: 1, items: [ { text: 'A', value: 'a' }, { text: 'B', value: 'b' } ] },
            { text: 'Nhóm 2', value: 2, items: [ { text: 'C', value: 'c' } ] }
        ],
        value: [1, 'a'],
        format: '$0 - $1',
        strictValue: true
    }
});
```

### Ghi chú
- `items` phải là mảng 2 cấp, mỗi phần tử cha có trường `items` là mảng con.
- `value` là mảng 2 phần tử, tương ứng giá trị cha và con.
- Có thể dùng props hoặc setter để thay đổi các thuộc tính động.
