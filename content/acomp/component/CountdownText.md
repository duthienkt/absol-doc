# CountdownText

## Props

| name        |   type               | desc                                    |
|-------------|----------------------|--------------------------------------------|
| format      |  string, function(s:number)=>string| Định dạng           |
| remainSecond| number, null| Thời gian còn lại, tính bằng giây, số thực|
| finishTime  | Date, number | thời gian kết thúc, dạng number tính bằng milis |
| fps         | number       | tốc độ cập nhật (frame/sec), mặc định là 5 |


### format

| value | demo |
|-------|-----------------|
| "HH:mm" |   <h4 class="tag-countdowntext" data-format="HH:mm"></h4> |
| "HH:mm:ss" |   <span class="tag-countdowntext" data-format="HH:mm:ss"></span> |
| "D ngày HH:mm:ss .cs" |   <span class="tag-countdowntext" data-format="D ngày HH:mm:ss .cs" data-remain-hour="50"></span> |
| "HH giờ mm phút ss giây" |   <span style="font-size: 20px" class="tag-countdowntext" data-format="HH giờ mm phút ss giây" data-remain-hour="50"></span> |

Trong đó:

- H, HH, hh : giờ
- M, MM, mm : phút
- S, SS, ss :  giây
- cs : 1/100 giây
- ms : 1/100 giây(milisecond)


> định dạng này không liên quan định dạng chuẩn của DateTime

### example code

Mặc định, `countdowntext` tương đương với 1 thẻ `span`
```js
	
 var countdownText = _({
   tag: 'countdowntext',
   style: {
     fontFamily: 'Consolas',//tuỳ chỉnh style bất kì
     fontSize: '30px'
   },
   props: {
     finishTime: absol.datetime.beginOfDay(absol.datetime.nextDate(new Date())),
     format: 'D ngày HH:mm:ss .cs',
     fps: 3
   },
   on:{
   	finish: function(){
      //khi kết thúc
    },
    update: function(){//khi chữ thay đổi
    }
   }
 });
```

Tuy nhiên ta có thể sử dụng bằng 1 thẻ bất kì

```js
var countdownText = _({
  elt:'h3',
  tag: 'countdowntext',
  props: {
    finishTime: absol.datetime.beginOfDay(absol.datetime.nextDate(new Date())),
    format: 'D ngày HH:mm:ss .cs',
    fps: 3
  }
});
```

Hoặc biến 1 thẻ có sẵn thành countdowntext

```js
var oldElt = $('span.count-down-text-place-holder');//thẻ span có sẵn

var countdownText = _({
  elt: oldElt,
  tag: 'countdowntext',
  props: {
    finishTime: absol.datetime.beginOfDay(absol.datetime.nextDate(new Date())),
    format: 'D ngày HH:mm:ss .cs',
    fps: 3
  }
});
```






