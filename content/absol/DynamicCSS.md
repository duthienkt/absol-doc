## [demo](https://absol.cf/libs/absol/demo/dynamiccss.html)

## Ví dụ

```js

var cssInitConfiguration = {
    "--body-height": "100%",
    "--font-size-right-mouse-menu": "16px",
    "--font-size-text-input": "16px",
    "--font-size-label": "14px",
    "--font": "14px \"Helvetica Neue\",Helvetica,Arial,sans-serif",
    "--font-size-title": "14px",
    "--font-weight-title": "bold",
    "--font-size-table-header": "12px",
    "--font-weight-table-header": "bold",
    "--control-height": "30px",
//  ...
};


hr.styleConfig = new absol.DynamicCSS();

hr.styleConfig.setRule(':root', cssInitConfiguration);
///do something
hr.styleConfig.commit();
```
> chỉ khi nào gọi `hr.styleConfig.commit()` thì css mới có hiệu lực, hàm này chỉ nên gọi sau khi hoàn tất các bước chỉnh sửa, không nên gọi liên tục

Ngoài ra cũng có thể viết theo "Method Chaining"

```js
hr.styleConfig = new absol.DynamicCSS()
	.setRule(':root', cssInitConfiguration)
  .commit();
```

Thay đổi giá trị

```js
hr.styleConfig.setProperty(':root', '--font', '17px')
	.setProperty(':root', '--input-height', '30px')
	.commit();
```

Lưu ý nếu giá trị là string trong css, cần có dấu `"`

```js
hr.styleConfig.setProperty('span[data-multi-lang-key="error_txt"]::before', 'content', '"Lỗi"');
```

Đổi toàn bộ nội dung trong 1 rule

```js
hr.styleConfig.setRule('h2', {
   "--font-weight-table-header": "bold",
   "--control-height": "30px",
}).commit();
```

Sửa 1 phần trong rule, các phần khác giữ nguyên

```js
hr.styleConfig.setRule('h2', {
   "--font-weight-table-header": "bold",
   "--control-height": "30px",
});
```

> Khi sửa đổi lúc trang web đang chạy, sau khi gọi `hr.styleConfig.commit();`, hãy gọi thêm `window.dispatchEvent(new Event('resize'));` để 1 số module, CKEDITOR chạy đúng