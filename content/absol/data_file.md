## Unicode Base64

Hai hàm sau dùng để mã hóa và giải mã Base64 an toàn với chuỗi Unicode (bao gồm tiếng Việt, emoji, ký tự đa byte).

### `base64EncodeUnicode(str)`

Mã hóa chuỗi Unicode thành chuỗi Base64.

* `str` | Kiểu: `string` | Chuỗi Unicode cần mã hóa.
* Trả về | Kiểu: `string` | Chuỗi Base64.

```js
import { base64EncodeUnicode } from 'absol/src/Converter/base64';

const encoded = base64EncodeUnicode('Xin chào 🌍');
console.log(encoded);
```

### `base64DecodeUnicode(str)`

Giải mã chuỗi Base64 về lại chuỗi Unicode gốc.

* `str` | Kiểu: `string` | Chuỗi Base64 cần giải mã.
* Trả về | Kiểu: `string` | Chuỗi Unicode đã giải mã.

```js
import { base64DecodeUnicode } from 'absol/src/Converter/base64';

const decoded = base64DecodeUnicode('WGluIGNow6BvIPCfjI0=');
console.log(decoded); // Xin chào 🌍
```

### Ví dụ vòng đời encode/decode

```js
import { base64EncodeUnicode, base64DecodeUnicode } from 'absol/src/Converter/base64';

const original = 'Dữ liệu UTF-8: tiếng Việt, 日本語, 😀';
const encoded = base64EncodeUnicode(original);
const restored = base64DecodeUnicode(encoded);

console.log(original === restored); // true
```


## Buffer Converter

Nhóm hàm trong module buffer hỗ trợ đóng gói dữ liệu số thành mảng byte, giải nén byte về giá trị, và đọc dữ liệu nhị phân dưới dạng `ArrayBuffer`.

### `ord(x)`

Lấy mã ký tự Unicode của ký tự đầu tiên trong chuỗi.

* `x` | Kiểu: `string` | Chuỗi đầu vào.
* Trả về | Kiểu: `number` | Mã ký tự của `x[0]`.

```js
import { ord } from 'absol/src/Converter/buffer';

ord('A'); // 65
```

### `pack(format, ...items)`

Đóng gói danh sách giá trị thành mảng byte theo chuỗi định dạng. Dữ liệu số nhiều byte được ghi theo thứ tự little-endian (byte thấp trước).

Các ký tự định dạng đang hỗ trợ:

* `x` | Ghi 1 byte `0` (padding), không dùng giá trị đầu vào.
* `c` | Ghi mã ký tự của một ký tự (`charCodeAt(0)`) vào 1 byte.
* `B` | Ghi 1 byte (`uint8`).
* `H` | Ghi 2 byte (`uint16`, little-endian).
* `I` | Ghi 4 byte (`uint32`, little-endian).

* `format` | Kiểu: `string` | Chuỗi mô tả thứ tự và kiểu đóng gói.
* `items` | Kiểu: `any[]` | Danh sách giá trị tương ứng từng ký tự trong `format`.
* Trả về | Kiểu: `number[]` | Mảng byte kết quả.

```js
import { pack } from 'absol/src/Converter/buffer';

const bytes = pack('BHI', 1, 0x0203, 0x04050607);
console.log(bytes);
// [1, 3, 2, 7, 6, 5, 4]
```

### `unpack(format, bytes)`

Giải nén mảng byte theo chuỗi định dạng và trả về danh sách giá trị theo đúng thứ tự. Hàm làm việc trên bản sao của `bytes`, không thay đổi mảng gốc.

Lưu ý: hiện tại `unpack` chỉ hỗ trợ các ký tự định dạng `B`, `H`, `I`.

* `format` | Kiểu: `string` | Chuỗi định dạng cần đọc.
* `bytes` | Kiểu: `number[]` | Mảng byte đầu vào.
* Trả về | Kiểu: `number[]` | Danh sách giá trị đã giải nén.

```js
import { unpack } from 'absol/src/Converter/buffer';

const values = unpack('BHI', [1, 3, 2, 7, 6, 5, 4]);
console.log(values);
// [1, 515, 67438087]
```

### `readUrlAsArrayBuffer(url)`

Tải dữ liệu từ URL bằng `fetch` (với `cache: 'no-cache'`) và trả về `ArrayBuffer`.

* `url` | Kiểu: `string` | URL cần đọc dữ liệu.
* Trả về | Kiểu: `Promise<ArrayBuffer>` | Promise chứa dữ liệu nhị phân tải về.

```js
import { readUrlAsArrayBuffer } from 'absol/src/Converter/buffer';

readUrlAsArrayBuffer('/assets/data.bin').then((ab) => {
	console.log(ab.byteLength);
});
```

### `readFileAsArrayBuffer(file)`

