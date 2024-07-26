## HorizontalRangeChart

### props
* **resizable** : `bool` đồ thị có thể thay đổi kích thước khi click vào
* **zeroOY** : `bool` giá trị thấp nhất sẽ tính cả 0
* **position** : `Array<{name: string, ranks: Array<number>}>`
* **maxText** : `string` hiển thị ở ghi chú
* **minText** : `string` hiển thị ở ghi chú
* **midText** : `string` hiển thị ở ghi chú
* **valueName** : `string` text hiển thị ở trục ngang

### style

* **width** : chấp nhận giá trị `px`, `%`, `vw` 
* **height** : luôn luôn là `auto`, không truyền vào


### method

* **updateContent()**: `void`, gọi sau khi đã thay đổi các trường trong props, không cần lần đầu tiên lúc khởi tạo


<script>

    console.log(doc)
</script>