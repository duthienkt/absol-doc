## ExcelWidthInput

`excelwidthinput` là biến thể của `ribbontextinput` để nhập độ rộng cột kiểu Excel. Component này có hai mode:

- `auto`: chỉ đọc, giá trị trả về là chuỗi `"auto"`
- `ch`: cho phép nhập số, giá trị trả về là chuỗi số 

## Tạo mới

```js
var inputex = absol._({
    tag: 'excelwidthinput',
    style: {
        size: 'default'
    },
    on: {
        change: function (event) {
            console.log(this.value);
        }
    }
}).addTo(document.body);
```

## Ví dụ đầy đủ

```js
var excelWidthInput = absol._({
    tag: 'excelwidthinput',
    props: {
        value: 'auto'
    },
    on: {
        change: function () {
            console.log('value =', this.value);
        }
    }
}).addTo(document.body);

// Chuyển sang nhập số theo đơn vị ch
excelWidthInput.value = 12;

// Trở lại chế độ tự động
excelWidthInput.value = 'auto';
```

## Tên tag

- `excelwidthinput`


## Class

`ExcelWidthInput`

## Nguồn

- `js/RibbonTextInput.js`

## Demo

- https://absol.cf/libs/absol-acomp/demo/flexiconinput.html

## props riêng

| Tên | Kiểu dữ liệu | Ghi chú |
|-----|--------------|---------|
| `value` | `'auto' \| string` | Nếu là `auto` thì component vào chế độ tự động và input bị `readOnly`. Nếu là số hợp lệ thì component chuyển sang chế độ nhập tay theo đơn vị `ch`. |

## props kế thừa từ RibbonTextInput

| Tên | Kiểu dữ liệu | Ghi chú |
|-----|--------------|---------|
| `label` | `HTMLElement \| string \| object` | Nhãn bên trái ô nhập. |
| `unit` | `string` | Đơn vị hiển thị bên phải ô nhập. Với `ExcelWidthInput`, menu mode đã thay thế cho nhu cầu nhập đơn vị nên thường không cần đặt thêm. |
| `items` | `Array \| function` | Danh sách menu dropdown. Component này tự gán sẵn menu `auto/ch`. |
| `readOnly` | `boolean` | Có thể bị component tự đổi theo mode. Ở mode `auto` sẽ là `true`. |
| `disabled` | `boolean` | Khóa toàn bộ control. |

## Giá trị trả về của `value`

| Trạng thái | Giá trị trả về |
|-----------|----------------|
| Đang ở mode `auto` | `'auto'` |
| Đang ở mode `ch` và input hợp lệ | Chuỗi số, ví dụ `'12'` |

Lưu ý: getter hiện tại trả về chuỗi số thay vì number.

## event

| Tên | EventData | Ghi chú |
|-----|-----------|---------|
| `change` | `{ target, type, value }` | Bắn khi đổi mode hoặc khi input phát sự kiện thay đổi giá trị. |
| `select` | `{ target, type, item }` | Bắn khi người dùng chọn `auto` hoặc `ch` từ menu dropdown. |
| `focus` | DOM-like event | Kế thừa từ `RibbonTextInput`. |
| `blur` | DOM-like event | Kế thừa từ `RibbonTextInput`. |
| `input` | DOM-like event | Kế thừa từ `RibbonTextInput`. |
| `keydown` | DOM-like event | Kế thừa từ `RibbonTextInput`. |
| `keyup` | DOM-like event | Kế thừa từ `RibbonTextInput`. |

## Hành vi đáng chú ý

- Khi khởi tạo, component mặc định ở mode `auto`.
- Khi chuyển từ `auto` sang `ch`, component mở ô nhập và focus/select nội dung hiện tại.
- Khi đang ở mode `ch`, component lưu số hợp lệ cuối cùng vào `prevNumber`.
- Nếu nhập giá trị không hợp lệ rồi `change`, input sẽ quay về `prevNumber` gần nhất.
- Menu dropdown được tạo sẵn bằng `items()` nội bộ với hai lựa chọn `auto` và `ch`.

## Gợi ý sử dụng

Phù hợp khi bạn cần cho người dùng chọn giữa:

- chiều rộng tự động theo nội dung
- chiều rộng thủ công theo đơn vị cột kiểu Excel

Ví dụ xử lý giá trị:

```js
var value = excelWidthInput.value;

if (value === 'auto') {
    console.log('Dùng chiều rộng tự động');
}
else {
    console.log('Chiều rộng theo ch =', parseFloat(value));
}
```