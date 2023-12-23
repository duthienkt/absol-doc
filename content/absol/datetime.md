## DateTime

### const

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




### format

Các token cơ bản:
- d, dd: ngày
- M, MM:  tháng
- y, yy, yyyy: năm
- h, hh: giờ theo định dạng 12 tiếng
- H, HH: giờ theo định dạng 24 tiếng
- m, mm: phút
- s, ss: giây

### Danh sách hàm trong `absol.datetime`


#### `function ddmmyyyy(date)`

* format mặc định dd/MM/yyyy
* **Parameters:** `date` — `Date` 
* **Returns:** `String` 

#### `function yyymmdd(date)`

* format mặc định yyyy/MM/dd
* **Parameters:** `date` — `Date` 
* **Returns:** `String` 

#### `function formatDateString(date, format)`

* format ngày
* **Parameters:**
    * `date` — `Date` —
    * `format` — `String=` —
* **Returns:** `String` 

#### `function parseDateString(text, format)`

* **Parameters:**
    * `text` — `String` —
    * `format` — `String` —
* **Returns:** `Date` —

#### `function addDate(date, delta, gmt)`

* **Parameters:**
    * `date` —
    * `delta` — `number` — - must be a integer
    * `gmt` — `boolean=` —
* **Returns:** `Date` —

#### `function prevDate(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `boolean=` —
* **Returns:** `Date` —

#### `function nextDate(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `boolean=` —
* **Returns:** `Date` —

#### `function weekIndexOf(date, gmt, startDayOfWeek)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `boolean=` —
    * `startDayOfWeek` — `number=` —
* **Returns:** `number` —

#### `function weekInYear(year, weekIdx, gmt, startDayOfWeek)`

* **Parameters:**
    * `year` — `number` —
    * `weekIdx` — `number` —
    * `gmt` — `boolean=` —
    * `startDayOfWeek` — `number=` —
* **Returns:** `Date` —

#### `function beginOfSecond(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `Boolean=` — default:false
* **Returns:** `Date` — date at xx:xx:xx:00

#### `function beginOfMinute(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `Boolean=` — default:false
* **Returns:** `Date` — date at xx:xx:00

#### `function beginOfDay(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `Boolean=` — default:false
* **Returns:** `Date` — date at 00:00

#### `function beginOfHour(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `Boolean=` — default:false
* **Returns:** `Date` — date at xx:00

#### `function beginOfWeek(date, gmt, startDayOfWeek)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `Boolean=` — default:false
    * `startDayOfWeek` — `number=` — default:0
* **Returns:** `Date` — date at 00:00

#### `function addWeek(date, delta, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `delta` — `number` —
    * `gmt` — `boolean=` —

#### `function nextWeek(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `boolean=` —
* **Returns:** `Date` —

#### `function prevWeek(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `boolean=` —
* **Returns:** `Date` —

#### `function beginOfMonth(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `Boolean=` — default:false
* **Returns:** `Date` — date at 00:00 AM

#### `function beginOfQuarter(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `Boolean=` — default:false
* **Returns:** `Date` — date at 00:00 AM

#### `function addQuarter(date, delta, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `delta` — `number=` —
    * `gmt` — `boolean=` —

#### `function nextQuarter(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `boolean=` —
* **Returns:** `Date` —

#### `function prevQuarter(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `boolean=` —
* **Returns:** `Date` —

#### `function beginOfYear(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `Boolean=` — default:false
* **Returns:** `Date` — date at 00:00 AM

#### `function addYear(date, delta, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `delta` — `number` —
    * `gmt` — `Boolean=` — default:false
* **Returns:** `Date` — date at 00:00 AM

#### `function nextYear(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `Boolean=` — default:false
* **Returns:** `Date` — date at 00:00 AM

#### `function prevYear(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `Boolean=` — default:false
* **Returns:** `Date` — date at 00:00 AM

#### `function compareDate(date0, date1, gmt)`

* **Parameters:**
    * `date0` — `Date` —
    * `date1` — `Date` —
    * `gmt` — `Boolean=` — default:false
* **Returns:** `number` —

#### `function compareMonth(date0, date1, gmt)`

* **Parameters:**
    * `date0` — `Date` —
    * `date1` — `Date` —
    * `gmt` — `Boolean=` — default:false
* **Returns:** `number` —

#### `function compareYear(date0, date1, gmt)`

* **Parameters:**
    * `date0` — `Date` —
    * `date1` — `Date` —
    * `{boolean=}gmt` —
* **Returns:** `number` —

#### `function addMonth(date, delta, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `delta` — `number` —
    * `gmt` — `boolean=` —
* **Returns:** `Date` —

#### `function addMonthKeepDate(date, delta, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `delta` — `number` —
    * `gmt` — `boolean=` —
* **Returns:** `Date` —

#### `function addMonthKeepDateTime(date, delta, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `delta` — `number` —
    * `gmt` — `boolean=` —
* **Returns:** `Date` —

#### `function nextMonth(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `boolean=` —
* **Returns:** `Date` —

#### `function prevMonth(date, gmt)`

* **Parameters:**
    * `date` — `Date` —
    * `gmt` — `boolean=` —
* **Returns:** `Date` —

#### `function daysInMonth(year, month)`

* **Parameters:**
    * `year` — `Number` —
    * `month` — `Number` —
* **Returns:** `Number` —

#### `function parseDateTime(text, format, opt)`

* **Parameters:**
    * `text` —
    * `format` — d, M, Y, Q
    * `opt` — `*=` —
* **Returns:** `Date` —

#### `function formatDateTime(date, format, opt)`

* **Parameters:**
    * `date` — `Date` —
    * `format` — `string` —
    * `opt` — `*=` —
* **Returns:** `string` —

#### `function formatTimeRange24(range, opt)`

* **Parameters:**
    * `{null|{dayOffset?:` — duration?: number}}range
    * `opt` — 