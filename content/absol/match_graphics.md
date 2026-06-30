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

## class Vec2

`Vec2` biểu diễn vector/điểm 2D với hai thành phần `x`, `y`.

### Import

```js
import Vec2 from "absol/src/Math/Vec2";
```

### Constructor

#### `new Vec2(x, y)`

- `x`: `number`
- `y`: `number`

### Thuộc tính

- `x`: `number`
- `y`: `number`

### Instance Methods

#### `copy(): Vec2`
#### `toString(): string`
#### `abs(): number`

- `abs()` trả về độ dài vector: $\sqrt{x^2 + y^2}$.

#### `normalized(): Vec2`

Trả về vector đơn vị cùng hướng. Nếu vector có độ dài `0` thì trả về `(0, 0)`.

#### `mult(h): Vec2`
#### `div(h): Vec2`

Nhân/chia vector với một số.

#### `dist(v): number`

Khoảng cách Euclid từ vector hiện tại tới `v`.

#### `sub(v): Vec2`
#### `add(v): Vec2`
#### `inv(): Vec2`

Các phép toán cộng/trừ/đảo dấu vector.

#### `linear(v, h): Vec2`

Nội suy tuyến tính giữa `this` và `v` theo hệ số `h`.

#### `dot(v1): number`
#### `cross(v1): number`

Tích vô hướng và tích có hướng 2D.

#### `direction(): number`

Trả về góc hướng của vector theo radian (`atan2(y, x)`).

#### `translate(dx, dy): Vec2`

Dịch vector theo `dx`, `dy`.

#### `rotate(angle): Vec2`

Xoay vector quanh gốc tọa độ theo góc `angle` (radian).

#### `rotate90(): Vec2`

Xoay vector 90 độ ngược chiều kim đồng hồ.

#### `equals(b): boolean`

So sánh bằng tuyệt đối theo `x` và `y`.

### Static Methods

#### `Vec2.fromDirection(angle): Vec2`

Tạo vector đơn vị theo góc `angle` (radian).

#### `Vec2.make(x, y): Vec2`

Tạo `Vec2` linh hoạt từ:

- Mảng `[x, y]`
- Một `Vec2` (copy)
- Cặp số `x, y`

### Static Constants

- `Vec2.ZERO`: `(0, 0)`
- `Vec2.OX`: `(1, 0)`
- `Vec2.OY`: `(0, 1)`

### Simple examples

```js
import Vec2 from "absol/src/Math/Vec2";

var a = new Vec2(3, 4);
var b = new Vec2(1, 2);

console.log(a.abs());          // 5
console.log(a.add(b).toString()); // (4, 6)
console.log(a.dot(b));         // 11
console.log(a.cross(b));       // 2

var dir = Vec2.fromDirection(Math.PI / 2);
console.log(dir.toString());   // gần (0, 1)
```

## class SegmentLine

`SegmentLine` biểu diễn đoạn thẳng 2D từ `start` đến `end`.

### Import

```js
import SegmentLine from "absol/src/Math/SegmentLine";
```

### Constructor

#### `new SegmentLine(start, end)`

- `start`: `Vec2`
- `end`: `Vec2`

### Thuộc tính

- `start`: `Vec2`
- `end`: `Vec2`

### Instance Methods

#### `length(): number`

Độ dài đoạn thẳng.

#### `pointAt(t): Vec2`

Lấy điểm trên đoạn theo nội suy tuyến tính.

- `t = 0` trả về `start`
- `t = 1` trả về `end`

#### `nearestParamToPoint(point): number`

Tìm tham số gần nhất trên đoạn so với một điểm ngoài.

- `point`: `Vec2`
- Trả về: `number` trong khoảng `[0, 1]`

#### `nearestPointToPoint(point): Vec2`

Trả về điểm gần nhất trên đoạn so với `point`.

#### `intersect(sgm): Vec2 | null`

Tính giao điểm giữa đường thẳng đi qua đoạn hiện tại và đường thẳng đi qua `sgm`.

- Nếu song song (hoặc trùng), trả về `null`.

#### `isIntersectWithSegment(sgm): boolean`

Kiểm tra có giao điểm theo logic của `intersect`.

#### `orthogonalProjectionPoint(point): Vec2`

Chiếu vuông góc một điểm lên đường thẳng của đoạn.

#### `midpoint(): Vec2`

Trả về trung điểm đoạn.

#### `clone(): SegmentLine`

Tạo bản sao đoạn thẳng.

### Simple example

