# cellData trong excel_module.cell

Từ riêng đoạn cài đặt của `excel_module.cell(sheet, cellData)`, có thể suy ra `cellData` là object mô tả một ô Excel theo hướng khai báo. Object này chứa đồng thời vị trí ô, giá trị, định dạng hiển thị, style, merge, kích thước và một số cờ điều khiển hành vi xử lý.

Tài liệu này chỉ mô tả những gì có thể suy ra trực tiếp từ đoạn code đã cho, không giả định thêm các thuộc tính ở nơi khác.

## Cấu trúc tổng quát

```js
{
	row: number,
	col: number,

	value: any,
	numFmt?: string,

	colSpan?: number,
	rowSpan?: number,

	width?: number | string,

	alignment?: {
		horizontal?: string,
		vertical?: string,
		wrapText?: boolean,
		[key: string]: any
	},

	horizontal?: string,
	vertical?: string,
	wraptext?: boolean,
	wrapText?: boolean,

	font?: {
		name?: string,
		size?: number,
		bold?: boolean,
		[key: string]: any
	} | string,

	bold?: boolean,
	italic?: boolean,
	underline?: boolean,

	border?: object | string,

	textcolor?: string,
	backgroundcolor?: string,

	isFormula?: string,

	[key: string]: any
}
```

## Mô tả chi tiết từng thuộc tính

### `row: number`

Chỉ số hàng của ô.

Được dùng trong các lệnh:

```js
sheet.getCellByRowCol(cellData.row, cellData.col)
sheet.getRow(cellData.row + 1)
sheet.mergeCells(cellData.row + 1, ...)
```

Từ đó có thể suy ra `row` là chỉ số số nguyên, và trong ngữ cảnh của module này rất có khả năng là chỉ số bắt đầu từ `0`.

### `col: number`

Chỉ số cột của ô.

Được dùng trong:

```js
sheet.getCellByRowCol(cellData.row, cellData.col)
sheet.cellWidthData[cellData.col]
sheet.mergeCells(..., cellData.col + 1, ...)
```

Tương tự `row`, nhiều khả năng đây là chỉ số số nguyên bắt đầu từ `0`.

### `value: any`

Giá trị chính của ô.

Từ code có thể suy ra `value` có thể nhận nhiều kiểu khác nhau:

- `number`
- `string`
- `Date`
- object rich text có dạng chứa `richText`
- giá trị kết quả đi kèm công thức

Một số hành vi đặc biệt:

- Nếu `typeof cellData.value === 'number'` và là `NaN` thì giá trị bị đổi thành chuỗi `"NaN"`.
- Nếu `value` là `Date` và không có `numFmt`, hàm tự gán `numFmt = 'dd/mm/yyyy'`.
- Nếu `value.richText` tồn tại thì ô được xử lý như rich text và mặc định bật `wrapText` nếu chưa được chỉ định.
- Nếu `isFormula` tồn tại thì `value` không còn được ghi trực tiếp, mà trở thành `result` của formula cell.

### `numFmt?: string`

Định dạng số hoặc ngày tháng cho ô theo quy ước của Excel/ExcelJS.

Nếu có giá trị, thuộc tính này được gán trực tiếp:

```js
cell.numFmt = cellData.numFmt;
```

Ví dụ thường gặp:

```js
'dd/mm/yyyy'
'#,##0.00'
'0%'
```

### `colSpan?: number`

Số cột mà ô chiếm.

Nếu `colSpan !== undefined`, code đánh dấu ô này cần merge. Khi `colSpan > 1` hoặc kết hợp với `rowSpan > 1`, hàm gọi `sheet.mergeCells(...)`.

Ngoài ra nếu ô có `colSpan >= 2`, phần tự động tính độ rộng cột sẽ không tăng width cho cột hiện tại nữa.

### `rowSpan?: number`

Số hàng mà ô chiếm.

Hoạt động tương tự `colSpan`, nhưng theo chiều dọc.

### `width?: number | string`

Độ rộng cột mong muốn.

Code hỗ trợ các dạng sau:

- `number`
- chuỗi kết thúc bằng `ch`, ví dụ `"20ch"`
- chuỗi kết thúc bằng `px`, ví dụ `"120px"`

Quy tắc xử lý:

- Nếu là `number` thì dùng trực tiếp.
- Nếu là `"Nch"` thì đổi về đơn vị nội bộ bằng `excel_module.px2ch`.
- Nếu là `"Npx"` thì bỏ hậu tố `px` và lấy phần số.
- Nếu width mới lớn hơn width đang lưu ở `sheet.cellWidthData[col]` thì nó được giữ lại và đánh dấu `defineWidth = true`.

Nói cách khác, `width` là cách ép độ rộng cột thủ công và ngăn phần auto width ghi đè.

