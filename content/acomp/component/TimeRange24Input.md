## TimeRange23Input

### props

* **dayOffset**: `number` - thời gian bắt đầu, tính bằng millisecond, nếu truyền là số lẻ, sẽ làm tròn xuống, nếu là số âm, sẽ được cộng thêm trước khi làm tròn
* **duration**: `number` - độ dài thời gian, tính bằng millisecond
* **notNull**: `boolean` - cho phép giá trị null, nếu `true` - **dayOffset** và **duration** sẽ mặc định 0 nếu truyền giá trị không hợp lệ
* **readOnly**: `boolean`
* **disabled**: `boolean`
* **value**: `{dayOffset: number, duration: number}` - giá trị tổng hợp

### class

`as-border-none`: chỉ dùng dược khi `readOnly = true`, input sẽ có dạng text

### code

```js
var input = absol._({
    tag: 'timerange24input',
    props: {
        dayOffset: 3600000 * 9.5,
        duration: 3600000
    },
    on: {
        change: function () {
            console.log(this.value)
            input3.value = this.value;
        }
    }
});

myDiv.addChild(input);
```