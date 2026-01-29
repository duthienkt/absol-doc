## ObsDiv

### Tổng quan

ObsDiv là module div mở rộng, tự động lắng nghe sự kiện thay đổi kích thước (resize) và hiển thị (visible/hidden/remove)
bằng cách sử dụng ResizeObserver và IntersectionObserver. Hỗ trợ thiết lập các rule responsive để tự động thêm/xóa class
theo kích thước phần tử.

### Thuộc tính (props)

| Tên       | Giá trị           | Mô tả                                                                                                                                                                                                     |
|-----------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| respRules | `Array<RespRule>` | Danh sách rule responsive, mỗi rule xác định khoảng kích thước và class áp dụng                                                                                                                           |
| reusable  | `true`\|`false`   | Nếu true, ObsDiv sẽ không bị hủy observer khi bị remove khỏi DOM, cho phép add lại và tiếp tục hoạt động. Nếu false (mặc định), khi remove khỏi DOM, observer sẽ bị ngắt và cần khởi tạo lại khi add lại. |

#### Mô tả RespRule

`RespRule` là một object xác định điều kiện áp dụng class cho ObsDiv dựa trên kích thước phần tử. Các trường hỗ trợ:

| Trường               | Kiểu dữ liệu         | Ý nghĩa                                                              |
|----------------------|----------------------|----------------------------------------------------------------------|
| minWidth             | `number` (tùy chọn)  | Chiều rộng tối thiểu (px) để rule có hiệu lực.                       |
| maxWidth             | `number` (tùy chọn)  | Chiều rộng tối đa (px) để rule có hiệu lực.                          |
| minHeight            | `number` (tùy chọn)  | Chiều cao tối thiểu (px) để rule có hiệu lực.                        |
| maxHeight            | `number` (tùy chọn)  | Chiều cao tối đa (px) để rule có hiệu lực.                           |
| class hoặc className | `string`\|`string[]` | Tên class hoặc mảng class sẽ được thêm vào ObsDiv khi rule thỏa mãn. |

- Nếu không khai báo `minWidth`/`maxWidth`/`minHeight`/`maxHeight`, rule sẽ áp dụng cho mọi giá trị tương ứng.
- Nếu cả `class` và `className` đều có, ưu tiên `class`, các class có thể là chuỗi ngăn cách bởi dấu cách hoặc mảng
  chuỗi, các phần tử trong mảng phải là tên class đơn lẻ hợp lệ.
- Rule sẽ được kiểu tra theo thứ tự, chỉ chạy rule đầu tiên thỏa mãn.
- Khi rule không còn thỏa mãn, class sẽ tự động bị xóa khỏi ObsDiv.

### Sự kiện

- `resize`: Gọi khi kích thước phần tử thay đổi. Tham số event gồm `borderRect` (kích thước mới), `contentRect`(kích
  thước trong, không tính border).
- `viewchange`: Gọi khi trạng thái hiển thị thay đổi (`visible`, `hidden`, `remove`). Tham số event gồm `action` và
  `borderRect`.
- Các sự kiện này sẽ không được gọi lại nếu ObsDiv bị remove khỏi DOM(sau khi sử dụng 1 lần) và `reusable` là `false`.

### Ví dụ khởi tạo

```js
var obsDiv = absol._({
    tag: 'obsdiv',
    style: {
        width: '50vw',
        height: '200px',
        border: '2px solid #2196f3',
        resize: 'horizontal',
        overflow: 'auto',
        margin: '40px auto',
        transition: 'background 0.3s',
    },
    props: {
        reusable: true,
        respRules: [
            { minWidth: 0, maxWidth: 399, className: 'obs-small' },
            { maxWidth: 799, className: 'obs-medium' },
            { className: 'obs-large' }
        ]
    },
    child: [
        {
            tag: 'div',
            style: {
                padding: '24px',
                fontSize: '1.2em',
                textAlign: 'center',
            },
            child: { text: 'Kéo thay đổi chiều rộng để test class responsive!' }
        }
    ]
});

obsDiv.on('resize', e => {
    console.log('resize', e.borderRect.width, e.borderRect.height);
});
obsDiv.on('viewchange', e => {
    console.log('viewchange', e.action, e.borderRect.width);
});

document.body.appendChild(obsDiv);
```

Nếu

### Ghi chú

- Các rule trong `respRules` sẽ tự động áp dụng class tương ứng khi kích thước phần tử nằm trong khoảng quy định.
- Sự kiện `resize` và `viewchange` giúp lắng nghe thay đổi kích thước và trạng thái hiển thị của phần tử.
- Có thể dùng props hoặc setter để thay đổi các rule động.