### `alignment?: object`

Object chứa cấu hình căn lề của ô. Toàn bộ thuộc tính bên trong được chép sang `cell.alignment` bằng `Object.assign`.

Ít nhất có thể suy ra các khóa sau có ý nghĩa:

- `horizontal`
- `vertical`
- `wrapText`

Vì code không giới hạn tập khóa, nên các thuộc tính alignment khác hợp lệ với ExcelJS cũng có thể được truyền qua đây.

### `horizontal?: string`

Thuộc tính rút gọn để gán trực tiếp:

```js
cell.alignment.horizontal = cellData.horizontal;
```

Nó hoạt động như một alias ngoài `alignment.horizontal`.

### `vertical?: string`

Thuộc tính rút gọn để gán trực tiếp:

```js
cell.alignment.vertical = cellData.vertical;
```

Nó hoạt động như một alias ngoài `alignment.vertical`.

### `wraptext?: boolean`

Thuộc tính này được viết thường toàn bộ, không phải `wrapText`.

Nếu tồn tại và `cellData.alignment.wrapText` chưa được khai báo, code sẽ dùng nó để gán:

```js
cell.alignment.wrapText = cellData.wraptext;
```

Đây là một alias thực sự đang được xử lý trong code.

### `wrapText?: boolean`

Thuộc tính này xuất hiện trong phần kiểm tra điều kiện, nhưng không được gán trực tiếp sang `cell.alignment.wrapText`.

Nó chỉ được dùng để xác định liệu người gọi đã chủ động chỉ định wrap hay chưa:

```js
if (ignoreWidth) {
	if (cellData.wrapText === undefined && (!cellData.alignment || cellData.alignment.wrapText === undefined)) {
		cell.alignment.wrapText = false;
	}
}
```

Vì vậy, từ riêng đoạn code này có thể kết luận:

- `wrapText` là một thuộc tính có thể xuất hiện trên `cellData`
- nhưng implementation hiện tại không hỗ trợ đầy đủ như `alignment.wrapText` hoặc `wraptext`

### `font?: object | string`

Mô tả font của ô. Có hai dạng.

#### Dạng object

```js
font: {
	name?: string,
	size?: number,
	bold?: boolean,
	...
}
```

Các khóa được code dùng trực tiếp:

- `name`
- `size`
- `bold`

Nếu không có `name` hoặc `size`, code gán mặc định:

- `name = "Calibri"`
- `size = 11`

#### Dạng string

Ở dạng này, giá trị được parse như một khai báo CSS `font`:

```js
excel_module.extractFont(".testFontCss{font:" + cellData.font + "}", ".testFontCss")
```

Nghĩa là chuỗi có thể là kiểu như:

```js
"bold 14px Arial"
```

Sau đó code cố lấy ra:

- `fontFamily`
- `fontSize`

### `bold?: boolean`

Thuộc tính in đậm mức ô.

Nó được dùng ở hai chỗ:

- tham gia tính `isBold` để tính toán chiều rộng text
- gán vào `cell.font.bold`

Nếu đồng thời có `font.bold` và `bold`, cả hai đều có thể ảnh hưởng đến xử lý.

### `italic?: boolean`

Nếu có thì gán:

```js
cell.font.italic = cellData.italic;
```

### `underline?: boolean`

Nếu có thì gán:

```js
cell.font.underline = cellData.underline;
```

### `border?: object | string`

Mô tả viền của ô.

Hỗ trợ hai kiểu:

#### Dạng object

Nếu là object thì được gán thẳng:

```js
cell.border = cellData.border;
```

Điều này cho thấy object phải đúng định dạng border mà thư viện phía dưới chấp nhận.

#### Dạng string

Nếu là chuỗi, nó được parse như khai báo CSS border:

```js
excel_module.extractFont(".testFontCss{border:" + cellData.border + "}", ".testFontCss")
```

Ví dụ hợp lý:

```js
"1px solid #000"
```

Sau đó code chuyển giá trị đã parse thành `cell.border.top/left/bottom/right`.

### `textcolor?: string`

Màu chữ của ô.

Được gán như sau:

```js
cell.font.color = { argb: cellData.textcolor };
```

Từ đó có thể suy ra giá trị nên là chuỗi màu theo định dạng `argb` mà ExcelJS chấp nhận, ví dụ:

```js
"FFFF0000"
```

### `backgroundcolor?: string`

Màu nền ô.

Được dùng để tạo `fill` dạng solid:

```js
cell.fill = {
	type: 'pattern',
	pattern: 'solid',
	fgColor: { argb: cellData.backgroundcolor },
	bgColor: 64
};
```

Tương tự `textcolor`, giá trị phù hợp nhất là chuỗi `argb`.

