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

### `parseExtFloat(text, opt)`

Parse số thực từ chuỗi có thể chứa dấu phân cách hàng nghìn và dấu thập phân tùy biến.

Mặc định:

* `decimalSeparator = '.'`
* `thousandsSeparator = ','`

Lưu ý:

* Chỉ hỗ trợ dấu `.` và `,` cho phần separator.
* Ký tự không hợp lệ sẽ bị loại bỏ trước khi parse.
* Có thể truyền trực tiếp `number` (hàm sẽ trả lại chính số đó).

* `text` | Kiểu: `string | number` | Chuỗi/số đầu vào.
* `opt` | Kiểu: `object=` | Tùy chọn parse.
* `opt.thousandsSeparator` | Kiểu: `',' | '.' | ''` | Dấu phân cách hàng nghìn.
* `opt.decimalSeparator` | Kiểu: `'.' | ','` | Dấu phân cách thập phân.
* Trả về | Kiểu: `number` | Giá trị đã parse, hoặc `NaN` nếu không parse được.

```js
absol.int.parseExtFloat('1,234.56');
// 1234.56

absol.int.parseExtFloat('1.234,56', {
	thousandsSeparator: '.',
	decimalSeparator: ','
});
// 1234.56

absol.int.parseExtFloat('abc');
// NaN
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


## absol.measurements

Module này cung cấp các hàm đổi đơn vị chiều dài, đổi đơn vị hiển thị in ấn và một số hàm tính toán tọa độ địa lý.

```js
var m = absol.measurements;
```

### Đổi đơn vị chiều dài

### `feetToMeter(ft)`

Đổi feet sang mét.

* `ft` | Kiểu: `number` | Giá trị feet.
* Trả về | Kiểu: `number` | Giá trị mét.

```js
absol.measurements.feetToMeter(3.28084); // xấp xỉ 1
```

### `meterToFeet(mt)`

Đổi mét sang feet.

* `mt` | Kiểu: `number` | Giá trị mét.
* Trả về | Kiểu: `number` | Giá trị feet.

```js
absol.measurements.meterToFeet(1); // xấp xỉ 3.28084
```

### `meterToInch(mt)`

Đổi mét sang inch.

* `mt` | Kiểu: `number` | Giá trị mét.
* Trả về | Kiểu: `number` | Giá trị inch.

```js
absol.measurements.meterToInch(1); // xấp xỉ 39.3701
```

### `mileToMeter(ml)`

Đổi mile sang mét.

* `ml` | Kiểu: `number` | Giá trị mile.
* Trả về | Kiểu: `number` | Giá trị mét.

```js
absol.measurements.mileToMeter(1); // xấp xỉ 1609.34
```

### `meterToMile(ml)`

Đổi mét sang mile.

* `ml` | Kiểu: `number` | Giá trị mét.
* Trả về | Kiểu: `number` | Giá trị mile.

```js
absol.measurements.meterToMile(1609.34); // xấp xỉ 1
```

### `meterToYard(mt)`

Đổi mét sang yard.

* `mt` | Kiểu: `number` | Giá trị mét.
* Trả về | Kiểu: `number` | Giá trị yard.

```js
absol.measurements.meterToYard(1); // xấp xỉ 1.09361
```

### `yardToMeter(yd)`

Đổi yard sang mét.

* `yd` | Kiểu: `number` | Giá trị yard.
* Trả về | Kiểu: `number` | Giá trị mét.

```js
absol.measurements.yardToMeter(1.09361); // xấp xỉ 1
```

### Đổi đơn vị dot, point, pixel, centimeter

### `pointToDot(p)`

Đổi point sang dot (theo ngữ cảnh web, dot tương đương pixel).

* `p` | Kiểu: `number` | Giá trị point.
* Trả về | Kiểu: `number` | Giá trị dot.

```js
absol.measurements.pointToDot(72); // 54
```

### `dotToPoint(d)`

Đổi dot sang point.

* `d` | Kiểu: `number` | Giá trị dot.
* Trả về | Kiểu: `number` | Giá trị point.

```js
absol.measurements.dotToPoint(96); // 128
```

### `pxToCentimeter(px)`

Hàm đổi pixel sang centimeter.

* `px` | Kiểu: `number` | Giá trị pixel.
* Trả về | Kiểu: `number | undefined` | Trong mã hiện tại chưa có phần thân hàm nên trả về `undefined`.

### `centimeterToPx(cm)`

Đổi centimeter sang pixel (theo chuẩn 96 dpi).

* `cm` | Kiểu: `number` | Giá trị centimeter.
* Trả về | Kiểu: `number` | Giá trị pixel.

```js
absol.measurements.centimeterToPx(2.54); // xấp xỉ 96
```

### `chToArial14Px(ch)`

Ước lượng độ rộng ký tự đơn vị ch sang pixel cho font Arial cỡ 14.

* `ch` | Kiểu: `number` | Số đơn vị ch.
* Trả về | Kiểu: `number` | Pixel ước lượng.

### `chToCalibri11Px(ch)`

Ước lượng độ rộng ký tự đơn vị ch sang pixel cho font Calibri cỡ 11.

* `ch` | Kiểu: `number` | Số đơn vị ch.
* Trả về | Kiểu: `number` | Pixel ước lượng.

### Kích thước trang chuẩn

### `PAGE_SIZE_IN_DOT`

Bảng kích thước các loại giấy theo đơn vị dot, dạng:

* Khóa: `a4`, `letter`, `legal`, ...
* Giá trị: `[width, height]`

```js
absol.measurements.PAGE_SIZE_IN_DOT.a4; // [595.28, 841.89]
```

### `PAGE_SIZE_IN_POINT`

Bảng kích thước trang theo point, được suy ra từ `PAGE_SIZE_IN_DOT` qua hàm `dotToPoint`.

```js
absol.measurements.PAGE_SIZE_IN_POINT.a4;
```

### Hàm liên quan tọa độ địa lý

### `latLngRectFromCenter(center, distance)`

Tạo bounding box theo vĩ độ/kinh độ từ một tâm và bán kính khoảng cách.

* `center` | Kiểu: `{latitude: number, longitude: number}` | Tọa độ tâm.
* `distance` | Kiểu: `number` | Khoảng cách tính theo km.
* Trả về | Kiểu: `{ latitude: {min:number, max:number}, longitude: {min:number, max:number} }`

```js
var rect = absol.measurements.latLngRectFromCenter(
	{ latitude: 10.7769, longitude: 106.7009 },
	5
);
```

### `latLngDistance(p0, p1)`

Tính khoảng cách giữa hai điểm GPS theo công thức Haversine.

* `p0` | Kiểu: `{latitude: number, longitude: number}`
* `p1` | Kiểu: `{latitude: number, longitude: number}`
* Trả về | Kiểu: `number` | Khoảng cách theo km.

```js
absol.measurements.latLngDistance(
	{ latitude: 10.7769, longitude: 106.7009 },
	{ latitude: 21.0278, longitude: 105.8342 }
); // xấp xỉ 1140 km
```