Đọc nội dung `File` hoặc `Blob` thành `ArrayBuffer` bằng `FileReader`.

* `file` | Kiểu: `File | Blob` | Đối tượng file/blob cần đọc.
* Trả về | Kiểu: `Promise<ArrayBuffer>` | Promise chứa dữ liệu nhị phân của file.

```js
import { readFileAsArrayBuffer } from 'absol/src/Converter/buffer';

const input = document.querySelector('input[type="file"]');
input.onchange = () => {
	const file = input.files[0];
	readFileAsArrayBuffer(file).then((ab) => {
		console.log(ab.byteLength);
	});
};
```

### `readAsArrayBuffer(obj)`

Hàm tổng quát để đọc nhiều loại đầu vào về `ArrayBuffer`:

* `null` hoặc `undefined` => trả về `Promise<null>`.
* Chuỗi => coi là URL và gọi `readUrlAsArrayBuffer`.
* `Blob` hoặc `File` => gọi `readFileAsArrayBuffer`.
* Đối tượng có hàm `arrayBuffer()` => gọi trực tiếp hàm đó.

* `obj` | Kiểu: `string | Blob | File | { arrayBuffer: Function } | null | undefined` | Nguồn dữ liệu đầu vào.
* Trả về | Kiểu: `Promise<ArrayBuffer | null>` | Promise chứa dữ liệu nhị phân hoặc `null`.

```js
import { readAsArrayBuffer } from 'absol/src/Converter/buffer';

Promise.all([
	readAsArrayBuffer('/assets/a.bin'),
	readAsArrayBuffer(new Blob(['hello'])),
	readAsArrayBuffer(null)
]).then(([a, b, c]) => {
	console.log(a && a.byteLength, b && b.byteLength, c); // ..., 5, null
});
```

## DataTypes checking

Các hàm trong nhóm này dùng để kiểm tra kiểu dữ liệu và ép kiểu ngầm định cho các giá trị đầu vào.

### `isRealNumber(x)`

Kiểm tra một giá trị có phải số thực hợp lệ hay không (`number`, không phải `NaN`, và hữu hạn).

* `x` | Kiểu: `any` | Giá trị cần kiểm tra.
* Trả về | Kiểu: `boolean` | `true` nếu là số thực hợp lệ.

```js
import { isRealNumber } from 'absol/src/Converter/DataTypes';

isRealNumber(12.5); // true
isRealNumber(NaN);  // false
isRealNumber(Infinity); // false
```

### `isInteger(x)`

Kiểm tra một giá trị có phải số nguyên hữu hạn hay không.

* `x` | Kiểu: `any` | Giá trị cần kiểm tra.
* Trả về | Kiểu: `boolean` | `true` nếu là số nguyên.

```js
import { isInteger } from 'absol/src/Converter/DataTypes';

isInteger(10);   // true
isInteger(10.2); // false
```

### `isNaturalNumber(x)`

Kiểm tra một giá trị có phải số tự nhiên (số nguyên và >= 0) hay không.

* `x` | Kiểu: `any` | Giá trị cần kiểm tra.
* Trả về | Kiểu: `boolean` | `true` nếu là số tự nhiên.

```js
import { isNaturalNumber } from 'absol/src/Converter/DataTypes';

isNaturalNumber(0);  // true
isNaturalNumber(25); // true
isNaturalNumber(-1); // false
```

### `isNone(x)`

Kiểm tra giá trị có rỗng theo nghĩa `null` hoặc `undefined` hay không.

* `x` | Kiểu: `any` | Giá trị cần kiểm tra.
* Trả về | Kiểu: `boolean` | `true` nếu là `null` hoặc `undefined`.

```js
import { isNone } from 'absol/src/Converter/DataTypes';

isNone(null);      // true
isNone(undefined); // true
isNone('');        // false
```

### `castToString(x)`

Ép giá trị về chuỗi theo các quy tắc:

* `null`/`undefined` => `''`
* `string` => giữ nguyên
* `number` => `toString()`
* `boolean` => `'true'` hoặc `'false'`
* `Date` => chuỗi ISO (`toISOString()`)
* `Array` => ép từng phần tử sang chuỗi rồi nối lại
* kiểu khác => gọi `toString()`

* `x` | Kiểu: `any` | Giá trị cần ép kiểu.
* Trả về | Kiểu: `string` | Chuỗi kết quả.

```js
import { castToString } from 'absol/src/Converter/DataTypes';

castToString(null); // ''
castToString([1, true, 'A']); // '1trueA'
```

### `castToBoolean(x)`

Ép giá trị về boolean với một số quy tắc chuỗi thường gặp:

