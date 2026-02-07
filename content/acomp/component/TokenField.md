## TokenField

### [Demo](https://absol.cf/libs/absol-acomp/demo/tokenfield.html)

### Ví dụ

```js
var field = absol._({
    tag: 'tokenfield',
    style:{
      size:'regular'  //or "default"
    },
    props: {
        placeHolder: 'Nhập giá trị, phân tách bằng ;',
        items: ['Một', 'Hai', 'Ba'],
        separator: ';',
        autocomplete: [
            'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'
        ]
    },
    on: {
        change: function(event) {
            console.log(event, this.items);
        }
    }
});
document.body.appendChild(field);
```

### props

- **items**: `string[]`  
  Danh sách token ban đầu. Mặc định: `[]`
- **separator**: `string`  
  Ký tự hoặc chuỗi dùng để phân tách token khi nhập. Mặc định: `' '` (dấu cách)
  - Giá trị phổ biến: `' '`, `';'`, `'\n'`, `'\t'`
- **placeHolder**: `string`  
  Văn bản gợi ý cho input. Mặc định: `''`
- **autocomplete**: `string[]`  
  Danh sách gợi ý cho autocomplete. Mặc định: `null`

### sự kiện

- **change**: `function(event: {type: "change", action: "add"|"remove", item: string, itemElt: HTMLElement, ...})`  
  Kích hoạt khi thêm hoặc xoá token.

### Điều hướng bàn phím
- Nhập separator để thêm token
- Phím mũi tên để di chuyển giữa các token
- Backspace/Delete để xoá token
