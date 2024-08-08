## AssessmentChart

### [Demo](https://absol.cf/libs/absol-vchart/demo/assessmentchart.html)


### props

* **resizable** : `bool` đồ thị có thể thay đổi kích thước khi click vào
* **title** : tiêu đề
* **levels** : `Array<number>` - các giá trị ứng với từng mức
* **simpleMode** : `bool` - bật tắt chế độ đơn giản, trong chế độ đơn giản sẽ không có đường phân mức
* **keys** : `Array<string>` - các giá trị kĩ năng
* **ranges** : `Array<number[2]>` - mỗi phần tử là 1 cặp số ứng với `[min, max]`, có độ dài bằng keys
* **rangeFillColor** : `string | Color` - màu tô ranges, mặc định trong suốt
* **rangeMaxStrokeColor** : `string | Color` - màu đường max của ranges, mặc định `rgba(255, 150, 0, 0.3)`
* **rangeMinStrokeColor** : `string | Color` - màu đường min của ranges, mặc định `rgba(200, 200, 0, 0.3)`
* **areas** : `{values, name, stroke?, fill?, color?}[]` các đa giác
    * **values** : `number[]` - giá trị ứng với `keys`
    * **name** : `string` - tên đa giác
    * **color**: `Color|string` - màu của đa giác, sẽ được dùng để tạo màu cho **stroke**(opacity: 0.8), **fill**(opacity: 0.3), mặc định tạo tự động
    * **stroke** : `Color|string`- màu border, mặc đinh tạo từ **color** 
    * **fill** : `Color|string` - màu tô trong đa giác, mặc đinh tạo từ **color**