## DoughnutChart

### props
* **resizable** : `bool` đồ thị có thể thay đổi kích thước khi click vào
* **title** : tiêu đề
* **colorScheme**: `number` - bảng màu
* **pieces**: `Array<object>` - mỗi phần tử gồm
  * **name**: `string`
  * **value**: `number`
  * **fillColor**: `string|Color` - màu tô, mặc định chạy theo  **colorScheme**