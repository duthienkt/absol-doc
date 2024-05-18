## CompactDataGridEditor

## [Demo](https://absol.cf/libs/absol-acomp/demo/compactdatagrid.html) 

### Tạo mới

```js
var data = {
    rows: [
        {
            cells: [{
                variables: [{ name: 'abc', title: "Tên" }, 'xyz']
            }, {}, {}, {}]
        },
        { cells: [{}, {}, {}, {}] },
        { cells: [{}, { colspan: 2, rowspan: 2 }, {}] },
        { cells: [{}, {}, {}, {}] },
        { cells: [{}, {}, {}, {}] }

    ]
};


var editor = absol._({
    tag: 'compactdatagrideditor',
    props:{
        data: data,
        variables:[{name: 'abc', title: 'Tên'}, {name: "full_name", title: 'Họ và tên'}],
        on:{
            change: function(){
                console.log(this.data);
            }
        }
    }
});

console.log(editor.data, editor.variables);

```

> Lưu ý: variables sẽ bao gồm các biến chưa được thêm vào bảng(data) và có thể truyền các biến đã bỏ vào bảng, khi lấy dữ liệu
> đầu ra, biến luôn là dạng object {name: string, title?: string}, lúc truyền vào có thể là string, hoặc object.
> 
> Nếu 1 biến có cả trong data và variables thì thông tin sẽ được gộp