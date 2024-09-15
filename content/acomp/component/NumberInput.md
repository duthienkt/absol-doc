## [Demo](https://absol.cf/libs/absol-acomp/demo/numberinput.html)

## Tạo mới

```js
var mNumberInput = absol._({
  tag: 'numberinput',
  // class: 'as-width-auto',
  style:{
    width: '13em'
  },
  props: {
    value: 1234356.789422,
    step: 1000,
    min: 0,
    max: 1e9,
    floatFixed: 2,//adapt for old config
    format:'vi-VN'
  },
  on: {
    change: function (event) {
      console.log(event.by, this.value);
      absol.require('snackbar').show(this.value + '');
    }
  }
}).addTo(document.body);

```

## props

- **value:** `number` {setter, getter} giá trị, giá trị lấy ra có thể khác giá trị truyền vào phụ thuộc min, max, floatFixed, có thể lấy giá trị gốc ở trường `rawValue`
- **step:** `number` bước nhảy mỗi khi nhấn nút
- **min:** `number`
- **max:** `number`
- **floatFixed:** `number` số chữ số thập phân được làm tròn, nếu là số âm, sẽ làm tròn đến hàng chục, trăm ...
- **format:** `"vi-VN"`, `"en-US"` hoặc  `"none"`, mặc định sử dụng `systemconfig.numberFormatLocales`, nếu không có, mặc định `"vi-VN"`
- **disabled:** `boolean` bị vô hiệu hóa
- **readonly:** `boolean` chỉ đọc
- **valueDraggable:** `boolean` cho phép kéo thả để thay đổi giá trị, mặc định là `false`

## event

### change

Sự kiện khi người dùng nhấn nút mũi tên, hoặc input blur và có thay đổi giá trị
> Lưu ý trường `rawValue` sẽ thay đổi sau event change, trước event change, `rawValue` vẫn giữ nguyên giá trị giống giá trị value truyền vào, sau event chagnge, rawValue = value

## class

- `"as-width-auto"`: Tự động mở rộng chiều dài.



