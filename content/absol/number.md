# Format

## float

Thiết lập trong trang web bằng systemconfig

```js
systemconfig.numberFormatLocales = "vi-VN";
```

Mặc định, thiết lập theo định dạng trình duyệt cung cấp, có thể xem bằng lệnh:

```js
console.log(1234567.89  .toLocaleString());
```

### function parseLocalFloat(s: string, option?: *): string
*absol-acomp/js/utils.js*


```js
//theo thiết lập tryền vào
var x = absol.$.parseLocalFloat('123.456,12', 'vi-VN');//=> 123456.12
//hoặc 
var y = absol.$.parseLocalFloat('123,456.12', {locales:'en-US'});//=> 123456.12
//mặc định, sẽ lấy từ systemconfig hoặc trình duyệt
var y = absol.$.parseLocalFloat('123.456,12');
```

### function formatLocalFloat(value: number, opt?: *): number
*absol-acomp/js/utils.js*

```js
var s = absol.$.formatLocalFloat(123456.12, 'vi-VN');//=>"123.456,12"
var s = absol.$.formatLocalFloat(123456.12, {locales:'vi-VN'});//=>"123.456,12"
var s3 = absol.$.formatLocalFloat(123456.12, 'en-US');//=>"123,456.12"
var s4 = absol.$.formatLocalFloat(123456.12);//=>"123.456,12" theo config
```







