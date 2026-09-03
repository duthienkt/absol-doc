## TableOfTextInput

### Tạo mới

```js
var component = absol._({
    tag: 'tableoftextinput'
});
```

### Tên tag

- `tableoftextinput`

### require

```js
var clazz = absol.require('tableoftextinput');
```

### Class

`TableOfTextInput`

### Nguồn

- `js/TableOfTextInput.js`

### Demo

- https://absol.cf/libs/absol-acomp/demo/tableoftextinput.html

### props

#### `data`

`data` là object mô tả nội dung bảng, có dạng:

```ts
type TEIData = {
  rows: TEIDataRow[];
};

type TEIDataRow = {
  cells: TEIDataCell[];
};

type TEIDataCell = {
  value: string;
  colspan?: number; // mặc định 1
  rowspan?: number; // mặc định 1
  style?: {
    color?: string; // ví dụ: "#ff0000"
    fontSize?: number; // đơn vị pt
    fontWeight?: "bold" | "normal";
    fontStyle?: "italic" | "normal";
    textAlign?: "left" | "center" | "right";
  };
};
```

Ví dụ dữ liệu cơ bản:

```js
const data = {
  rows: [
    {
      cells: [
        { value: 'Mã SP' },
        { value: 'Tên SP' },
        { value: 'SL', style: { textAlign: 'right', fontWeight: 'bold' } }
      ]
    },
    {
      cells: [
        { value: 'SP001' },
        { value: 'Bút bi' },
        { value: '12', style: { textAlign: 'right' } }
      ]
    }
  ]
};

component.data = data;
```

Ví dụ có merge ô (`colspan`/`rowspan`):

```js
const data = {
  rows: [
    {
      cells: [
        { value: 'Báo cáo tồn kho', colspan: 3, style: { fontWeight: 'bold', textAlign: 'center' } }
      ]
    },
    {
      cells: [
        { value: 'Kho A', rowspan: 2, style: { fontStyle: 'italic' } },
        { value: 'Nhập' },
        { value: 'Xuất' }
      ]
    },
    {
      cells: [
        { value: '120' },
        { value: '80' }
      ]
    }
  ]
};

component.data = data;
```

Chuẩn hóa khi set `data`:

- Nếu truyền `string`, component tự đổi thành bảng 1 ô.
- Nếu `rows` không hợp lệ, component dùng dữ liệu mặc định.
- Nếu `rows` rỗng, tự thêm 1 dòng với 1 ô rỗng.
- Nếu `cells` của một dòng rỗng, tự thêm 1 ô rỗng.
- `value` không phải `string` sẽ hiển thị thành chuỗi rỗng.
- `colspan`/`rowspan` không hợp lệ sẽ về `1`.

Dữ liệu trả về từ `component.data`:

- Cùng cấu trúc như input (`rows -> cells`).
- Các thuộc tính mặc định của style có thể bị lược bỏ để output gọn hơn.
  - Ví dụ `fontWeight: 'normal'`, `textAlign: 'left'`, `color: '#000000'`, `fontSize: 11` thường không xuất ra.

### Ghi chú

- Hiện tại chưa kiểm tra tính hợp lệ của cấu trúc bảng