* `null`/`undefined` => `false`
* `'true'`, `'1'` (không phân biệt hoa thường) => `true`
* `'false'`, `'0'` (không phân biệt hoa thường) => `false`
* `boolean` => giữ nguyên
* còn lại => dùng `!!x`

* `x` | Kiểu: `any` | Giá trị cần ép kiểu.
* Trả về | Kiểu: `boolean` | Giá trị boolean kết quả.

```js
import { castToBoolean } from 'absol/src/Converter/DataTypes';

castToBoolean('TRUE');  // true
castToBoolean('0');     // false
castToBoolean(123);     // true
```

### `implicitRealNumber(x)`

Ép ngầm định một giá trị về số thực:

* Nếu đã là số thực hợp lệ => trả về trực tiếp.
* Nếu là chuỗi số hợp lệ (hỗ trợ dấu `+/-`, phần thập phân, ký pháp mũ `e/E`) => parse sang số.
* Trường hợp khác => `NaN`.

* `x` | Kiểu: `any` | Giá trị cần chuyển đổi.
* Trả về | Kiểu: `number` | Số thực hoặc `NaN`.

```js
import { implicitRealNumber } from 'absol/src/Converter/DataTypes';

implicitRealNumber('  -12.5e2  '); // -1250
implicitRealNumber('12a');         // NaN
```

### `implicitInteger(x)`

Ép ngầm định về số nguyên theo triển khai hiện tại:

* Bước 1: chuyển qua `implicitRealNumber`.
* Bước 2: chỉ chấp nhận giá trị thỏa `isNaturalNumber`.
* Không thỏa => `NaN`.

Lưu ý: với logic hiện tại, giá trị âm sẽ bị loại.

* `x` | Kiểu: `any` | Giá trị cần chuyển đổi.
* Trả về | Kiểu: `number` | Số nguyên không âm hoặc `NaN`.

```js
import { implicitInteger } from 'absol/src/Converter/DataTypes';

implicitInteger('12');  // 12
implicitInteger('-2');  // NaN
implicitInteger('3.5'); // NaN
```

### `implicitNaturalNumber(x)`

Ép ngầm định về số tự nhiên:

* Bước 1: chuyển qua `implicitRealNumber`.
* Bước 2: chỉ giữ giá trị thỏa `isNaturalNumber`.
* Không thỏa => `NaN`.

* `x` | Kiểu: `any` | Giá trị cần chuyển đổi.
* Trả về | Kiểu: `number` | Số tự nhiên hoặc `NaN`.

```js
import { implicitNaturalNumber } from 'absol/src/Converter/DataTypes';

implicitNaturalNumber('42'); // 42
implicitNaturalNumber('-1'); // NaN
```

## ext2MineType

`ext2MineType` là object ánh xạ phần mở rộng file (extension) sang MIME type tương ứng. Module export mặc định object này từ `Converter/ext2MineType`.

* Key: extension viết thường, ví dụ `png`, `pdf`, `webp`, `wasm`.
* Value: MIME type tương ứng.
* Key `*`: MIME fallback mặc định là `application/octet-stream`.

### Ví dụ ngắn

```js
import ext2MineType from 'absol/src/Converter/ext2MineType';

function getMimeFromFileName(fileName) {
	const ext = (fileName.split('.').pop() || '').toLowerCase();
	return ext2MineType[ext] || ext2MineType['*'];
}

console.log(getMimeFromFileName('photo.avif')); // image/avif
console.log(getMimeFromFileName('module.wasm')); // application/wasm
console.log(getMimeFromFileName('unknown.zzz')); // application/octet-stream
```


## File Converter

Nhóm hàm trong module `Converter/file` hỗ trợ chuyển đổi giữa `Blob`, `File`, `data URI` và `ArrayBuffer`.

### `blobToFile(theBlob, fileName)`

Tạo một đối tượng `File` từ `Blob`.

* `theBlob` | Kiểu: `Blob` | Blob nguồn.
* `fileName` | Kiểu: `string` | Tên file cần tạo.
* Trả về | Kiểu: `File` | File mới với `type` lấy từ `theBlob.type`.

```js
import { blobToFile } from 'absol/src/Converter/file';

const blob = new Blob(['hello'], { type: 'text/plain' });
const file = blobToFile(blob, 'hello.txt');
console.log(file.name, file.type); // hello.txt text/plain
```

### `dataURItoBlob(dataURI)`

Chuyển chuỗi data URI (base64) thành `Blob`.

* `dataURI` | Kiểu: `string` | Chuỗi dạng `data:<mime>;base64,...`.
* Trả về | Kiểu: `Blob` | Blob kết quả, giữ lại MIME type trong data URI.

```js
import { dataURItoBlob } from 'absol/src/Converter/file';

const b = dataURItoBlob('data:text/plain;base64,SGVsbG8=');
console.log(b.type, b.size); // text/plain 5
```