### `isFormula?: string`

Tên thuộc tính này gây hiểu nhầm vì nó không hoạt động như boolean.

Nếu tồn tại, code ghi ô theo dạng công thức:

```js
cell.value = { formula: cellData.isFormula, result: cellData.value };
```

Điều này cho thấy:

- `isFormula` thực chất là chuỗi công thức Excel
- `value` khi đó được xem là kết quả tính sẵn của công thức

Ví dụ:

```js
{
	value: 10,
	isFormula: 'SUM(A1:A4)'
}
```

## Các quy tắc hành vi suy ra từ code

### 1. Ô có thể tự merge

Chỉ cần có một trong hai thuộc tính `colSpan` hoặc `rowSpan`, hàm đã xem ô là ứng viên merge. Việc merge thực sự xảy ra khi một trong hai giá trị lớn hơn `1`.

### 2. `value` quyết định nhiều hành vi phụ

- `NaN` bị đổi thành chuỗi `"NaN"`
- `Date` tự sinh `numFmt` nếu chưa có
- `richText` kích hoạt xử lý wrap và chuẩn hóa font mặc định cho từng đoạn
- khi có `isFormula`, `value` trở thành `result` thay vì giá trị ghi trực tiếp

### 3. Có nhiều nguồn điều khiển `wrapText`

Theo mức độ rõ ràng từ code, `wrapText` của ô có thể bị tác động bởi:

- `cellData.alignment.wrapText`
- `cellData.wraptext`
- rich text, nếu chưa chỉ định thì tự bật `true`
- logic `ignoreWidth`, nếu chưa chỉ định thì có thể ép `false`

Riêng `cellData.wrapText` chỉ xuất hiện trong nhánh kiểm tra điều kiện, chưa được gán trực tiếp sang `cell.alignment.wrapText`.

### 4. Chiều rộng cột có hai nguồn

Chiều rộng cuối cùng của cột có thể đến từ:

- `cellData.width`, tức width chỉ định thủ công
- phép đo text tự động dựa trên nội dung và font

Nếu width thủ công đã được đặt và đánh dấu `defineWidth = true`, phần tự động tính theo text sẽ không ghi đè nữa.

### 5. Font ảnh hưởng cả style lẫn đo chiều rộng

Font không chỉ quyết định cách hiển thị mà còn ảnh hưởng trực tiếp đến phép đo độ rộng text:

- `font.name`
- `font.size`
- trạng thái đậm qua `font.bold` hoặc `bold`

### 6. Có chỗ API chưa đồng nhất hoàn toàn

Từ đúng đoạn code này có thể thấy ít nhất hai điểm chưa thật sự nhất quán:

- cùng một ý nghĩa nhưng tồn tại cả `wraptext` và `wrapText`
- `isFormula` về bản chất là chuỗi công thức, không phải cờ boolean

## Ví dụ dữ liệu hợp lệ

### Ô văn bản cơ bản

```js
{
	row: 0,
	col: 0,
	value: 'Họ và tên'
}
```

### Ô ngày tháng

```js
{
	row: 1,
	col: 2,
	value: new Date(),
	numFmt: 'dd/mm/yyyy'
}
```

### Ô có merge và căn giữa

```js
{
	row: 0,
	col: 0,
	value: 'BÁO CÁO',
	colSpan: 4,
	alignment: {
		horizontal: 'center',
		vertical: 'middle',
		wrapText: true
	},
	bold: true
}
```

### Ô dùng width thủ công

```js
{
	row: 2,
	col: 1,
	value: 'Mã nhân viên',
	width: '24ch'
}
```

### Ô rich text

```js
{
	row: 3,
	col: 1,
	value: {
		richText: [
			{ text: 'Tổng: ' },
			{ text: '100', font: { bold: true, size: 12, name: 'Calibri' } }
		]
	}
}
```

### Ô công thức

```js
{
	row: 5,
	col: 3,
	value: 120,
	isFormula: 'SUM(D2:D5)',
	numFmt: '#,##0'
}
```

## Kết luận

`cellData` là object cấu hình cho một ô Excel, trong đó các thuộc tính quan trọng nhất là:

- vị trí: `row`, `col`
- nội dung: `value`
- format: `numFmt`
- merge: `colSpan`, `rowSpan`
- kích thước: `width`
- căn lề: `alignment`, `horizontal`, `vertical`, `wraptext`, `wrapText`
- font và style: `font`, `bold`, `italic`, `underline`, `textcolor`, `backgroundcolor`, `border`
- công thức: `isFormula`

Nếu chỉ dựa trên đoạn code đã cho, đây là mô tả chi tiết nhất có thể suy ra mà không cần giả định thêm từ các phần khác của hệ thống.
