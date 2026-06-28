## class Color

Lớp `Color` biểu diễn màu theo chuẩn RGBA nội bộ với mỗi kênh nằm trong khoảng `0..1`.

### Import

```js
import Color from "absol/src/Color/Color";
```

### Constructor

#### `new Color(rgba)`

- **rgba**: `number[]` có dạng `[r, g, b, a]`, mỗi giá trị trong khoảng `0..1`.

---

### Instance Methods

#### `toHex3(): string`

Trả về chuỗi hex rút gọn 3 ký tự (không có `#`).

#### `toHex4(): string`

Trả về chuỗi hex rút gọn 4 ký tự (có alpha, không có `#`).

#### `toHex6(): string`

Trả về chuỗi hex 6 ký tự (không có `#`).

#### `toHex8(): string`

Trả về chuỗi hex 8 ký tự (có alpha, không có `#`).

#### `toHSLA(): number[]`

Chuyển RGBA sang HSLA, kết quả dạng `[h, s, l, a]` trong `0..1`.

#### `toHSBA(): number[]`

Chuyển RGBA sang HSBA, kết quả dạng `[h, s, b, a]` trong `0..1`.

#### `toHWBA(): number[]`

Chuyển RGBA sang HWBA, kết quả dạng `[h, w, b, a]` trong `0..1`.

#### `toCMYK(): number[]`

Chuyển RGB sang CMYK, kết quả dạng `[c, m, y, k]` trong `0..1`.

#### `getHighContrastColor(): Color`

Tạo màu tương phản mạnh theo hue/saturation/brightness.

#### `getHightContrastColor(): Color`

Alias giữ tương thích cũ, tương đương `getHighContrastColor()`.

#### `getLuminance(): number`

Tính relative luminance theo chuẩn WCAG.

#### `getContrastWith(other): number`

Tính contrast ratio giữa màu hiện tại và `other`.

- **other**: `Color`

#### `getContrastYIQ(): Color`

Trả về đen hoặc trắng theo thuật toán YIQ để đảm bảo dễ đọc.

#### `clone(): Color`

Tạo bản sao của màu hiện tại.

#### `withAlpha(alpha): Color`

Trả về màu mới với alpha được thay thế.

- **alpha**: `number` (được clamp về `0..1`)

#### `blend(other, mode): Color`

Trộn màu bằng alpha compositing.

- **other**: `Color`
- **mode**: `string=` (hiện tại tham số này chưa dùng trong logic)

#### `nearestNamedColor(notStandard, hsbWeight): string`

Tìm tên màu gần nhất trong bảng màu đặt tên.

- **notStandard**: `boolean=` nếu `true` sẽ xét thêm `Color.nonStandarNamedColors`
- **hsbWeight**: `number[]=` trọng số cho `[h, s, b]`, mặc định `[5, 3, 1]`

#### `toString(mode): string`

Xuất màu thành text theo mode.

- **mode**: `"rgba"` (mặc định), `"rgb"`, `"hsl"`, `"hsla"`, `"hsb"`, `"hsba"`, `"hex3"`, `"hex4"`, `"hex6"`, `"hex8"`, `"hwb"`, `"hwba"`, `"cmyk"`.

---

### Static Factory Methods

#### `Color.parse(text): Color`

Parse chuỗi màu thành `Color`.

Hỗ trợ:

- Named color (ví dụ: `red`, `aliceblue`, `transparent`)
- `#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa`
- `rgb(...)`, `rgba(...)`
- `hsl(...)`, `hsla(...)`
- `hsb(...)`, `hsba(...)`
- `hwb(...)`, `hwba(...)`
- `cmyk(...)`

#### `Color.fromRGB(r, g, b): Color`

#### `Color.fromRGBA(r, g, b, a): Color`

#### `Color.fromHSL(h, s, l): Color`

#### `Color.fromHSLA(h, s, l, a): Color`

#### `Color.fromHSB(h, s, b): Color`