```js
import Vec2 from "absol/src/Math/Vec2";
import SegmentLine from "absol/src/Math/SegmentLine";

var s1 = new SegmentLine(new Vec2(0, 0), new Vec2(10, 0));
var s2 = new SegmentLine(new Vec2(5, -5), new Vec2(5, 5));

var len = s1.length();
var mid = s1.midpoint();
var ip = s1.intersect(s2);
var nearest = s1.nearestPointToPoint(new Vec2(7, 3));
```

### Lưu ý theo mã nguồn hiện tại

- `intersect()` và `isIntersectWithSegment()` đang xét giao của hai đường thẳng vô hạn, chưa kiểm tra điểm giao có nằm trong phạm vi hai đoạn hay không.
- `clone()` đang gọi `this.start.clone()` và `this.end.clone()`, trong khi `Vec2` hiện có `copy()` thay vì `clone()`. Điều này có thể gây lỗi runtime.

## class BezierCurve

`BezierCurve` biểu diễn đường cong Bezier bậc 3 với 4 điểm: điểm đầu, 2 điểm điều khiển và điểm cuối.

### Import

```js
import BezierCurve from "absol/src/Math/BezierCurve";
```

### Constructor

#### `new BezierCurve(startPoint, ctrlPoint1, ctrlPoint2, endPoint)`

- `startPoint`: `Vec2`
- `ctrlPoint1`: `Vec2`
- `ctrlPoint2`: `Vec2`
- `endPoint`: `Vec2`

### Thuộc tính

- `startPoint`: `Vec2`
- `ctrlPoint1`: `Vec2`
- `ctrlPoint2`: `Vec2`
- `endPoint`: `Vec2`

### Instance Methods

#### `pointAt(t): Vec2`

Lấy điểm trên đường cong tại tham số `t` (thực tế nên dùng trong khoảng `[0, 1]`).

```js
var p = curve.pointAt(0.5);
```

#### `nearestBzParamToPoint(point): number`

Tìm tham số `t` gần nhất với một điểm ngoài đường cong bằng tối ưu 1 chiều (ternary search).

- `point`: `Vec2`
- Trả về: `number` (xấp xỉ trong `[0, 1]`)

#### `distanceToPoint(point): number`

Tính khoảng cách ngắn nhất từ một điểm tới đường cong.

- `point`: `Vec2`
- Trả về: `number`

#### `nearestBParamToOtherBzCurve(otherCurve): { current: number, other: number }`

Tìm cặp tham số gần nhau nhất giữa hai đường cong Bezier:

- `current`: tham số trên đường cong hiện tại.
- `other`: tham số tương ứng trên `otherCurve`.

- `otherCurve`: `BezierCurve`
- Trả về: `{ current: number, other: number }`

#### `copy(): BezierCurve`

Tạo bản sao sâu của đường cong hiện tại.

### Simple example

