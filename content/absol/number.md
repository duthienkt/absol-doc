## absol.int


`absol.int` là module tiện ích cho các phép tính số cơ bản, format số và một phần format kiểu Excel.

```js
var int = absol.int;
```

### `map(x, l, h, L, H)`

Nội suy tuyến tính một giá trị từ đoạn nguồn sang đoạn đích.

* `x` | Kiểu: `number` | Giá trị cần ánh xạ.
* `l` | Kiểu: `number` | Cận dưới của đoạn nguồn.
* `h` | Kiểu: `number` | Cận trên của đoạn nguồn.
* `L` | Kiểu: `number` | Cận dưới của đoạn đích.
* `H` | Kiểu: `number` | Cận trên của đoạn đích.
* Trả về | Kiểu: `number` | Giá trị đã được nội suy.

```js
absol.int.map(5, 0, 10, 0, 100); // 50
```

### `sumArr(arr)`

Tính tổng các phần tử trong mảng số.

* `arr` | Kiểu: `number[]` | Mảng cần cộng.
* Trả về | Kiểu: `number` | Tổng của tất cả phần tử.

```js
absol.int.sumArr([1, 2, 3, 4]); // 10
```

### `radianInRange(x, start, end)`

Kiểm tra một góc radian có nằm trong khoảng cho trước hay không, có tính quấn vòng theo chu kỳ $2\pi$.

* `x` | Kiểu: `number` | Góc cần kiểm tra, đơn vị radian.
* `start` | Kiểu: `number` | Góc bắt đầu.
* `end` | Kiểu: `number` | Góc kết thúc.
* Trả về | Kiểu: `boolean` | `true` nếu góc nằm trong khoảng, ngược lại là `false`.

```js
absol.int.radianInRange(Math.PI / 2, 0, Math.PI); // true
```

### `distance(x0, y0, x1, y1)`

Tính khoảng cách Euclid giữa hai điểm 2D.

* `x0` | Kiểu: `number` | Hoành độ điểm thứ nhất.
* `y0` | Kiểu: `number` | Tung độ điểm thứ nhất.
* `x1` | Kiểu: `number` | Hoành độ điểm thứ hai.
* `y1` | Kiểu: `number` | Tung độ điểm thứ hai.
* Trả về | Kiểu: `number` | Khoảng cách giữa hai điểm.

```js
absol.int.distance(0, 0, 3, 4); // 5
```

### `numberToString(numb, floatFixed, decimalSeparator, thousandsSeparator, decimalPadding)`

Format số thành chuỗi với số chữ số thập phân, dấu phân cách phần nguyên và phần thập phân có thể tùy chỉnh.

* `numb` | Kiểu: `number` | Giá trị cần format.
* `floatFixed` | Kiểu: `number` | Số chữ số phần thập phân. Dùng `-1` để giữ theo giá trị gốc.
* `decimalSeparator` | Kiểu: `'.' | ','` | Ký tự phân cách phần thập phân.
* `thousandsSeparator` | Kiểu: `',' | '.' | undefined` | Ký tự phân cách hàng nghìn.
* `decimalPadding` | Kiểu: `number` | Số lượng chữ số tối thiểu cho phần nguyên, thiếu sẽ được thêm `0` ở đầu.
* Trả về | Kiểu: `string` | Chuỗi số đã format.

```js
absol.int.numberToString(12345.678, 2, ',', '.', 1); // "12.345,68"
```

### `isNumber(value, decimalSeparator)`

Kiểm tra một giá trị có thể hiểu là số hay không.

* `value` | Kiểu: `number | string` | Giá trị cần kiểm tra.
* `decimalSeparator` | Kiểu: `string | undefined` | Dấu phân cách phần thập phân, mặc định là `'.'`.
* Trả về | Kiểu: `boolean` | `true` nếu giá trị là số hợp lệ.

```js
absol.int.isNumber('123,45', ','); // true
```

### `numberAutoFixed(x, eDelta)`

Làm tròn số theo độ chính xác thập phân thực dụng để giảm sai số dấu chấm động.

* `x` | Kiểu: `number` | Giá trị cần làm tròn.
* `eDelta` | Kiểu: `number | undefined` | Số chữ số thập phân mong muốn, mặc định là `10`.
* Trả về | Kiểu: `number` | Giá trị sau khi làm tròn.

```js
absol.int.numberAutoFixed(0.1 + 0.2, 10); // 0.3
```

### `integerZeroPadding(number, length)`

Chuyển số nguyên thành chuỗi và thêm `0` ở đầu cho đủ độ dài.

* `number` | Kiểu: `number` | Giá trị cần chuyển.
* `length` | Kiểu: `number` | Độ dài chuỗi tối thiểu.
* Trả về | Kiểu: `string` | Chuỗi đã được thêm số `0` ở đầu.

```js
absol.int.integerZeroPadding(7, 3); // "007"
```

### `harmonicMean(a, b)`

Tính trung bình điều hòa của hai số.

* `a` | Kiểu: `number` | Giá trị thứ nhất.
* `b` | Kiểu: `number` | Giá trị thứ hai.
* Trả về | Kiểu: `number` | Trung bình điều hòa.

```js
absol.int.harmonicMean(2, 4); // 2.666...
```

### `numberToExcelString(value, format)`

Format số theo một tập con nhỏ, thực dụng của định dạng số trong Excel.

Hỗ trợ chính:

* Hai section dạng `positive;negative`.
* Ký tự mẫu số `0`, `#`, dấu `.` và `,`.
* Ký hiệu phần trăm `%`.
* Literal đặt trong dấu `"..."`.

Không hỗ trợ đầy đủ các định dạng Excel phức tạp như ngày giờ, màu, điều kiện, scientific notation, fraction.

* `value` | Kiểu: `number` | Giá trị cần format.
* `format` | Kiểu: `string` | Chuỗi format kiểu Excel.
* Trả về | Kiểu: `string` | Chuỗi sau khi format.

```js
absol.int.numberToExcelString(1234.5, '#,##0.00'); // "1,234.50"
absol.int.numberToExcelString(-0.125, '0.0%;(0.0%)'); // "(12.5%)"
```





# Format

## float

Thiết lập trong trang web bằng systemconfig

```js
systemconfig.numberFormatLocales = "vi-VN";
```

Mặc định, thiết lập theo định dạng trình duyệt cung cấp, có thể xem bằng lệnh:

```js
console.log(1234567.89  .toLocaleString());
```

### function parseLocalFloat(s: string, option?: *): string
*absol-acomp/js/utils.js*


```js
//theo thiết lập tryền vào
var x = absol.$.parseLocalFloat('123.456,12', 'vi-VN');//=> 123456.12
//hoặc 
var y = absol.$.parseLocalFloat('123,456.12', {locales:'en-US'});//=> 123456.12
//mặc định, sẽ lấy từ systemconfig hoặc trình duyệt
var y = absol.$.parseLocalFloat('123.456,12');
```

### function formatLocalFloat(value: number, opt?: *): number
*absol-acomp/js/utils.js*

```js
var s = absol.$.formatLocalFloat(123456.12, 'vi-VN');//=>"123.456,12"
var s = absol.$.formatLocalFloat(123456.12, {locales:'vi-VN'});//=>"123.456,12"
var s3 = absol.$.formatLocalFloat(123456.12, 'en-US');//=>"123,456.12"
var s4 = absol.$.formatLocalFloat(123456.12);//=>"123.456,12" theo config
```







