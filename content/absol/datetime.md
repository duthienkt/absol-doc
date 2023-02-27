# DateTime

## const

Số milisecond trong 1 phút, giờ, ngày
```js
import {MILLIS_PER_DAY, MILLIS_PER_HOUR, MILLIS_PER_MINUTE} from "absol/src/Time/datetime";

//or

absol.datetime.MILLIS_PER_DAY
absol.datetime.MILLIS_PER_HOUR
absol.datetime.MILLIS_PER_MINUTE
```

Lấy đinh dạng ngày theo location, hoặc lấy danh sách location sử dụng 1 định dạng

```js
import {language2LocalDateFormat, dateFormat2LocationList, dateFormatList} from "absol/src/Time/datetime";
//or 
var language2LocalDateFormat  = absol.datetime.language2LocalDateFormat;
var dateFormat2LocationList  = absol.datetime.dateFormat2LocationList;
var dateFormatList =  absol.datetime.dateFormatList;

var VNFormat = language2LocalDateFormat['vi-VN'];
var locationWithDDMMYYFormat = dateFormat2LocationList['dd/mm/yyyy'];

```

Định dạng được thiết lập sẵn của hệ thống:

```js
import {LOCAL_DATE_FORMAT, LOCAL_DATE_TIME_FORMAT} from "absol/src/Time/datetime";

absol.datetime.LOCAL_DATE_FORMAT
absol.datetime.LOCAL_DATE_TIME_FORMAT
```




