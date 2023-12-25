## DateInput

```js
var input = absol._({
    tag: 'dateinput',
    props: {
        value: new Date(),
        format: "dd/MM/yyyy",
        notNull: false,
        readOnly: false
    },
    on: {
        change: function() {
            console.log(this.value, input.value)
        }
    }
});
```

### props 

- **value**: `Date` 
  - *set*: `null`, kiểu `Date`,`string` theo format hoặc dạng `"Sun Dec 24 2023 07:06:39 GMT+0700 (Indochina Time)"`
  - *get*: trả về null, hoặc đầu ngày theo múi giờ tương ứng
- **format**: `string`, hỗ trợ các token `d`, `dd`, `M`, `MM`, `yyyy`, Chi tiết: [format](?page=absolcore_datetime#format)