```js
import Vec2 from "absol/src/Math/Vec2";
import BezierCurve from "absol/src/Math/BezierCurve";

var curve = new BezierCurve(
	new Vec2(0, 0),
	new Vec2(30, 80),
	new Vec2(70, 80),
	new Vec2(100, 0)
);

var mid = curve.pointAt(0.5);
var t = curve.nearestBzParamToPoint(new Vec2(40, 30));
var dist = curve.distanceToPoint(new Vec2(40, 30));
var cloned = curve.copy();
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

## class Circle (class này chưa test)

`Circle` biểu diễn một đường tròn theo tâm `(x, y)` và bán kính `r`.

### Import

```js
import Circle from "absol/src/Math/Circle";
```

### Constructor

#### `new Circle(x, y, r)`

- `x`: `number` - hoành độ tâm.
- `y`: `number` - tung độ tâm.
- `r`: `number` - bán kính.

### Thuộc tính

- `x`: `number`
- `y`: `number`
- `r`: `number`

### Instance Methods

#### `isPointInBound(p): boolean`

Kiểm tra một điểm có nằm trong phạm vi đường tròn.

- `p`: `{x: number, y: number}`
- Trả về: `boolean`

```js
var c = new Circle(100, 100, 50);
var inside = c.isPointInBound({ x: 120, y: 110 });
```

#### `isRectInBound(rect): boolean`

Kiểm tra hình chữ nhật có nằm trong phạm vi đường tròn hay không bằng cách kiểm tra 4 đỉnh `A/B/C/D` của `rect`.

- `rect`: object có các hàm `A()`, `B()`, `C()`, `D()` trả về điểm `{x, y}`.
- Trả về: `boolean`

```js
var c = new Circle(100, 100, 80);
var ok = c.isRectInBound(rect);
```

### Static Method

#### `Circle.make(x, y, r): Circle`

Factory method tạo nhanh một đối tượng `Circle`.

```js
var c = Circle.make(0, 0, 10);
```

### Lưu ý theo mã nguồn hiện tại

- Trong `isPointInBound`, điều kiện đang dùng `distance(...) > r` với biến `r` tự do, thay vì `this.r`.
- Nếu chạy trực tiếp, đoạn này có thể gây lỗi `ReferenceError` hoặc cho kết quả không như mong đợi.


## class Arc (class này chưa test)

`Arc` biểu diễn một cung tròn theo tâm `(x, y)`, bán kính `r`, góc bắt đầu `start` và góc kết thúc `end` (đơn vị radian).

### Import

```js
import Arc from "absol/src/Math/Arc";
```

### Constructor

#### `new Arc(x, y, r, start, end)`

- `x`: `number` - hoành độ tâm.
- `y`: `number` - tung độ tâm.
- `r`: `number` - bán kính.
- `start`: `number` - góc bắt đầu (radian).
- `end`: `number` - góc kết thúc (radian).

### Thuộc tính

- `x`: `number`
- `y`: `number`
- `r`: `number`
- `start`: `number`
- `end`: `number`

### Instance Methods

#### `isPointInBound(p): boolean`

Kiểm tra một điểm có nằm trong phạm vi của cung hay không (điều kiện theo bán kính và theo khoảng góc).

- `p`: `{x: number, y: number}`
- Trả về: `boolean`

```js
var arc = new Arc(100, 100, 80, 0, Math.PI / 2);
var ok = arc.isPointInBound({ x: 130, y: 120 });
```

#### `isRectInBound(rect): boolean`

Trả về `true` nếu cả 4 đỉnh của `rect` đều nằm trong cung.

- `rect`: object có các hàm `A()`, `B()`, `C()`, `D()` trả về điểm `{x, y}`.

#### `isRectOutBound(rect): boolean`

Trả về `true` nếu cả 4 đỉnh của `rect` đều nằm ngoài cung.

- `rect`: object có các hàm `A()`, `B()`, `C()`, `D()`.

#### `isRectCollapse(rect): boolean`

Trả về `true` nếu có ít nhất một đỉnh của `rect` nằm trong cung.

- `rect`: object có các hàm `A()`, `B()`, `C()`, `D()`.

#### `centerPoint(): Vec2`

Trả về điểm gần giữa cung, nằm trên bán kính tỉ lệ `2/3`.

```js
var p = arc.centerPoint();
```

#### `centerRoundPoint(): Vec2`

Trả về điểm giữa cung nằm đúng trên đường tròn (bán kính `r`).

```js
var p2 = arc.centerRoundPoint();
```

### Static Method

#### `Arc.make(x, y, r, start, end): Arc`

Factory method tạo nhanh một đối tượng `Arc`.

```js
var arc = Arc.make(0, 0, 50, 0, Math.PI);
```


## class Polygon

`Polygon` biểu diễn đa giác 2D bằng danh sách đỉnh `Vec2` theo thứ tự biên.

### Import

```js
import Polygon from "absol/src/Math/Polygon";
```

### Constructor

#### `new Polygon(vertices)`

- `vertices`: `Vec2[]` - mảng đỉnh đa giác.

### Thuộc tính

- `vertices`: `Vec2[]`

### Instance Methods

#### `pointLocalIn(P): -1 | 0 | 1`

Xác định vị trí của điểm `P` so với đa giác (thuật toán ray-casting):

- `1`: điểm nằm trong.
- `0`: điểm nằm trên cạnh.
- `-1`: điểm nằm ngoài.

- `P`: `Vec2`

```js
import Vec2 from "absol/src/Math/Vec2";
import Polygon from "absol/src/Math/Polygon";

var poly = new Polygon([
	new Vec2(0, 0),
	new Vec2(100, 0),
	new Vec2(100, 100),
	new Vec2(0, 100)
]);

