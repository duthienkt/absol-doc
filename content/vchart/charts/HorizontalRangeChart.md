## HorizontalRangeChart

### [Demo](https://absol.cf/libs/absol-vchart/demo/horizontalrangechart.html)

### props

* **resizable** : `bool` đồ thị có thể thay đổi kích thước khi click vào
* **zeroOY** : `bool` giá trị thấp nhất sẽ tính cả 0
* **title** : tiêu đề
* **ranges** : `Array<{name: string, min: number, max: number, mid?: number, normal?: number}>`,  **mid** và **normal**
  có thể không có
* **maxText** : `string` hiển thị ở ghi chú
* **minText** : `string` hiển thị ở ghi chú
* **midText** : `string` hiển thị ở ghi chú
* **valueName** : `string` text hiển thị ở trục ngang

### style

* **width** : chấp nhận giá trị `px`, `%`, `vw`
* **height** : luôn luôn là `auto`, không truyền vào

### method

* **updateContent()**: `void`, gọi sau khi đã thay đổi các trường trong props, không cần lần đầu tiên lúc khởi tạo

