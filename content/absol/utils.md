# Utils

Các tiện ích trong [absol-acomp/js/utils.js](/Users/duthien/Desktop/JSWorkSpace/absol-acomp/js/utils.js) được gắn trực tiếp vào `absol.$`:

```js
var $ = absol.$;

$.parseLocalFloat('123.456,78');
$.openFileDialog({ multiple: true }).then(function (files) {
		console.log(files);
});
```

Tài liệu dưới đây mô tả toàn bộ symbol được `export` từ file này. Với các symbol là hàm, cách gọi chung là `absol.$.<tenHam>(...)`.


## Chọn văn bản, caret và `Range`

### `getSelectionRangeDirection(range)`

Xác định hướng chọn văn bản hiện tại là `forward` hay `backward`.

* Truy cập: `absol.$.getSelectionRangeDirection`
* Tham số:
	* `range: Range` Range đang xét.
* Trả về: `string` với giá trị `forward` hoặc `backward`.
* Ghi chú: Dùng DOM selection hiện tại của tài liệu.

### `setSelectionRange(range, backward)`

Thiết lập selection của trình duyệt theo một `Range` cho trước.

* Truy cập: `absol.$.setSelectionRange`
* Tham số:
	* `range: Range` Range cần đặt.
	* `backward?: boolean` Nếu là `true` thì cố gắng đặt selection ngược.
* Trả về: `void`.

### `insertTextAtCursor(text)`

Chèn chuỗi vào đúng vị trí caret hiện tại.

* Truy cập: `absol.$.insertTextAtCursor`
* Tham số:
	* `text: string` Nội dung cần chèn.
* Trả về: `void`.
* Ghi chú: Có nhánh tương thích cho API cũ của IE.

### `getNonOverlappingBounds(range)`

Lấy danh sách hình chữ nhật bao quanh một `Range`, đồng thời gộp các hình bị chồng lấn.

* Truy cập: `absol.$.getNonOverlappingBounds`
* Tham số:
	* `range: Range` Range cần đo.
* Trả về: `Array<DOMRect>`.
* Ghi chú: Có xử lý riêng cho trường hợp node bắt đầu và kết thúc là `BR`.

### `getSelectionText()`

Lấy văn bản đang được chọn trong `input`, `textarea` hoặc selection chung của trang.

* Truy cập: `absol.$.getSelectionText`
* Trả về: `string`.

### `getCaretPosition(oField)`

Lấy vị trí caret hiện tại của ô nhập liệu.

* Truy cập: `absol.$.getCaretPosition`
* Tham số:
	* `oField: HTMLInputElement | HTMLTextAreaElement` Ô nhập cần đọc vị trí caret.
* Trả về: `number`.


## Nhập liệu và contenteditable

### `contenteditableTextOnly(element, processText)`

Chặn thao tác paste HTML vào phần tử `contenteditable`, chỉ giữ lại plain text.

* Truy cập: `absol.$.contenteditableTextOnly`
* Tham số:
	* `element: HTMLElement` Phần tử cần gắn xử lý.
	* `processText?: function` Hàm tiền xử lý text sau khi paste.
* Trả về: `void`.
* Ghi chú: Hàm có tính idempotent, gọi lặp lại sẽ không gắn listener trùng.

### `preventNotNumberInput(elt)`

Giới hạn input chỉ cho phép nhập số, dấu `+`, `-` và dấu thập phân.

* Truy cập: `absol.$.preventNotNumberInput`
* Tham số:
	* `elt: AElement` Phần tử nhập liệu.
* Trả về: `void`.
* Ghi chú: Gắn nhiều listener `keyup`, `paste`, `keydown` và phát `change` khi giá trị đổi.


## Đo và xử lý text

### `measureText(text, font)`

Đo text bằng canvas và trả về `TextMetrics`.

* Truy cập: `absol.$.measureText`
* Tham số:
	* `text: string` Nội dung cần đo.
	* `font?: string` Chuỗi font CSS như `14px Arial`.
* Trả về: `TextMetrics`.

### `estimateWidth14(text)`

Ước lượng độ rộng text với font Roboto cỡ `14px`.

