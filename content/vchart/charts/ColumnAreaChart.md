## ColumnAreaChart/ColumChart

## [Demo](https://absol.cf/libs/absol-vchart/demo/columnareachart.html)

### props

* **title** : `string` - tiểu đề
* **valueName** : `string` - tên trục Y
* **keyName** : `string` - tên trục X
* **zeroOY** : `bool` - giá trị thấp nhất sẽ tính cả 0, mặc định false
* **keys** : `Array<string>` - tên các cột, nằm trên trục X
* **rotateText**: `bool` - tùy chọn chữ trên trục Ox nằm ngang hoặc xiên, mặc định `true`
* **showInlineValue**: `bool` - tùy chọn hiển thị giá trị trên mỗi cột, mặc định `false`
* **columnWidth**: `number` - độ rộng cột, mặc định 20
* **numberToString**: `function` - hàm chuyển đổi số sang string
* **values**: `Array<string>` - giá trị ứng với cột
* **areas**:  `Array<object>` - array các vùng, mỗi vùng gồm
  * **name**: `string` - tên vùng
  * **values**: `Array<number>` - các giá trị ứng với keys  
  * **color**: `string|Color` - màu của vùng, mặc định `auto` 