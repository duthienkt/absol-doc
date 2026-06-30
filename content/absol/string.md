## absol.string

`absol.string` là module tiện ích cho xử lý chuỗi: chuyển đổi naming convention, chuẩn hóa identifier/tên file, bỏ dấu tiếng Việt, xuống dòng theo độ dài và đọc số thành chữ tiếng Việt.

```js
var string = absol.string;
```

### `wrapToLines(s, maxLength)`

Tách một chuỗi thành nhiều dòng, ưu tiên ngắt theo khoảng trắng để mỗi dòng không vượt quá độ dài tối đa.

* `s` | Kiểu: `string` | Chuỗi đầu vào.
* `maxLength` | Kiểu: `number` | Độ dài tối đa cho mỗi dòng.
* Trả về | Kiểu: `string[]` | Mảng các dòng đã được tách.

```js
absol.string.wrapToLines('Xin chào các bạn đến với absol', 10);
// ['Xin chào', 'các bạn', 'đến với', 'absol']
```

### `nonAccentVietnamese(s)`

Bỏ dấu tiếng Việt và chuyển `đ/Đ` thành `d/D`.

* `s` | Kiểu: `string` | Chuỗi đầu vào.
* Trả về | Kiểu: `string` | Chuỗi không dấu.

```js
absol.string.nonAccentVietnamese('Tôi yêu tiếng Việt');
// 'Toi yeu tieng Viet'

absol.string.nonAccentVietnamese('Trường Đại học Bách Khoa');
// 'Truong Dai hoc Bach Khoa'
```

### `pascalCaseToCamelCase(s)`

Chuyển `PascalCase` sang `camelCase`.

* `s` | Kiểu: `string` | Chuỗi dạng `PascalCase`.
* Trả về | Kiểu: `string` | Chuỗi dạng `camelCase`.

```js
absol.string.pascalCaseToCamelCase('UserName'); // 'userName'
```

### `kebabCaseToCamelCase(s)`

Chuyển `kebab-case` sang `camelCase`.

* `s` | Kiểu: `string` | Chuỗi dạng `kebab-case`.
* Trả về | Kiểu: `string` | Chuỗi dạng `camelCase`.

```js
absol.string.kebabCaseToCamelCase('user-name'); // 'userName'
```

### `underScoreToCamelCase(s)`

Chuyển `under_score` sang `camelCase`.

* `s` | Kiểu: `string` | Chuỗi dạng `under_score`.
* Trả về | Kiểu: `string` | Chuỗi dạng `camelCase`.

```js
absol.string.underScoreToCamelCase('user_name'); // 'userName'
```

### `camelCaseToPascalCase(s)`

Chuyển `camelCase` sang `PascalCase`.

* `s` | Kiểu: `string` | Chuỗi dạng `camelCase`.
* Trả về | Kiểu: `string` | Chuỗi dạng `PascalCase`.

```js
absol.string.camelCaseToPascalCase('userName'); // 'UserName'
```

### `underScoreToPascalCase(s)`

Chuyển `under_score` sang `PascalCase`.

* `s` | Kiểu: `string` | Chuỗi dạng `under_score`.
* Trả về | Kiểu: `string` | Chuỗi dạng `PascalCase`.

```js
absol.string.underScoreToPascalCase('user_name'); // 'UserName'
```

### `kebabCaseToPascalCase(s)`

Chuyển `kebab-case` sang `PascalCase`.

* `s` | Kiểu: `string` | Chuỗi dạng `kebab-case`.
* Trả về | Kiểu: `string` | Chuỗi dạng `PascalCase`.

```js
absol.string.kebabCaseToPascalCase('user-name'); // 'UserName'
```

### `pascalCaseToKebabCase(s)`

Chuyển `PascalCase` sang `kebab-case`.

* `s` | Kiểu: `string` | Chuỗi dạng `PascalCase`.
* Trả về | Kiểu: `string` | Chuỗi dạng `kebab-case`.

```js
absol.string.pascalCaseToKebabCase('UserName'); // 'user-name'
```

### `camelCaseToKebabCase(s)`

Chuyển `camelCase` sang `kebab-case`.

* `s` | Kiểu: `string` | Chuỗi dạng `camelCase`.
* Trả về | Kiểu: `string` | Chuỗi dạng `kebab-case`.

```js
absol.string.camelCaseToKebabCase('userName'); // 'user-name'
```

### `underScoreToKebabCase(s)`

Chuyển `under_score` sang `kebab-case`.