* Truy cập: `absol.$.estimateWidth14`
* Tham số:
	* `text: string`
* Trả về: `number`.

### `getTextNodeBounds(text, startOffset, endOffset)`

Tách một `Text` node thành các đoạn theo từng dòng hiển thị và trả về hình chữ nhật bao của từng đoạn.

* Truy cập: `absol.$.getTextNodeBounds`
* Tham số:
	* `text: Text` Text node cần đo.
	* `startOffset?: number` Vị trí bắt đầu.
	* `endOffset?: number` Vị trí kết thúc.
* Trả về: `Array<{start: number, end: number, text: string, rect: Rectangle}> | null`.
* Ghi chú: Trả về `null` nếu đối số không phải text node hợp lệ.

### `htmlToText(html)`

Chuyển HTML thành plain text.

* Truy cập: `absol.$.htmlToText`
* Tham số:
	* `html: string`
* Trả về: `string`.
* Ghi chú: Hàm dựng một DOM ẩn, duyệt node và chèn xuống dòng dựa trên `display`.

### `htmlToRichText(html)`

Chuyển HTML thành mảng rich text với cờ `bold`, `italic`, `underline`, `strike`.

* Truy cập: `absol.$.htmlToRichText`
* Tham số:
	* `html: string`
* Trả về: `Array<{text: string, font?: {bold?: boolean, italic?: boolean, underline?: boolean, strike?: boolean}}> | null`.
* Ghi chú: Trả về `null` nếu `html` không phải chuỗi.

### `richTextToHtml(richText)`

Chuyển rich text về chuỗi HTML.

* Truy cập: `absol.$.richTextToHtml`
* Tham số:
	* `richText: Array<{text: string, font?: object}>`
* Trả về: `string | null`.
* Ghi chú: Có escape các ký tự HTML đặc biệt trước khi tạo tag.

### `wrapWord(text, width, font)`

Chia một từ dài thành nhiều đoạn nhỏ theo giới hạn độ rộng pixel.

* Truy cập: `absol.$.wrapWord`
* Tham số:
	* `text: string`
	* `width: number`
	* `font?: string` Mặc định là `14px arial`.
* Trả về: `string[]`.

### `wrapText(text, width, font)`

Tự động xuống dòng theo từ, và nếu từ quá dài thì fallback sang `wrapWord`.

* Truy cập: `absol.$.wrapText`
* Tham số:
	* `text: string`
	* `width: number`
	* `font?: string` Mặc định là `14px arial`.
* Trả về: `string[]`.


## Rich text cho Excel

### `htmlToExcelRichTextCell(html)`

Đóng gói HTML dưới dạng object cell có trường `value.richText`.

* Truy cập: `absol.$.htmlToExcelRichTextCell`
* Tham số:
	* `html: string`
* Trả về: `{ value: { richText: object[] } } | null`.

### `excelRichTextCellToHtml(cell)`

Chuyển cell chứa `value.richText` về chuỗi HTML.

* Truy cập: `absol.$.excelRichTextCellToHtml`
* Tham số:
	* `cell: object`
* Trả về: `string | null`.


## CSS, method và event helper

### `buildCss(StyleSheet)`

Dựng thẻ `<style>` từ object khai báo CSS và gắn vào `document.head`.

* Truy cập: `absol.$.buildCss`
* Tham số:
	* `StyleSheet: object` Object dạng `{ selector: { property: value } }`.
* Trả về: `HTMLElement` là thẻ `style` vừa tạo.

### `forwardEvent(elt, fromName, toName)`

Lắng nghe một event và phát lại nó dưới tên khác.

* Truy cập: `absol.$.forwardEvent`
* Tham số:
	* `elt: AElement`
	* `fromName: string`
	* `toName: string`
* Trả về: `void`.

### `forwardMethod(elt, fromName, toName)`

Tạo alias method trên object bằng cách chuyển tiếp sang method khác.

* Truy cập: `absol.$.forwardMethod`
* Tham số:
	* `elt: object`
	* `fromName: string` Tên method mới.
	* `toName: string` Tên method đích.
* Trả về: `void`.


## Dialog và chọn file

### `openFileDialog(props, unSafe)`