### `blobToArrayBuffer(blob)`

Đọc nội dung `Blob` thành `ArrayBuffer` bằng `FileReader`.

* `blob` | Kiểu: `Blob` | Blob cần đọc.
* Trả về | Kiểu: `Promise<ArrayBuffer>` | Promise chứa dữ liệu nhị phân của blob.

```js
import { blobToArrayBuffer } from 'absol/src/Converter/file';

blobToArrayBuffer(new Blob(['abc'])).then((ab) => {
	console.log(ab.byteLength); // 3
});
```

### `stringToBlob(text, type)`

Tạo `Blob` từ chuỗi text.

Quy tắc tham số `type`:

* Nếu `type` có dạng MIME (`text/plain`, `image/png`, ...) => dùng trực tiếp.
* Nếu `type` là extension (`txt`, `png`, ...) => tra qua `ext2MineType`.
* Nếu không truyền `type` hoặc không tra được => mặc định `text/plain`.

* `text` | Kiểu: `string` | Nội dung văn bản.
* `type` | Kiểu: `string | undefined` | MIME type hoặc extension.
* Trả về | Kiểu: `Blob` | Blob chứa text.

```js
import { stringToBlob } from 'absol/src/Converter/file';

const a = stringToBlob('hello', 'text/plain');
const b = stringToBlob('hello', 'txt');
console.log(a.type, b.type); // text/plain text/plain
```

### `convertToSafeFile(file)`

Chuẩn hóa tên file để an toàn hơn khi upload/lưu trữ:

* Nếu `file` là `null`/`undefined` => trả về nguyên giá trị đó.
* Nếu là `File` => thay các ký tự không hợp lệ trong tên (`/ \\ < > : " ' | ? *`) bằng `_`.
* Khi tên thay đổi, hàm tạo lại `File` mới giữ nguyên nội dung và MIME type.

* `file` | Kiểu: `File` | File đầu vào.
* Trả về | Kiểu: `File` | File đã chuẩn hóa tên (hoặc file gốc nếu không cần đổi).

```js
import { convertToSafeFile } from 'absol/src/Converter/file';

const bad = new File(['x'], 'a:b?.txt', { type: 'text/plain' });
const safe = convertToSafeFile(bad);
console.log(safe.name); // a_b_.txt
```


## QRCode

`QRCode` là class tạo ma trận QR từ chuỗi text. Class này export mặc định từ module `Converter/QRCode`.

### `new QRCode(opt)`

Khởi tạo đối tượng QRCode.

`opt` có thể là:

* `string`: chính là nội dung QR (`text`).
* `object`: cấu hình chi tiết.

Các thuộc tính cấu hình hỗ trợ:

* `text` | Kiểu: `string` | Nội dung cần mã hóa.
* `width` | Kiểu: `number` | Mặc định `255`.
* `height` | Kiểu: `number` | Mặc định `255`.
* `typeNumber` | Kiểu: `number` | Mặc định `4` (hệ thống sẽ tự chọn type phù hợp khi tạo code).
* `correctLevel` | Kiểu: `QRCode.CorrectLevel` | Mặc định `QRCode.CorrectLevel.H`.

Nếu có `text`, constructor sẽ tự gọi `makeCode(text)`.

```js
import QRCode from 'absol/src/Converter/QRCode';

const qr = new QRCode({
	text: 'https://absol.cf',
	correctLevel: QRCode.CorrectLevel.M
});
```

### `makeCode(sText)`

Sinh lại dữ liệu QR từ chuỗi đầu vào.

* `sText` | Kiểu: `string` | Nội dung cần mã hóa vào QR.
* Trả về | Kiểu: `void`.

```js
import QRCode from 'absol/src/Converter/QRCode';

const qr = new QRCode();
qr.makeCode('Xin chao QR');
```

### `getBitmap()`

Lấy ma trận QR dưới dạng mảng 2 chiều boolean.

* `true`: ô đen.
* `false`: ô trắng.

* Trả về | Kiểu: `boolean[][]` | Ma trận kích thước `n x n`.

```js
import QRCode from 'absol/src/Converter/QRCode';

const qr = new QRCode('Hello');
const bitmap = qr.getBitmap();
console.log(bitmap.length, bitmap[0].length); // n n
console.log(bitmap[0][0]); // true/false
```

### `QRCode.CorrectLevel`

Tập hằng số mức sửa lỗi của QR Code:

* `QRCode.CorrectLevel.L`
* `QRCode.CorrectLevel.M`
* `QRCode.CorrectLevel.Q`
* `QRCode.CorrectLevel.H`

Ví dụ:

```js
import QRCode from 'absol/src/Converter/QRCode';

const qr = new QRCode({
	text: 'ABSOL',
	correctLevel: QRCode.CorrectLevel.H
});
```



