## PathView

## props

* **items**: `Array<{name, text, icon?, value}>`
  * **text**: `string` - đoạn text được hiển thị
  * **name**: `string` - dùng như text, ưu tiên sửa dụng text->name
  * **icon**: `any` - icon hiển thị, text hoặc icon có thể thiếu 1 trong 2
  * **value**: `any` - giá trị được truyền vào event khi click vào item

## event

* **click**: `function(event)` - khi click vào item
    * `event` gồm có
      * **value**: giá trị của item
      * **item**: item được click