poly.pointLocalIn(new Vec2(20, 20));  // 1
poly.pointLocalIn(new Vec2(0, 30));   // 0
poly.pointLocalIn(new Vec2(120, 50)); // -1
```

#### `getPathString(): string`

Xuất chuỗi path SVG từ danh sách đỉnh, dạng `M...L...z`.

```js
var d = poly.getPathString();
// Ví dụ: "M0 0L100 0L100 100L0 100z"
```

#### `copy(): Polygon`

Tạo bản sao sâu (deep copy) của đa giác hiện tại (mỗi đỉnh được gọi `v.copy()`).

```js
var cloned = poly.copy();
```

### Static Method

#### `Polygon.make(vertices): Polygon`

Factory method tạo nhanh một đối tượng `Polygon`.

```js
var poly2 = Polygon.make([
	new Vec2(0, 0),
	new Vec2(50, 0),
	new Vec2(50, 50)
]);
```


## class Polyline

Polyline biểu diễn một đường gấp khúc 2D bằng danh sách điểm Vec2.

### Import

```js
import Polyline from "absol/src/Math/Polyline";
```

### Constructor

#### new Polyline(points)

- points: Vec2[] - danh sách điểm theo thứ tự.

Ghi chú:

- Nếu points có ít hơn 2 điểm, constructor sẽ thay bằng hai điểm (0, 0).

### Thuộc tính

- points: Vec2[]

### Instance Methods

#### nearestParamToPoint(point): number

Tìm tham số gần nhất trên polyline so với một điểm ngoài.

- point: Vec2
- Trả về: number

Giá trị trả về có dạng liên tục theo đoạn:

- 0 tương ứng điểm đầu đoạn đầu tiên.
- 1 tương ứng điểm đầu đoạn thứ hai.
- i + t với i là chỉ số đoạn và t trong khoảng [0, 1].

```js
var param = polyline.nearestParamToPoint(new Vec2(30, 20));
```

#### pointAt(param): Vec2

Lấy điểm trên polyline theo tham số.

- param: number - từ 0 đến points.length - 1.
- Trả về: Vec2

Hành vi biên:

- param < 0 trả về điểm đầu.
- param >= points.length - 1 trả về điểm cuối.

```js
var p = polyline.pointAt(1.25);
```

#### copy(): Polyline

Tạo bản sao sâu của polyline hiện tại.

```js
var cloned = polyline.copy();
```

#### simplify(tolerance): Polyline

Lược bớt điểm gần thẳng hàng theo ngưỡng tolerance.

- tolerance: number= - mặc định 0.00001.
- Trả về: Polyline

```js
var simplified = polyline.simplify(0.01);
```

### Simple example

```js
import Vec2 from "absol/src/Math/Vec2";
import Polyline from "absol/src/Math/Polyline";

var polyline = new Polyline([
	new Vec2(0, 0),
	new Vec2(100, 0),
	new Vec2(120, 40),
	new Vec2(200, 40)
]);

var nearest = polyline.nearestParamToPoint(new Vec2(110, 30));
var point = polyline.pointAt(nearest);
var compact = polyline.simplify(0.5);
```


## class Rectangle

`Rectangle` biểu diễn hình chữ nhật theo tọa độ góc trên trái `(x, y)` và kích thước `(width, height)`.

### Import

```js
import Rectangle from "absol/src/Math/Rectangle";
```

### Constructor

#### `new Rectangle(x, y, width, height)`

- `x`: `number` - tọa độ trái.
- `y`: `number` - tọa độ trên.
- `width`: `number` - chiều rộng.
- `height`: `number` - chiều cao.

### Thuộc tính

- `x`: `number`
- `y`: `number`
- `width`: `number`
- `height`: `number`

### Instance Methods

#### `A(): Vec2`
#### `B(): Vec2`
#### `C(): Vec2`
#### `D(): Vec2`

Trả về 4 đỉnh của hình chữ nhật:

- `A`: góc trên trái.
- `B`: góc trên phải.
- `C`: góc dưới phải.
- `D`: góc dưới trái.

#### `square(): number`

Tính diện tích hình chữ nhật.

```js
var s = rect.square();
```

#### `nearestPoint(arg0, arg1): Vec2`

Tìm đỉnh gần nhất trong 4 đỉnh A/B/C/D so với điểm đầu vào.

- Hỗ trợ gọi với `Vec2` hoặc cặp số `(x, y)`.

```js
var p = rect.nearestPoint(new Vec2(12, 8));
```

#### `centerPoint(): Vec2`

Trả về tâm hình chữ nhật.

#### `isCollapse(r, margin): boolean`

Kiểm tra 2 hình chữ nhật có giao nhau hay không.

- `r`: `Rectangle`
- `margin`: `number=` - biên nới thêm, mặc định `0`.

#### `collapsedRect(r): Rectangle | null`

Trả về phần giao giữa hai hình chữ nhật.

- Nếu không giao nhau, trả về `null`.

#### `collapsedSquare(r): number`

Trả về diện tích phần giao giữa hai hình chữ nhật.

#### `contains(r): boolean`

Kiểm tra rectangle hiện tại có chứa hoàn toàn rectangle `r` hay không.

#### `containsPoint(p): boolean`

Kiểm tra một điểm có nằm trong (hoặc trên biên) hình chữ nhật hay không.

#### `merge(other): Rectangle`

Trả về hình chữ nhật bao nhỏ nhất chứa cả 2 hình chữ nhật.

#### `copy(): Rectangle`
#### `clone(): Rectangle`

Tạo bản sao của rectangle hiện tại.

#### `equals(r): boolean`

So sánh tuyệt đối 4 thuộc tính `x, y, width, height`.

### Static Methods

#### `Rectangle.make(x, y, width, height): Rectangle`

Factory method tạo rectangle.

#### `Rectangle.makeCenter(x, y, width, height): Rectangle`

Tạo rectangle từ tâm `(x, y)` và kích thước.

#### `Rectangle.fromClientRect(clientRect): Rectangle`

Chuyển `ClientRect/DOMRect` sang `Rectangle`.

#### `Rectangle.boundingPoints(points): Rectangle`

Tạo rectangle bao nhỏ nhất từ danh sách điểm.

- `points`: `Vec2[]`

### Simple example

```js
import Vec2 from "absol/src/Math/Vec2";
import Rectangle from "absol/src/Math/Rectangle";

