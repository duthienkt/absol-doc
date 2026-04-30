## absol.FileSaver

Module này được export tại `absol.FileSaver`. Dùng để kiểm tra sự tồn tại của file, tải file từ URL, hoặc lưu `Blob` / `File` / text xuống máy người dùng.

```js
var FileSaver = absol.FileSaver;
```

### `fileExist(url)`

Kiểm tra một URL có tồn tại hay không bằng request `HEAD`.

```js
absol.FileSaver.fileExist(url)
```

Params:

* `url` | Kiểu: `string` | Đường dẫn file cần kiểm tra.

Trả về:

* `Promise<boolean>` | Resolve `true` nếu server trả về HTTP `200`, ngược lại là `false`.

Ví dụ:

```js
absol.FileSaver.fileExist('/assets/report.pdf').then(function (exists) {
	console.log('Co file hay khong:', exists);
});
```

### `saveAs(blob, name, opts, popup)`

Lưu dữ liệu xuống máy người dùng. Hàm này tự chọn cách xử lý phù hợp theo từng trình duyệt.

```js
absol.FileSaver.saveAs(blob, name, opts, popup)
```

Params:

* `blob` | Kiểu: `string | File | Blob` | Có thể là URL file, đối tượng `File`, hoặc `Blob` cần tải xuống.
* `name` | Kiểu: `string | undefined` | Tên file tải xuống. Nếu bỏ qua, module sẽ lấy từ `blob.name` hoặc dùng mặc định là `'download'`.
* `opts` | Kiểu: `Object | undefined` | Tùy chọn phụ. Thường dùng `revokeTimeout` để đặt thời gian thu hồi object URL, và `autoBom` để tự thêm BOM cho text UTF-8.
* `popup` | Kiểu: `Window | Object | undefined` | Cửa sổ popup dùng trong một số trình duyệt fallback. Thường không cần truyền thủ công.

Trả về:

* `void` | Hàm không trả dữ liệu. Tác dụng chính là kích hoạt tải file.

Ví dụ lưu `Blob`:

```js
var blob = new Blob(['Hello world'], { type: 'text/plain;charset=utf-8' });

absol.FileSaver.saveAs(blob, 'hello.txt', {
	autoBom: true
});
```

Ví dụ lưu từ URL:

```js
absol.FileSaver.saveAs('/assets/manual.pdf', 'manual.pdf');
```

Ghi chú:

* Nếu `blob` là URL khác origin, module sẽ kiểm tra CORS trước. Nếu server cho phép, nó sẽ tải blob rồi lưu; nếu không, trình duyệt có thể mở link ở tab mới.
* Trong môi trường không có `window`, hàm chỉ log lỗi và không lưu file.

### `saveTextAs(text, name, opts)`

Tạo `Blob` từ text rồi gọi `saveAs(...)`.

```js
absol.FileSaver.saveTextAs(text, name, opts)
```

Params:

* `text` | Kiểu: `string` | Nội dung text cần lưu.
* `name` | Kiểu: `string | undefined` | Tên file tải xuống.
* `opts` | Kiểu: `Object | undefined` | Tùy chọn phụ. Thường dùng `autoBom` để thêm BOM cho text UTF-8, hoặc `revokeTimeout` để chỉnh thời gian thu hồi object URL.

Trả về:

* `void` | Hàm không trả dữ liệu.

Ví dụ:

```js
absol.FileSaver.saveTextAs('Dong 1\nDong 2', 'note.txt', {
	autoBom: true
});
```

### Tóm tắt nhanh

* `fileExist(url)` | Trả về `Promise<boolean>`.
* `saveAs(blob, name, opts, popup)` | Trả về `void`.
* `saveTextAs(text, name, opts)` | Trả về `void`.