Mở hộp thoại chọn file và trả về danh sách file đã chọn.

* Truy cập: `absol.$.openFileDialog`
* Tham số:
	* `props?: 'camera' | 'microphone' | 'camcorder' | {accept?: string | string[], capture?: boolean | string, multiple?: boolean}`
	* `unSafe?: boolean` Nếu bật, khi cửa sổ lấy lại focus mà chưa có file thì resolve `[]`.
* Trả về: `Promise<File[]>`.
* Ghi chú: Tự động gọi `autoNormalizeFileName` cho từng file nhận được.

### `openYesNoQuestionDialog(title, message)`

Hiển thị dialog xác nhận Yes/No.

* Truy cập: `absol.$.openYesNoQuestionDialog`
* Tham số:
	* `title: string`
	* `message: string`
* Trả về: `Promise<boolean>`.
* Ghi chú: Nếu có `window.ModalElement.question` thì dùng API sẵn có, nếu không sẽ dựng `Modal` riêng.


## File và tên file

### `normalizeFileName(fileName)`

Hàm chuẩn hóa tên file, được re-export từ module string format.

* Truy cập: `absol.$.normalizeFileName`
* Trả về: `string`.
* Ghi chú: Đây là re-export, logic gốc nằm ở module `absol/src/String/stringFormat`.

### `fileSize2Text(s)`

Chuyển kích thước file dạng byte sang chuỗi dễ đọc như `KB`, `MB`, `GB`.

* Truy cập: `absol.$.fileSize2Text`
* Tham số:
	* `s: number` Số byte.
* Trả về: `string`.

### `isURLAddress(text)`

Kiểm tra một chuỗi có được xem như URL hoặc đường dẫn hay không.

* Truy cập: `absol.$.isURLAddress`
* Tham số:
	* `text: string`
* Trả về: `boolean`.
* Ghi chú: Nhận các chuỗi bắt đầu bằng `.`, `/`, `http://`, `https://`.

### `fileAccept(pattern, typeString)`

Kiểm tra file có thỏa điều kiện `accept` hay không.

* Truy cập: `absol.$.fileAccept`
* Tham số:
	* `pattern: string | null` Chuỗi như `.png,.jpg,image/*`.
	* `typeString: string` MIME type hoặc chuỗi chứa phần mở rộng.
* Trả về: `boolean`.
* Ghi chú: Hỗ trợ `audio/*`, `video/*`, `image/*`, extension và MIME type.

### `fileInfoOf(fi)`

Suy luận thông tin file từ `File`, `Blob`, URL string hoặc object có `url`.

* Truy cập: `absol.$.fileInfoOf`
* Tham số:
	* `fi: File | Blob | string | {url: string}`
* Trả về: `{name?, size?, type?, url?, mimeType?}`.

### `autoNormalizeFileName(file)`

Tự động thêm trường `converted_name` vào file nếu chưa có.

* Truy cập: `absol.$.autoNormalizeFileName`
* Tham số:
	* `file: File | {name: string, converted_name?: string}`
* Trả về: `void`.
* Ghi chú: Hàm mutate trực tiếp object đầu vào.

### `cropFileName(fileFullName, limit)`

Cắt bớt phần tên file theo giới hạn byte UTF-8, giữ phần extension.

* Truy cập: `absol.$.cropFileName`
* Tham số:
	* `fileFullName: string`
	* `limit?: number` Mặc định hiện tại là `100`.
* Trả về: `string`.
* Ghi chú: Có nhánh xử lý đặc biệt khi URL hiện tại chứa `keeview`.


## Toán học và số cơ bản

### `positiveIntMod(num, maxVal)`

Lấy modulo không âm cho số nguyên, có xử lý số âm và `Infinity`.

* Truy cập: `absol.$.positiveIntMod`
* Tham số:
	* `num: number`
	* `maxVal: number`
* Trả về: `number`.

### `nearFloor(x, epsilon)`

Lấy `floor(x)`, nhưng nếu phần lẻ gần chạm 1 trong phạm vi `epsilon` thì làm tròn lên.

* Truy cập: `absol.$.nearFloor`
* Tham số:
	* `x: number`
	* `epsilon: number`
