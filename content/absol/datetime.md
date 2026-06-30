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

#### `function formartDateString(date, format)`

* Hàm tương thích ngược do viết sai chính tả tên (`formart...`).
* Khi gọi sẽ log cảnh báo: `spelled incorrectly: formartDateString`.
* Kết quả trả về giống `formatDateString(date, format)`.
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

#### `function isDayOffsetInTimeRange24Gmt(range, dayOffset)`

* Kiểm tra `dayOffset` có nằm trong khoảng thời gian 24 giờ hay không (hỗ trợ khoảng qua ngày).
* **Parameters:**
    * `range` — `null|{dayOffset?: number, duration?: number}` —
    * `dayOffset` — `number=` — nếu bỏ qua sẽ lấy thời điểm hiện tại.
* **Returns:** `boolean` —

#### `function formatTimeRange24(range, opt)`

* **Parameters:**
    * `{null|{dayOffset?:` — duration?: number}}range
    * `opt` —

#### `function getDefaultFirstDayOfWeek()`

* Trả về giá trị mặc định của ngày đầu tuần (0-6).
* **Returns:** `number`

#### `function setDefaultFirstDayOfWeek(value)`

* Thiết lập ngày đầu tuần mặc định cho các hàm liên quan đến tuần.
* **Parameters:**
    * `value` — `number`

#### `function sameDateInUTC(value)`

* Tạo một đối tượng `Date` mới tại 00:00:00 UTC ứng với cùng ngày/tháng/năm của `value` theo local time.
* **Parameters:**
    * `value` — `Date`
* **Returns:** `Date`

#### `function monthOfTwoDate(date0, date1)`

* Tính khoảng cách giữa 2 ngày theo đơn vị tháng (có thể là số thập phân).
* **Parameters:**
    * `date0` — `Date`
    * `date1` — `Date`
* **Returns:** `number`

#### `function implicitDate(o)`

* Chuyển đổi dữ liệu đầu vào (`Date`, `number`, `string`) sang `Date` nếu có thể, ngược lại trả về `null`.
* **Parameters:**
    * `o` — `Date|number|string`
* **Returns:** `Date|null`

#### `function isTimeRange24Null(range)`

* Kiểm tra một `TimeRange24Data` có phải là giá trị rỗng hay không.
* **Parameters:**
    * `range` — `null|{dayOffset?: number, duration?: number}`
* **Returns:** `boolean`

#### `function getTimeRangeFromStep(date, type, n)`

* Lấy khoảng thời gian theo bước (`date`, `week`, `month`, `quarter`, `year`, `last_7_days`).
* **Parameters:**
    * `date` — `Date`
    * `type` — `string`
    * `n` — `number`
* **Returns:** `{startdate: Date, expireddate: Date}`

#### `function getFormatDateFromLevel(level)`

* Trả về chuỗi định dạng ngày theo cấp độ (`date`, `week`, `month`, `quarter`, `year`).
* **Parameters:**
    * `level` — `"date"|"week"|"month"|"quarter"|"year"`
* **Returns:** `string`

#### `function getDateFormatLevelName(level)`

* Trả về tên hiển thị tiếng Việt của cấp độ thời gian.
* **Parameters:**
    * `level` — `"date"|"week"|"month"|"quarter"|"year"`
* **Returns:** `string`

#### `function getSupportedDateFormatLevels()`

* Trả về danh sách cấp độ định dạng ngày được hỗ trợ.
* **Returns:** `Array<string>`

---

## isDayOffsetInTimeRange24Gmt

```js
isDayOffsetInTimeRange24Gmt(range, dayOffset)
```

Kiểm tra xem một giá trị `dayOffset` (số mili giây tính từ đầu ngày) có nằm trong khoảng thời gian 24 giờ (`TimeRange24Data`) hay không. Hàm này hỗ trợ các khoảng thời gian vượt qua nửa đêm (qua ngày mới).

- **range**: `{ dayOffset: number, duration: number } | null` – Khoảng thời gian 24 giờ, có thể null (ý nghĩa là null range, luôn trả về false).
- **dayOffset**: `number` (tùy chọn) – Số mili giây tính từ đầu ngày. Nếu không truyền, mặc định là thời điểm hiện tại (theo GMT).

### Giá trị trả về
- `true` nếu `dayOffset` nằm trong khoảng thời gian 24 giờ được chỉ định bởi `range` (bao gồm cả trường hợp khoảng thời gian vượt qua nửa đêm).
- `false` nếu không nằm trong khoảng hoặc `range` là null.

### Lưu ý
- Hàm sử dụng khoảng nửa mở `[start, end]`.
- Tự động xử lý các khoảng thời gian vượt qua nửa đêm (ví dụ: từ 22:00 đến 02:00 hôm sau).

### Ví dụ
```js
const range = { dayOffset: 22 * 3600000, duration: 4 * 3600000 }; // 22:00 đến 02:00 hôm sau
isDayOffsetInTimeRange24Gmt(range, 23 * 3600000); // true (23:00)
isDayOffsetInTimeRange24Gmt(range, 1 * 3600000);  // true (01:00)
isDayOffsetInTimeRange24Gmt(range, 3 * 3600000);  // false (03:00)
```