* `s` | Kiểu: `string` | Chuỗi dạng `under_score`.
* Trả về | Kiểu: `string` | Chuỗi dạng `kebab-case`.

```js
absol.string.underScoreToKebabCase('user_name'); // 'user-name'
```

### `pascalCaseToUnderScore(s)`

Chuyển `PascalCase` sang `under_score` (chữ thường).

* `s` | Kiểu: `string` | Chuỗi dạng `PascalCase`.
* Trả về | Kiểu: `string` | Chuỗi dạng `under_score`.

```js
absol.string.pascalCaseToUnderScore('UserName'); // 'user_name'
```

### `pascalCaseToUpperUnderScore(s)`

Chuyển `PascalCase` sang `UPPER_UNDER_SCORE`.

* `s` | Kiểu: `string` | Chuỗi dạng `PascalCase`.
* Trả về | Kiểu: `string` | Chuỗi dạng `UPPER_UNDER_SCORE`.

```js
absol.string.pascalCaseToUpperUnderScore('UserName'); // 'USER_NAME'
```

### `camelCaseToUnderScore(s)`

Chuyển `camelCase` sang `under_score` (chữ thường).

* `s` | Kiểu: `string` | Chuỗi dạng `camelCase`.
* Trả về | Kiểu: `string` | Chuỗi dạng `under_score`.

```js
absol.string.camelCaseToUnderScore('userName'); // 'user_name'
```

### `camelCaseToUpperUnderScore(s)`

Chuyển `camelCase` sang `UPPER_UNDER_SCORE`.

* `s` | Kiểu: `string` | Chuỗi dạng `camelCase`.
* Trả về | Kiểu: `string` | Chuỗi dạng `UPPER_UNDER_SCORE`.

```js
absol.string.camelCaseToUpperUnderScore('userName'); // 'USER_NAME'
```

### `kebabCaseToUnderScore(s)`

Chuyển `kebab-case` sang `under_score` (chữ thường).

* `s` | Kiểu: `string` | Chuỗi dạng `kebab-case`.
* Trả về | Kiểu: `string` | Chuỗi dạng `under_score`.

```js
absol.string.kebabCaseToUnderScore('user-name'); // 'user_name'
```

### `kebabCaseToUpperUnderScore(s)`

Chuyển `kebab-case` sang `UPPER_UNDER_SCORE`.

* `s` | Kiểu: `string` | Chuỗi dạng `kebab-case`.
* Trả về | Kiểu: `string` | Chuỗi dạng `UPPER_UNDER_SCORE`.

```js
absol.string.kebabCaseToUpperUnderScore('user-name'); // 'USER_NAME'
```

### `normalizeIdent(text, opt)`

Chuẩn hóa chuỗi thành tên định danh thân thiện với code (identifier).

* `text` | Kiểu: `string` | Chuỗi cần chuẩn hóa.
* `opt` | Kiểu: `object` | Cấu hình tùy chọn.
* `opt.spaces` | Kiểu: `string` | Ký tự thay thế khoảng trắng. Mặc định: `'_'`.
* `opt.symbols` | Kiểu: `string` | Ký tự thay thế ký tự đặc biệt. Mặc định: `'_'`.
* `opt.startsWithDigit` | Kiểu: `boolean` | Có cho phép bắt đầu bằng số hay không. Mặc định trong code hiện tại: `true`.
* `opt.leadingDigitPrefix` | Kiểu: `string` | Tiền tố thêm vào nếu không cho bắt đầu bằng số. Mặc định: `'$'`.
* Trả về | Kiểu: `string` | Chuỗi đã chuẩn hóa.

```js
absol.string.normalizeIdent('  Số điện thoại #1  ');
// 'So_dien_thoai_1'

absol.string.normalizeIdent('123 tên biến', {
	startsWithDigit: false,
	leadingDigitPrefix: '_'
});
// '_123_ten_bien'
```

### `breakTextToLineByLength(text, limitLength)`

Xuống dòng văn bản sao cho mỗi dòng không vượt quá độ dài giới hạn, ưu tiên cắt tại ranh giới từ/ký hiệu.

* `text` | Kiểu: `string` | Văn bản đầu vào (có thể có nhiều dòng).
* `limitLength` | Kiểu: `number` | Độ dài tối đa cho mỗi dòng. Mặc định: `256`.
* Trả về | Kiểu: `string` | Văn bản sau khi xuống dòng lại.