* Trả về: `number`.

### `absCeil(v)`

Lấy `ceil(abs(v))` rồi gắn lại dấu của số ban đầu.

* Truy cập: `absol.$.absCeil`
* Tham số:
	* `v: number`
* Trả về: `number`.

### `zeroPadding(x, l)`

Chuyển số thành chuỗi có thêm `0` ở đầu cho đủ độ dài mong muốn.

* Truy cập: `absol.$.zeroPadding`
* Tham số:
	* `x: number`
	* `l: number`
* Trả về: `string`.

### `isRealNumber(value)`

Kiểm tra giá trị có phải số hữu hạn hay không.

* Truy cập: `absol.$.isRealNumber`
* Tham số:
	* `value: any`
* Trả về: `boolean`.

### `isNaturalNumber(value)`

Kiểm tra giá trị có phải số nguyên không âm hay không.

* Truy cập: `absol.$.isNaturalNumber`
* Tham số:
	* `value: any`
* Trả về: `boolean`.

### `isInteger(value)`

Kiểm tra giá trị có phải số nguyên hữu hạn hay không.

* Truy cập: `absol.$.isInteger`
* Tham số:
	* `value: any`
* Trả về: `boolean`.


## Format số theo locale

### `parseLocalFloat(text, opt)`

Parse chuỗi số theo định dạng locale.

* Truy cập: `absol.$.parseLocalFloat`
* Tham số:
	* `text: string`
	* `opt?: string | {locales?: string}` Locale hoặc object cấu hình.
* Trả về: `number`.
* Ghi chú: Nếu không truyền `opt`, hàm sẽ đọc `window.systemconfig.numberFormatLocales` hoặc locale mặc định của trình duyệt.

```js
absol.$.parseLocalFloat('123.456,12', 'vi-VN');
absol.$.parseLocalFloat('123,456.12', { locales: 'en-US' });
```

### `formatLocalFloat(value, opt)`

Format số theo locale và cho phép tùy chỉnh dấu phân cách.

* Truy cập: `absol.$.formatLocalFloat`
* Tham số:
	* `value: number | string`
	* `opt?: string | number | object`
* Trả về: `string`.
* Ghi chú:
	* Nếu `opt` là `string` thì được hiểu là locale.
	* Nếu `opt` là `number` thì được hiểu là `fractionDigits`.
	* Có đọc thêm `window.systemconfig.commaSign` và `window.systemconfig.separateSign` nếu tồn tại.

```js
absol.$.formatLocalFloat(123456.12, 'vi-VN');
absol.$.formatLocalFloat(123456.12, { locales: 'en-US', fractionDigits: 2 });
```


## Ngày giờ

### `isDateTimeFormatToken(text)`

Kiểm tra một token có thuộc tập token format ngày giờ mà thư viện dùng hay không.

* Truy cập: `absol.$.isDateTimeFormatToken`
* Tham số:
	* `text: string`
* Trả về: `boolean`.

### `getDateTimeFormatTextWidth(format)`

Ước lượng độ rộng hiển thị lớn nhất của một chuỗi format ngày giờ.

* Truy cập: `absol.$.getDateTimeFormatTextWidth`
* Tham số:
	* `format: string`
* Trả về: `number`.
* Ghi chú: Có cache nội bộ để tránh đo lặp lại.

### `normalizeMinuteOfMillis(mil)`

Chuẩn hóa milliseconds về bội số phút gần nhất trong khoảng của một ngày.

* Truy cập: `absol.$.normalizeMinuteOfMillis`
* Tham số:
	* `mil: number`
* Trả về: `number` từ `0` đến `MILLIS_PER_DAY`.

### `millisToClock(mil)`

Chuyển milliseconds thành object giờ/phút.

* Truy cập: `absol.$.millisToClock`
* Tham số:
	* `mil: number`
* Trả về: `{hour: number, minute: number, isNextDate?: boolean}`.

### `clockToMillis(hour, minute)`

Chuyển giờ và phút thành milliseconds.

* Truy cập: `absol.$.clockToMillis`
* Tham số:
	* `hour: number`
	* `minute: number`
