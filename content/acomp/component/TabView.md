# TabView

## Frame

### event

| Tên      | EventData | Ghi chú                                          |
|----------|-----------|--------------------------------------------------|
| active   |           |                                                  |
| inactive |           |                                                  |
| deactive |           | Tương tự inactive, không sử dụng vì lỗi chính tả |

## FrameView

### prototype

| Tên         | Tham số                                 | Trả về                                 | Ghi chú                                                     |
|-------------|-----------------------------------------|----------------------------------------|-------------------------------------------------------------|
| addChild    | elt: `TabFrame / Frame / SinglePage`    |                                        | Thêm frame vào cuối danh sách, không kích hoạt tab vừa thêm |
| addLast     | elt: `TabFrame / Frame / SinglePage`    |                                        | thêm frame vào cuối danh sách, và kích hoạt tab vừa thêm    |
| removeLast  |                                         |                                        | Xóa frame cuối cùng, kích hoạt tab kề cuối                  |
| getLength   |                                         | `number`                               | Trả về số lượng frame hiện có trong FrameView               |
| getAllChild |                                         | `Array<TabFrame / Frame / SinglePage>` | Trả về danh sách các frame hiện có                          |
| getLast     |                                         | `TabFrame / Frame / SinglePage`        | Trả về frame cuối cùng trong danh sách                      |
| removeChild | elt   : `TabFrame / Frame / SinglePage` |                                        | Gỡ frame                                                    |

> các hàm `addChildAfter`, `addChildBefore`, `addChildAfter`, `findChildBefore`, `findChildAfter`, `clearChild` dùng tương tự hàm gốc nhưng tác động lên danh sách frame

> Đối với các thuộc tính hệ thống `childNodes`, sẽ của Dom gốc, có thể hoạt động không chính xác theo ý muốn   

### props

| Tên    | Kiểu dữ liệu | Ghi chú                                                   |
|--------|--------------|-----------------------------------------------------------|
| active | `string`     | Tên của tab đang được kích hoạt, mặc định là tab đầu tiên |

## TabView

