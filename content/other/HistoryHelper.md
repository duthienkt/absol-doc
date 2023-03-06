## HistoryHelper

### [Demo](https://absol.cf/libs/absol-acomp/demo/history.html)

### Danh sách thuộc tính

| Tên          | Kiểu | Chú thích                                                                     | 
|--------------|------------|-------------------------------------------------------------------------------|
| current      |  {id: number, callback: function, bundle: any}         | Chứa thông tin trạng thái hiện tại <br/>Chỉ nên đọc, sửa trong này có thể lỗi |  

### Danh sách hàm

| Tên          | Tham số                                                 | Trả về | Chú thích                                                                        |
|--------------|---------------------------------------------------------|--------|----------------------------------------------------------------------------------|
| setNewLink   | newURL: string<br>callbackFunc: function<br> bundle:any | number | Thêm state với link mới, callback sẽ được goi khi nhấn back khi đang ở state này |
| deleteHandle | handle: number                                          |        |                                                                                  |
| hook         | callbackFunc: function(bundle:any):void<br> bundle:any  | number | Chặn phím back, sau khi gọi hàm này, thuộc tính current không thay đổi           |

> bundle được truyền khi gọi `setNewLink` và `hook` sẽ được truyền cho callbackFunc mỗi lần gọi   

### Mẫu

```js
var handle;
handle = HistoryHelper.setNewLink('?count=' + count, function (bundle) {
    absol.require('snackbar').show("Back of " + bundle.id);
    render(`<div>Back form ${bundle.id} to ${HistoryHelper.current && HistoryHelper.current.bundle && HistoryHelper.current.bundle.id}</div>`);
}, { id: count });

//...
var hookHandle = HistoryHelper.hook(function (bundle) {
    render(`<div>Prevent back button, current: ${HistoryHelper.current && HistoryHelper.current.bundle && HistoryHelper.current.bundle.id}</div>`);
}, { id:'LOCK' });

//...
HistoryHelper.deleteHandle(hookHandle);

```