* Trả về: `number | null`.


## Dữ liệu độ rộng ký tự

### `charWidth`

Object map độ rộng của nhiều ký tự Latin và tiếng Việt có dấu.

* Truy cập: `absol.$.charWidth`
* Kiểu: `object`.
* Ghi chú: Đây không phải hàm mà là bảng dữ liệu tĩnh.


## Cây DOM, child node và scroll

### `swapElt(e1, e2)`

Hoán đổi vị trí của hai phần tử trong DOM.

* Truy cập: `absol.$.swapElt`
* Tham số:
	* `e1: AElement`
	* `e2: AElement`
* Trả về: `void`.

### `swapChildrenInElt(e1, e2)`

Hoán đổi toàn bộ child node của hai phần tử.

* Truy cập: `absol.$.swapChildrenInElt`
* Tham số:
	* `e1: AElement`
	* `e2: AElement`
* Trả về: `void`.

### `replaceChildrenInElt(elt, childNodes)`

Thay child node của một phần tử bằng danh sách mới, cố gắng giữ lại prefix chung.

* Truy cập: `absol.$.replaceChildrenInElt`
* Tham số:
	* `elt: AElement`
	* `childNodes: Node[]`
* Trả về: `void`.

### `findVScrollContainer(elt)`

Tìm ancestor gần nhất có thể cuộn theo trục dọc.

* Truy cập: `absol.$.findVScrollContainer`
* Tham số:
	* `elt: HTMLElement`
* Trả về: `HTMLElement | null`.

### `vScrollIntoView(elt)`

Cuộn container dọc sao cho phần tử đang nằm trong vùng nhìn thấy.

* Truy cập: `absol.$.vScrollIntoView`
* Tham số:
	* `elt: HTMLElement`
* Trả về: `void`.

### `addElementsBefore(inElement, elements, at)`

Chèn nhiều node vào trước một node mốc.

* Truy cập: `absol.$.addElementsBefore`
* Tham số:
	* `inElement: AElement | HTMLElement`
	* `elements: Node[]`
	* `at: Node`
* Trả về: `void`.

### `addElementAfter(inElement, elements, at)`

Chèn nhiều node vào sau một node mốc.

* Truy cập: `absol.$.addElementAfter`
* Tham số:
	* `inElement: AElement | HTMLElement`
	* `elements: Node[]`
	* `at?: Node`
* Trả về: `void`.
* Ghi chú: Nếu `at` không phải con của `inElement` thì hàm sẽ throw lỗi.

### `addElementClassName(elt, className)`

Thêm một hoặc nhiều CSS class vào element.

* Truy cập: `absol.$.addElementClassName`
* Tham số:
	* `elt: HTMLElement`
	* `className: string | string[]`
* Trả về: `void`.

### `findMaxZIndex(elt)`

Đọc `z-index` lớn nhất trong chuỗi ancestor của một element.

* Truy cập: `absol.$.findMaxZIndex`
* Tham số:
	* `elt: HTMLElement`
* Trả về: `number`.

### `getAncestorElementOf(elt)`

Đi lên ancestor cho tới element gốc trên cùng.

* Truy cập: `absol.$.getAncestorElementOf`
* Tham số:
	* `elt: HTMLElement`
* Trả về: `HTMLElement`.

### `isScrolledToBottom(element, padding)`

Kiểm tra một vùng cuộn đã chạm đáy hay chưa.

* Truy cập: `absol.$.isScrolledToBottom`
* Tham số:
	* `element: HTMLElement`
	* `padding?: number` Sai số cho phép.
* Trả về: `boolean`.

### `listenDomContentChange(elt, callback)`

Hook các thao tác DOM phổ biến trên element và con của nó để phát hiện thay đổi nội dung.

* Truy cập: `absol.$.listenDomContentChange`
* Tham số:
	* `elt: AElement | HTMLElement`
	* `callback: function | object` Hàm callback chung hoặc object chứa các handler như `change`, `scrollIntoView`.
* Trả về: `void`.
* Ghi chú: Hàm override tạm các method như `appendChild`, `insertBefore`, `removeChild`, `remove`.

### `notifyPreFocusEvent(elt)`