#### `Color.fromHSBA(h, s, b, a): Color`

#### `Color.fromHWB(h, w, b): Color`

#### `Color.fromHWBA(h, w, b, a): Color`

#### `Color.fromCMYK(c, m, y, k): Color`

#### `Color.fromInt(code, bits): Color`

- **bits**: `8 | 16 | 24 | 32`

---

### Static Converter Helpers

Nhóm hàm chuyển đổi dữ liệu (array) giữa các hệ màu:

- `Color.rgbaToHSLA(rgba)`
- `Color.rgbaToHSBA(rgba)`
- `Color.rgbaToHWBA(rgba)`
- `Color.hslaToRGBA(hsla)`
- `Color.hslaToHSBA(hsla)`
- `Color.hsbaToRGBA(hsba)`
- `Color.hsbaToHSLA(hsba)`
- `Color.hsbaToHWBA(hsba)`
- `Color.hwbaToRGBA(hwba)`
- `Color.hwbaToHSBA(hwba)`
- `Color.rgbToCMYK(rgb)`
- `Color.cmykToRGB(cmyk)`

Nhóm hàm xuất text nhanh:

- `Color.rgbToText(rgba)`
- `Color.rgbaToText(rgba)`
- `Color.hslToText(hsl)`
- `Color.hslaToText(hsla)`
- `Color.hsbToText(hsba)`
- `Color.hsbaToText(hsba)`
- `Color.cmykToText(cmyk)`
- `Color.rgbToHex(rgb)`
- `Color.rgbaToHex(rgba)`

---

### Static Data

- `Color.namedColors`: bảng màu CSS chuẩn.
- `Color.nonStandarNamedColors`: bảng màu mở rộng (không chuẩn CSS).
- `Color.regexes`: tập regex dùng cho parse.
- `Color.templates`: template xuất text theo mode.

---

### Simple examples

```js
import Color from "absol/src/Color/Color";

// Parse và xuất format
var c1 = Color.parse("rgba(255, 128, 64, 0.5)");
console.log(c1.toString("hex8")); // ví dụ: "ff80407f"
console.log(c1.toString("hsla"));

// Tạo từ HSL
var c2 = Color.fromHSL(0.6, 0.8, 0.5);
console.log(c2.toString("rgb"));

// Màu chữ tương phản
var bg = Color.parse("#1e90ff");
var textColor = bg.getContrastYIQ();
console.log(textColor.toString("hex6")); // "000000" hoặc "ffffff"

// Contrast ratio
var ratio = bg.getContrastWith(Color.parse("#ffffff"));
console.log(ratio);

// Dùng pattern gần EZView/Attributes: export nếu alpha hữu dụng
var colorAttr = {
	set: function (value, ref) {
		var c = Color.parse(value);
		ref.set(c);
		return c;
	},
	get: function (ref) {
		return ref.get().toString("rgba");
	},
	export: function (ref) {
		var c = ref.get();
		return c.rgba[3] < 1 ? c.toString("rgba") : c.toString("hex6");
	}
};
```

## class Turtle

`Turtle` là helper để xây chuỗi path SVG theo kiểu chain-method.
Mỗi lệnh sẽ được lưu vào danh sách command nội bộ, sau đó xuất ra `d` bằng `getPath()`.

### Import

```js
import Turtle from "absol/src/Math/Turtle";
```

### Constructor

#### `new Turtle()`

Khởi tạo tại gốc tọa độ `(0, 0)`.

---

### Nhóm lệnh di chuyển và vẽ đường thẳng

#### `moveTo(x, y): this`
#### `moveBy(dx, dy): this`
#### `moveForward(length): this`

Di chuyển con trỏ nhưng không vẽ (SVG `M` / `m`).

#### `lineTo(x, y): this`
#### `lineBy(dx, dy): this`
#### `lineForward(length): this`

Vẽ đoạn thẳng tới vị trí mới (SVG `L` / `l`).

