## Cách dùng


### Tạo

```js
import Alarm from 'absol/src/Time/Alarm';
//hoặc
var Alarm = absol.Alarm;

var deadlineAlarm = new Alarm(new Date(2022, 11, 1, 3, 30), function(){
	alert("Deadline!!!");
});


var timestame = new Date(2022, 11, 1, 3, 30).getTime() + 3600000;
var deadlineAlarm2 = new Alarm(timestame, function(arg1, arg2){
	alert("Deadline!!!", arg1, arg2);
}, "argument 1", "argument 2");

```

> Kể từ param thứ 3, chúng sẽ được truyền vào callback khi gọi

### Tạm dừng

```js
deadlineAlarm.pause();
```



### Chạy tiếp sau khi tạm dừng

```js
deadlineAlarm.start();
```

> Trong trường hợp alarm chưa bị hủy, thời gian đã trễ thì callback sẽ được gọi ngay thời điểm đó

### Hủy bỏ

```js
deadlineAlarm.kill();
```