```js
absol.string.breakTextToLineByLength('một hai ba bốn năm sáu bảy tám chín', 12);
// 'một hai ba\nbốn năm sáu\nbảy tám chín'
```

### `normalizeFileName(name)`

Chuẩn hóa tên file có dấu/ký tự đặc biệt thành dạng an toàn hơn:

* Cắt khoảng trắng đầu/cuối.
* Bỏ dấu tiếng Việt.
* Thay nhóm ký tự không nằm trong `[a-zA-Z0-9_.]` bằng `_`.

* `name` | Kiểu: `string` | Tên file đầu vào.
* Trả về | Kiểu: `string` | Tên file đã chuẩn hóa.

```js
absol.string.normalizeFileName(' Báo cáo tổng hợp 2026.xlsx ');
// 'Bao_cao_tong_hop_2026.xlsx'
```

### `String.nonAccentVietnamese(s)`

Alias static cho `absol.string.nonAccentVietnamese`.

* `s` | Kiểu: `string` | Chuỗi đầu vào.
* Trả về | Kiểu: `string` | Chuỗi không dấu.

```js
String.nonAccentVietnamese('Tiếng Việt có dấu');
// 'Tieng Viet co dau'
```

### `String.prototype.nonAccentVietnamese()`

Hàm mở rộng trên đối tượng `String`, cho phép gọi trực tiếp trên chuỗi.

* Trả về | Kiểu: `string` | Chuỗi không dấu.

```js
'Tiếng Việt có dấu'.nonAccentVietnamese();
// 'Tieng Viet co dau'
```

### `numberToVietnamese(n)`

Đọc số nguyên thành chữ tiếng Việt.

* `n` | Kiểu: `number | string | bigint` | Giá trị cần đọc.
* Trả về | Kiểu: `string` | Chuỗi đọc số, viết hoa chữ cái đầu.

Lưu ý:

* Nếu `n` là `number` thì phải là `safe integer`.
* Nếu `n` là số âm, kết quả sẽ có tiền tố `"Âm ..."`.
* Có thể truyền `string` để đọc số nguyên rất lớn (sẽ được parse qua `BigInt`).

```js
absol.string.numberToVietnamese(15); // 'Mười lăm'
absol.string.numberToVietnamese(123456); // 'Một trăm hai mươi ba nghìn bốn trăm năm mươi sáu'
absol.string.numberToVietnamese(-42); // 'Âm bốn mươi hai'
absol.string.numberToVietnamese('9007199254740993');
// Kết quả là chuỗi tiếng Việt tương ứng với số rất lớn.
```


## Sinh Chuỗi Ngẫu Nhiên (stringGenerate)

Nhóm hàm này hỗ trợ sinh định danh ngẫu nhiên và sinh văn bản giả (Lorem Ipsum) để test giao diện, dữ liệu mẫu.

### `identCharacters`

Danh sách ký tự được dùng khi sinh identifier ngẫu nhiên.

Bao gồm:

* Chữ cái thường `a-z`.
* Chữ cái hoa `A-Z`.
* Ký tự `_`.
* Chữ số `0-9`.

* Kiểu: `string[]`.

```js
absol.string.identCharacters;
// ['q', 'w', 'e', ..., 'Z', '_', '0', ..., '9']
```

### `randomIdent(length)`

Sinh một identifier ngẫu nhiên với độ dài chỉ định.

Lưu ý hành vi:

* Nếu `length` không hợp lệ hoặc không truyền, mặc định dùng `4`.
* Ký tự đầu tiên không lấy trong nhóm chữ số (để an toàn hơn khi dùng làm tên biến).

* `length` | Kiểu: `number` | Độ dài identifier.
* Trả về | Kiểu: `string` | Identifier ngẫu nhiên.

```js
absol.string.randomIdent(8);
// Ví dụ: 'aZ_1kLm9'

absol.string.randomIdent();
// Ví dụ: 'Qe_4'
```

### `parallelMatch(a, b)`

So sánh hai chuỗi theo từng vị trí và đếm số ký tự giống nhau tại cùng chỉ số.

* `a` | Kiểu: `string` | Chuỗi thứ nhất.
* `b` | Kiểu: `string` | Chuỗi thứ hai.
* Trả về | Kiểu: `number` | Số lượng vị trí trùng ký tự.

```js
absol.string.parallelMatch('abcdef', 'abZdeF');
// 4  (a, b, d, e trùng vị trí)
```

### `ipsumLoremWord`

Từ điển các từ Latin dùng để sinh văn bản giả.

