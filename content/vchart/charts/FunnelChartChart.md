## BarStackChart

### [Demo](https://absol.cf/libs/absol-vchart/demo/funnelchart.html)


### props

* **resizable** : `bool` đồ thị có thể thay đổi kích thước khi click vào
* **tile** : `string`
* **blocks** : `Array<{name, value, percent?, color?}>`
  * **value** : `number` - giá trị
  * **name** : `string` - tên block
  * **percent** : `number` - phần trăm hiển thị dưới giá trị, mặc định sẽ tự tính theo tổng và value
  * **color** : `string|Color` - màu block, mặc định tự động
  