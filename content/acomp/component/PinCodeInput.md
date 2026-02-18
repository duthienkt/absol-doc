## PinCodeInput

### [Demo](https://absol.cf/libs/absol-acomp/demo/pincodeinput.html)

### Tổng quan

`PinCodeInput` là module nhập mã PIN/OTP theo dạng nhiều ô (cell). Người dùng có thể:

- Nhập bằng bàn phím / paste
- Click vào từng ô để đặt vị trí nhập

Giá trị được lấy ra qua thuộc tính `value` và luôn là **chuỗi số**.

Component sử dụng một `input[type="text"]` ẩn để nhận dữ liệu nhập và đồng bộ selection/range ra UI cell.

### props

| Tên    | Kiểu dữ liệu | Mặc định | Mô tả |
|--------|--------------|----------|------|
| value  | `string`     | `""`     | Giá trị hiện tại. Khi set sẽ tự loại bỏ ký tự không phải số (`\D`). Getter trả về chuỗi đã cắt theo `length`. |
| length | `number`     | `6`      | Độ dài mã PIN/OTP, tương ứng số lượng cell hiển thị. |

> Lưu ý: giá trị nội bộ được lưu ở `rawValue`. Getter `value` trả về `rawValue.slice(0, length)`.

### Sự kiện

| Tên    | EventData | Mô tả                                     |
|--------|----------|-------------------------------------------|
| input  | `{ type: "input", value: string, originEvent?: Event }` | Gọi khi người dùng nhập thay đổi giá trị. |
| change | `{ type: "change", value: string, originEvent?: Event }` | Gọi khi người dùng nhập **đủ** `length`.  |
| focus  | `{ type: "focus", originEvent?: FocusEvent }` | Gọi khi component được focus (chưa làm).  |
| blur   | `{ type: "blur", originEvent?: FocusEvent }` | Gọi khi component mất focus. (chưa làm).   |

### prototype

| Tên   | Tham số | Trả về | Mô tả |
|-------|--------|--------|------|
| focus |        |        | Focus vào PinCodeInput (focus input ẩn). |
| blur  |        |        | Bỏ focus. |
| clear |        |        | Xoá giá trị (`value = ""`). |

### Ví dụ

```js
var pin = absol._({
  tag: 'pincodeinput',
  props: {
    length: 6,
    value: ''
  },
  on: {
    input: function (e) {
      console.log('input', pin.value);
    },
    change: function (e) {
      console.log('done', pin.value);
    }
  }
}).addTo(document.body);

// set value
pin.value = '123456';

// đọc value (string)
console.log(pin.value);

// đổi độ dài
pin.length = 4;

// clear
pin.clear();
```

### Ghi chú

- Component chỉ nhận **chữ số**. Khi set `value`, các ký tự khác số sẽ bị loại bỏ.
- Khi click vào cell, component sẽ đặt vị trí nhập và tự chọn từ vị trí đó đến cuối (phù hợp kiểu edit OTP).
- Một số trình duyệt (đặc biệt Safari) có thể vẫn hiển thị selection highlight của input ẩn trong một số trường hợp, sẽ thấy 2 chấm tròn màu xanh. 