* Kiểu: `string[]`.

```js
absol.string.ipsumLoremWord.length;
// Số lượng từ có sẵn để random
```

### `randomWord()`

Lấy ngẫu nhiên một từ từ `ipsumLoremWord`.

* Trả về | Kiểu: `string` | Một từ ngẫu nhiên.

```js
absol.string.randomWord();
// Ví dụ: 'lorem'
```

### `randomPhrase(arg1, arg2)`

Sinh một cụm từ ngẫu nhiên với giới hạn độ dài.

Cách gọi hỗ trợ:

* `randomPhrase(limitLength)`.
* `randomPhrase(minLength, limitLength)`.

* `arg1` | Kiểu: `number` | `limitLength` hoặc `minLength` tùy cách gọi.
* `arg2` | Kiểu: `number` | `limitLength` khi truyền đủ 2 tham số.
* Trả về | Kiểu: `string` | Cụm từ gồm nhiều từ ngẫu nhiên, cách nhau bởi dấu cách.

```js
absol.string.randomPhrase(30);
// Ví dụ: 'lorem ipsum dolor sit amet'

absol.string.randomPhrase(20, 60);
// Ví dụ: 'tempor incididunt ut labore et dolore'
```

### `randomSentence(limitLenght)`

Sinh một câu ngẫu nhiên bằng cách ghép nhiều cụm từ, có viết hoa chữ cái đầu và kết thúc bằng dấu chấm.

Lưu ý:

* Tên tham số trong mã nguồn là `limitLenght` (đúng theo code hiện tại).
* Nếu không truyền, mặc định dùng `300`.

* `limitLenght` | Kiểu: `number` | Giới hạn độ dài câu.
* Trả về | Kiểu: `string` | Câu ngẫu nhiên.

```js
absol.string.randomSentence(120);
// Ví dụ: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
```

### `randomParagraph(limitLength)`

Sinh một đoạn văn ngẫu nhiên gồm nhiều câu.

* `limitLength` | Kiểu: `number` | Giới hạn độ dài đoạn. Mặc định: `1000`.
* Trả về | Kiểu: `string` | Đoạn văn ngẫu nhiên.

```js
absol.string.randomParagraph(500);
// Ví dụ: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit...'
```


## So Khớp Chuỗi (stringMatching)

Nhóm hàm này dùng để đo mức độ giống nhau giữa từ/cụm từ, phù hợp cho tìm kiếm gần đúng (fuzzy matching).

### `wordLike(a, b)`

Tính độ giống nhau giữa hai từ bằng độ dài dãy con chung dài nhất (LCS), sau đó chuẩn hóa theo trung bình điều hòa độ dài hai chuỗi.

Điểm số:

$$
score = \frac{LCS(a, b)}{H(|a|, |b|)}
$$

Trong đó $H$ là harmonic mean.

* `a` | Kiểu: `string` | Từ thứ nhất.
* `b` | Kiểu: `string` | Từ thứ hai.
* Trả về | Kiểu: `number` | Điểm giống nhau (thường trong khoảng từ `0` đến `1`).

```js
absol.string.wordLike('hello', 'hallo');
// Ví dụ: 0.8
```

### `wordsMatch(sq1, sq2, matchWordPow)`

So khớp hai dãy từ bằng quy hoạch động. Mỗi cặp từ đóng góp điểm là:

$$
e = wordLike(w_1, w_2)^{matchWordPow}
$$

* `sq1` | Kiểu: `string[]` | Dãy từ thứ nhất.
* `sq2` | Kiểu: `string[]` | Dãy từ thứ hai.
* `matchWordPow` | Kiểu: `number` | Số mũ làm thay đổi độ nhạy điểm từng từ, mặc định `1`.
* Trả về | Kiểu: `number` | Tổng điểm so khớp tốt nhất theo thứ tự.

```js
absol.string.wordsMatch(['xin', 'chao'], ['xin', 'cac', 'ban']);
// Ví dụ: 1.x
```

### `phraseMatch(a, b, matchWordPow)`

So khớp hai cụm từ:

* Chuyển về chữ thường.
* Tách từ theo khoảng trắng và các dấu `, - . + ? _`.
* Tính điểm bằng `wordsMatch`.
* Chuẩn hóa theo harmonic mean số từ hai bên.

* `a` | Kiểu: `string` | Cụm từ thứ nhất.
* `b` | Kiểu: `string` | Cụm từ thứ hai.
* `matchWordPow` | Kiểu: `number` | Mặc định `1`.
* Trả về | Kiểu: `number` | Điểm so khớp cụm từ.

