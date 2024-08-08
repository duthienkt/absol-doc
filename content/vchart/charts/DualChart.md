## DualChart

## [Demo](https://absol.cf/libs/absol-vchart/demo/Dualchart.html)

### props

* **title** : `string` - tiểu đề
* **valueName** : `string` - tên trục Y
* **keyName** : `string` - tên trục X
* **zeroOY** : `bool` - giá trị thấp nhất sẽ tính cả 0
* **keys** : `Array<string>` - tên các cột, nằm trên trục X
* **lines** : `Array<{name, values, text?, color?, plotColor?}>`
    * **name** : `string` - tên đường
    * **values** : `Array<number>` -  các điểm giá trị, độ dài array bằng **keys**, các vị trí không có giá trị để `"-"`
    * **color** : `string|Color` - màu của đường, mặc định sinh tự động
    * **text** : `string` - text hiển thị khi hover vào điểm tròn trên line
    * **plotColor** : `string|Color` - màu của điểm tròn, mặc định lấy từ **color**