#### `hLineTo(x): this`
#### `hLineBy(dx): this`
#### `vLineTo(y): this`
#### `vLineBy(dy): this`

Vẽ đường ngang/dọc (SVG `H/h/V/v`).

---

### Nhóm điều khiển hướng

#### `rotateDirTo(angle): this`

Đặt hướng tiếp tuyến hiện tại theo góc tuyệt đối (đơn vị độ).

#### `rotateDirBy(dAngle): this`

Xoay hướng hiện tại theo góc tương đối (đơn vị độ).

> `moveForward` và `lineForward` dùng vector hướng này để tính điểm đích.

---

### Nhóm đường cong Bezier

#### `cubicBezierTo(c1x, c1y, c2x, c2y, x, y): this`
#### `cubicBezierBy(c1dx, c1dy, c2dx, c2dy, dx, dy): this`

Bezier bậc 3 (SVG `C/c`).

#### `smoothCubicBezierTo(c2x, c2y, x, y): this`
#### `smoothCubicBezierBy(c2dx, c2dy, dx, dy): this`

Bezier bậc 3 dạng smooth (SVG `S/s`).

#### `quadraticBezierTo(cx, cy, x, y): this`
#### `quadraticBezierBy(cdx, cdy, dx, dy): this`

Bezier bậc 2 (SVG `Q/q`).

#### `smoothQuadraticBezierTo(cx, cy, x, y): this`
#### `smoothQuadraticBezierBy(cdx, cdy, dx, dy): this`

Bezier bậc 2 dạng smooth (SVG `T/t`).

---

### Nhóm cung tròn / đóng path

#### `arcTo(rx, ry, angle, large, sweep, x, y): this`
#### `arcBy(rx, ry, angle, large, sweep, dx, dy): this`

Thêm cung elip (SVG `A/a`).

#### `closePath(): this`

Đóng path về điểm bắt đầu segment hiện tại (SVG `z`).

---

### Tiện ích

#### `translate(dx, dy): this`

Tịnh tiến toàn bộ command hiện có.

#### `getPath(): string`

Xuất chuỗi path SVG dùng cho thuộc tính `d`.

#### `reset(): this`

Xóa toàn bộ command và đưa con trỏ về `(0, 0)`.

#### `clone(): Turtle`

Sao chép trạng thái turtle hiện tại.

---

### Simple examples

#### 1) Path cơ bản (khung + đường gấp khúc)

```js
import Turtle from "absol/src/Math/Turtle";

var t = new Turtle();
t.moveTo(10, 10)
	.lineTo(110, 10)
	.lineTo(110, 60)
	.lineTo(10, 60)
	.closePath();

console.log(t.getPath());
// M 10,10 L 110,10 L 110,60 L 10,60 z
```

#### 2) Ví dụ theo style chart (tham khảo StackedHorizontalBarChart)

```js
import Turtle from "absol/src/Math/Turtle";

var width = 300;
var height = 160;
var rowSpacing = 40;
var nRows = 4;

// Vẽ trục OX/OY
var axis = new Turtle();
axis.moveTo(width + 10, 0)
	.hLineBy(-width - 10)
	.vLineBy(height);

// Vẽ lưới ngang
var grid = new Turtle();
for (var i = 1; i <= nRows; ++i) {
	grid.moveTo(0, i * rowSpacing)
		.hLineBy(width);
}

var axisPath = axis.getPath();
var gridPath = grid.getPath();

// Sau đó gán vào SVG path: <path d={axisPath}/> và <path d={gridPath}/>
console.log(axisPath);
console.log(gridPath);
```

#### 3) Dùng hướng + lineForward

```js
import Turtle from "absol/src/Math/Turtle";

var t = new Turtle();
t.moveTo(50, 50)
	.rotateDirTo(0)
	.lineForward(40)   // sang phải
	.rotateDirBy(90)
	.lineForward(30);  // đi xuống (theo hệ tọa độ SVG)

console.log(t.getPath());
```