Phát event `prefocus` lên chuỗi ancestor của element nếu ancestor đó hỗ trợ event này.

* Truy cập: `absol.$.notifyPreFocusEvent`
* Tham số:
	* `elt: AElement | HTMLElement`
* Trả về: `void`.


## Menu, selection item và tree value

### `cleanMenuItemProperty(obj)`

Loại bỏ các property nội bộ của component khỏi object item menu.

* Truy cập: `absol.$.cleanMenuItemProperty`
* Tham số:
	* `obj: object`
* Trả về: `object`.
* Ghi chú: Luôn giữ lại `text`, và nếu có thì giữ thêm `icon`, `items`.

### `checkedValues2RootTreeValues(items, values)`

Chuyển danh sách value đang check sang tập root value tối giản của cây.

* Truy cập: `absol.$.checkedValues2RootTreeValues`
* Tham số:
	* `items: SelectionItem[]`
	* `values: any[]`
* Trả về: `any[]`.

### `rootTreeValues2CheckedValues(items, values)`

Mở rộng tập root value thành danh sách checked value đầy đủ ở các node con.

* Truy cập: `absol.$.rootTreeValues2CheckedValues`
* Tham số:
	* `items: SelectionItem[]`
	* `values: any[]`
* Trả về: `any[]`.

### `copySelectionItemArray(items, opt)`

Sao chép mảng `SelectionItem`, có thể loại bỏ `noView` hoặc ký tự xuống dòng.

* Truy cập: `absol.$.copySelectionItemArray`
* Tham số:
	* `items: SelectionItem[]`
	* `opt?: {removeNoView?: boolean, removeNewLine?: boolean}`
* Trả về: `SelectionItem[]`.

### `adaptiveSelectionItemHolder(obj)`

Chuẩn hóa nhiều dạng object item về một cấu trúc holder thống nhất.

* Truy cập: `absol.$.adaptiveSelectionItemHolder`
* Tham số:
	* `obj: object`
* Trả về: `object`.
* Ghi chú: Hàm merge `obj`, `obj.item` và `obj.data` rồi chuẩn hóa trường `data`.

### `adaptiveSelectionItemHolderAray(arr)`

Áp dụng `adaptiveSelectionItemHolder` cho cả mảng.

* Truy cập: `absol.$.adaptiveSelectionItemHolderAray`
* Tham số:
	* `arr: any[]`
* Trả về: `object[]`.
* Ghi chú: Tên export đang là `Aray` theo đúng mã nguồn hiện tại.


## Chuỗi, hash và object serialization

### `getTagListInTextMessage(text)`

Lấy danh sách id từ các tag dạng `@[id:123]` trong text.

* Truy cập: `absol.$.getTagListInTextMessage`
* Tham số:
	* `text: string`
* Trả về: `Array<number | string>` với giá trị duy nhất.

### `legacyKeyStringOf(o)`

Biến object, array, date hoặc primitive thành chuỗi khóa kiểu cũ.

* Truy cập: `absol.$.legacyKeyStringOf`
* Tham số:
	* `o: any`
* Trả về: `string`.
* Ghi chú: Với hàm này, `number` và `string` được đồng nhất về kiểu chuỗi.

### `keyStringOf(o)`

Biến value thành chuỗi khóa ổn định nhưng vẫn giữ phân biệt kiểu.

* Truy cập: `absol.$.keyStringOf`
* Tham số:
	* `o: any`
* Trả về: `string`.

### `jsStringOf(x)`

Biến object hoặc primitive thành chuỗi biểu diễn JavaScript.

* Truy cập: `absol.$.jsStringOf`
* Tham số:
	* `x: any`
* Trả về: `string`.

### `calcDTQueryHash(o)`

Tính hash code của object bằng cách serialize qua `jsStringOf` rồi băm chuỗi.

* Truy cập: `absol.$.calcDTQueryHash`
* Tham số:
	* `o: any`
* Trả về: `number`.

### `replaceInObject(o, replacer, test)`

Duyệt đệ quy object và thay thế mọi value thỏa điều kiện `test`.