var r1 = new Rectangle(10, 10, 100, 80);
var r2 = Rectangle.makeCenter(90, 60, 80, 40);

var inter = r1.collapsedRect(r2);
var area = r1.collapsedSquare(r2);
var merged = r1.merge(r2);
var inside = r1.containsPoint(new Vec2(20, 20));
```


## module measurements

`measurements` là nhóm hàm đổi đơn vị đo chiều dài, đơn vị hiển thị in ấn và tính toán theo tọa độ địa lý.

### Import

```js
import * as measurements from "absol/src/Math/measurements";
```

Hoặc dùng qua namespace:

```js
var measurements = absol.measurements;
```

### Đổi đơn vị chiều dài

#### `feetToMeter(ft): number`
#### `meterToFeet(mt): number`
#### `meterToInch(mt): number`
#### `mileToMeter(ml): number`
#### `meterToMile(ml): number`
#### `meterToYard(mt): number`
#### `yardToMeter(yd): number`

Ví dụ:

```js
measurements.feetToMeter(3.28084);  // ~1
measurements.meterToFeet(1);        // ~3.28084
measurements.meterToInch(1);        // ~39.3701
measurements.mileToMeter(1);        // ~1609.34
measurements.meterToMile(1609.34);  // ~1
```

### Đổi đơn vị point/dot/pixel/cm

#### `pointToDot(p): number`

Đổi point sang dot (trong code, dot được hiểu tương đương pixel trong web).

#### `dotToPoint(d): number`

Đổi dot sang point.

#### `pxToCentimeter(px): number | undefined`

Hàm này hiện chưa có phần thân trong mã nguồn, nên hiện tại sẽ trả về `undefined`.

#### `centimeterToPx(cm): number`

Đổi centimeter sang pixel theo chuẩn 96 DPI.

#### `chToArial14Px(ch): number`
#### `chToCalibri11Px(ch): number`

Ước lượng độ rộng ký tự theo đơn vị `ch` sang pixel cho font cụ thể.

Ví dụ:

```js
measurements.centimeterToPx(2.54); // ~96
measurements.pointToDot(72);       // 54
measurements.dotToPoint(96);       // 128
```

### Hằng số kích thước trang

#### `PAGE_SIZE_IN_DOT`

Map kích thước giấy theo đơn vị dot, ví dụ:

```js
measurements.PAGE_SIZE_IN_DOT.a4; // [595.28, 841.89]
```

#### `PAGE_SIZE_IN_POINT`

Map kích thước giấy theo point, được suy ra từ `PAGE_SIZE_IN_DOT`.

```js
measurements.PAGE_SIZE_IN_POINT.a4;
```

### Hàm địa lý (lat/lng)

#### `latLngRectFromCenter(center, distance)`

Tạo vùng chữ nhật bao quanh một tâm theo bán kính khoảng cách (km).

- `center`: `{ latitude: number, longitude: number }`
- `distance`: `number` (km)
- Trả về:
	- `{ latitude: {min, max}, longitude: {min, max} }`

#### `latLngDistance(p0, p1): number`

Tính khoảng cách giữa hai điểm GPS theo công thức Haversine.

- `p0`, `p1`: `{ latitude: number, longitude: number }`
- Trả về: khoảng cách theo km.

Ví dụ:

```js
var d = measurements.latLngDistance(
		{ latitude: 10.7769, longitude: 106.7009 },
		{ latitude: 21.0278, longitude: 105.8342 }
);
// ~1140 km
```
