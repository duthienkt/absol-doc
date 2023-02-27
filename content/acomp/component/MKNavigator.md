## [demo](https://absol.cf/libs/absol-acomp/demo/mknavigator.html)
## Khởi tạo

Ví dụ

```js
var nav = render({
  tag: 'mknavigator',
  style: {
    display:'inline-block'// or 'block'
  },
  props: {
    items: [
      { text: 'Thông tin chung', value: 0 },
      { text: 'Chào mừng', value: 1 },
      { text: 'Giới thiệu công ty', value: 2 },
      { text: 'Chính sách và quy định', value: 3},
      { text: 'Công việc', value: 4, },
      { text: 'Hướng dẫn sử dụng', value: 5 },
      { text: 'Hỗ trợ', value: 6 },
      { text: 'Kết thúc', value: 7 }
    ],
    value: 3,
    hiddenValues:[6,7,8,9]
  },
  on: {
    orderchange: function (event) {
      console.log(this.order);
    },
    checkedchange: function (event) {
      console.log(event.itemData, event.checked);
    },
    press: function (event) {
      console.log(event.itemData, this.value);
    }
  }
});

```
## props

| Tên             | Kiểu                          |   Ghi chú                       |
|-----------------|-------------------------------|---------------------------------|
| items           | `Array<{text: string, value: string, draggable?: bool, checked?: bool}>` |         |
| value           | number, string                | Giá trị của item được chọn      |
| hiddenValues     | Array                         | Các giá trị của item cần ẩn đi, không dùng khi có item mà  *draggable=true*  |
| order           | Array(readOnly)               | Lấy ra danh sách value theo thứ tự đang hiển thị |

> Trong trường hợp value không tìm thấy trong items hoặc value có trong hiddenValues thì thanh hiển thị màu xanh bên phải sẽ ở vị trí trên cùng

## events

| Tên             |  event                          |   Ghi chú                       |
|-|-|-|
| orderchange     | `{...}`                              | Khi có kéo thả, thứ tự thay đổi lấy trong trường .order  |
| checkedchange   | `{ itemData: object, checked: bool, ...}` | **itemData**: item được thay đổi |
| press           | `{ itemData: object, ...}`| "" |