```js
absol.string.phraseMatch('Xin chào thế giới', 'xin chao the gioi');
// Ví dụ: gần 1
```

### `phraseLike(a, b, matchWordPow)`

Hàm này hiện có cùng cách tính và kết quả tương đương `phraseMatch` trong mã nguồn hiện tại.

* `a` | Kiểu: `string` | Cụm từ thứ nhất.
* `b` | Kiểu: `string` | Cụm từ thứ hai.
* `matchWordPow` | Kiểu: `number` | Mặc định `1`.
* Trả về | Kiểu: `number` | Điểm so khớp cụm từ.

```js
absol.string.phraseLike('smart phone case', 'phone smart-case');
// Ví dụ: 0.x
```

### `exportStringMatchingCode()`

Xuất mã nguồn các hàm so khớp chuỗi thành một chuỗi JavaScript để nhúng runtime khác.

* Trả về | Kiểu: `string` | Chuỗi mã JavaScript.

```js
var code = absol.string.exportStringMatchingCode();
// code là chuỗi chứa định nghĩa các hàm matching
```

Lưu ý:

* Trong chuỗi export hiện tại, object cuối là `_stringFormat` và không include `phraseMatch`.
* Đây là hành vi đúng theo mã nguồn hiện có.


## Tiện Ích Chuỗi Khác (stringUtils)

Nhóm hàm này cung cấp hash cho chuỗi/đối tượng và xử lý độ dài theo byte UTF-8.

### `stringHashCode(st)`

Tạo hash 32-bit có dấu từ một chuỗi bằng phép cộng dồn theo mã ký tự.

* `st` | Kiểu: `string` | Chuỗi đầu vào.
* Trả về | Kiểu: `number` | Giá trị hash 32-bit (có thể âm).

```js
absol.string.stringHashCode('hello');
// Ví dụ: 99162322
```

Lưu ý:

* Đây là hash nhanh để so sánh/xử lý nội bộ, không dùng cho mục đích bảo mật.

### `objectHashCode(obj)`

Tạo hash cho dữ liệu tổng quát (`string`, `number`, `boolean`, `array`, `object`, ...).

Quy tắc chính theo code hiện tại:

* Nếu `obj` có hàm `hash()` thì trả về trực tiếp `obj.hash()`.
* Với object thường, key được sort trước khi hash để giảm phụ thuộc thứ tự key.
* Với kiểu primitive, chuyển sang chuỗi rồi hash.

* `obj` | Kiểu: `any` | Dữ liệu cần hash.
* Trả về | Kiểu: `number` | Giá trị hash.

```js
absol.string.objectHashCode({ b: 2, a: 1 });
// Ví dụ: một số nguyên 32-bit
```

Lưu ý:

* Mục xử lý mảng trong mã hiện tại dùng `Array.isArray(tf)` (với `tf` là chuỗi `typeof`), nên không vào nhánh mảng như kỳ vọng.
* Tài liệu này mô tả đúng hành vi theo mã nguồn hiện có.

### `getUTF8BytesCount(str)`

Đếm số byte cần thiết để biểu diễn chuỗi theo UTF-8.

* `str` | Kiểu: `string` | Chuỗi đầu vào.
* Trả về | Kiểu: `number` | Số byte UTF-8.

```js
absol.string.getUTF8BytesCount('abc'); // 3
absol.string.getUTF8BytesCount('Việt'); // 6
absol.string.getUTF8BytesCount('😀'); // 4
```

### `cropTextByUTF8BytesCount(str, maxBytes)`

Cắt chuỗi để tổng số byte UTF-8 không vượt quá giới hạn cho trước.

Hàm đảm bảo không cắt vỡ ký tự nhiều byte giữa chừng.

* `str` | Kiểu: `string` | Chuỗi đầu vào.
* `maxBytes` | Kiểu: `number` | Giới hạn byte UTF-8.
* Trả về | Kiểu: `string` | Chuỗi đã cắt.

```js
absol.string.cropTextByUTF8BytesCount('Xin chào Việt Nam', 10);
// Ví dụ: 'Xin chào '
```

### `crc16(str)` (nội bộ)

Trong file có hàm `crc16` để tính CRC-16, nhưng hàm này không được `export`.

Vì vậy:

* Không thể gọi trực tiếp qua `absol.string.crc16` trong API public hiện tại.