* Truy cập: `absol.$.replaceInObject`
* Tham số:
	* `o: object`
	* `replacer: function(value, key, parent)` Hàm thay thế, có thể trả về Promise.
	* `test: function(value)` Hàm kiểm tra value nào cần thay.
* Trả về: `Promise<object>`.
* Ghi chú: Hàm mutate trực tiếp object đầu vào rồi resolve lại chính object đó.

### `replaceFileInObject(o, replacer)`

Phiên bản chuyên biệt của `replaceInObject` để thay toàn bộ `File` hoặc `Blob` trong object tree.

* Truy cập: `absol.$.replaceFileInObject`
* Tham số:
	* `o: object`
	* `replacer: function(value, key, parent)`
* Trả về: `Promise<object>`.

### `revokeResource(...)`

Hàm re-export từ module `absol/src/DataStructure/Object`.

* Truy cập: `absol.$.revokeResource`
* Ghi chú: Dùng để thu hồi tài nguyên đã tạo bởi các helper tương ứng trong core library.

### `isNone(x)`

Kiểm tra giá trị có phải `null` hoặc `undefined` hay không.

* Truy cập: `absol.$.isNone`
* Tham số:
	* `x: any`
* Trả về: `boolean`.


## Bản đồ và tọa độ

### `parseDMS(input)`

Parse tọa độ dạng độ, phút, giây như chuỗi copy từ Google Maps.

* Truy cập: `absol.$.parseDMS`
* Tham số:
	* `input: string`
* Trả về: `{latitude: number, longitude: number} | null`.

### `parseLatLng(value)`

Parse tọa độ dạng thập phân `lat,lng`.

* Truy cập: `absol.$.parseLatLng`
* Tham số:
	* `value: string`
* Trả về: `{latitude: number, longitude: number} | null`.

### `normalizeLatLngString(text)`

Chuẩn hóa nhiều định dạng tọa độ về chuỗi `lat,lng`.

* Truy cập: `absol.$.normalizeLatLngString`
* Tham số:
	* `text: string`
* Trả về: `string`.
* Ghi chú: Trả về chuỗi rỗng nếu parse thất bại.

### `implicitLatLng(value)`

Chuyển nhiều loại đầu vào khác nhau thành `google.maps.LatLng`.

* Truy cập: `absol.$.implicitLatLng`
* Tham số:
	* `value: string | google.maps.LatLng | {latitude, longitude} | {lat, lng} | [number, number]`
* Trả về: `google.maps.LatLng | null`.
* Ghi chú: Yêu cầu `google.maps` đã được load.

### `getMapZoomLevel(mapDim, bounds)`

Tính zoom level để khung bản đồ chứa được toàn bộ `bounds`.

* Truy cập: `absol.$.getMapZoomLevel`
* Tham số:
	* `mapDim: {width: number, height: number}`
	* `bounds: google.maps.LatLngBounds`
* Trả về: `number`.
* Ghi chú: Nếu thiếu dữ liệu thì hàm trả về `17`.

### `latLngDistance(p0, p1)`

Tính khoảng cách theo công thức Haversine giữa hai điểm bản đồ.

* Truy cập: `absol.$.latLngDistance`
* Tham số:
	* `p0: google.maps.LatLng`
	* `p1: google.maps.LatLng`
* Trả về: `number` theo kilomet.


## Icon và tài nguyên từ mạng

### `getMaterialDesignIconNames()`

Tải file CSS của Material Design Icons và trích xuất toàn bộ tên icon.

* Truy cập: `absol.$.getMaterialDesignIconNames`
* Trả về: `Promise<string[]>`.
* Ghi chú: Có cache Promise nội bộ; nếu tải lỗi thì cache được reset về `null`.


## Ví dụ nhanh

```js
var $ = absol.$;

var n = $.parseLocalFloat('1.234,56', 'vi-VN');
var s = $.formatLocalFloat(n, { locales: 'en-US', fractionDigits: 2 });

$.openYesNoQuestionDialog('Xác nhận', 'Bạn có muốn tiếp tục không?')
		.then(function (ok) {
				console.log(ok);
		});

console.log($.normalizeLatLngString("10°46'12\"N, 106°41'00\"E"));
```
