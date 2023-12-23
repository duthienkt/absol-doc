## DateTimeInput

```js
var input = absol._({
    tag: 'datetimeinput',
    props: {
        value: new Date(),
        format: "dd/MM/yyyy HH:mm",
        notNull: false
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
  - default: `null`
- **format**: `string` - chi tiết: [format](?page=absolcore_datetime#format)
  - default: `"dd/MM/yyyy HH:mm"`
  - giá trị: `"d/MM/yyyy hh:mm a"`, `"dd/MM/yyyy hh:mm a"`, `"`, `"dd-MM-yyyy hh:mm a"`, `"dd.MM.yyyy hh:mm a"`, `"yyyy/MM/dd hh:mm a"`, `"yyyy-MM-dd hh:mm a"`
- **notNull**: `boolean`
  - defalt: `false`

### on

- **change**: `function(event:{type: "change"",value: Date, ...}):void`




