
# absol framework



<!-- 

## Entyp css

<div class="entypo uparrow" style="font-size:50px"></div> -->

## absol param


1. Dạng html rút gọn

```js
    var shortHtmlExample = ['div#element-id.class-name-1.class-name-2',
                            'div.class-name-3#element-id.class-name-1.class-name-2',
                            'div',
                            '#element-id',
                            '.class-name1.class-name-2'
                            '.class-name1.class-name-2 div'
                            ];
```

Với dạng HTML rút gọn, ví dụ ***'div#element-id.class-name-1.class-name-2'***,
có thể parse ra object dưới dạng ***{tag:'div', class:'.class-name-1.class-name-2', id:'element-id'}***,
dù có dấu ***space*** hay không thì vẫn hợp lệ, trừ trường hợp tag không nằm ở đầu thì cần ít nhất 1 dấu ***space***,
mặc định ***tag*** nếu trống sẽ là ***div***

2. Dạng đầy đủ

```js
    var fullParam= {
        tag:'calendar',
        id:'element-id',
        attr:{
            class:'.abc .def .ght',
            value :'dd/mm/yyyy',
            style:'display:table;'
            
        },
        extendEvent:['changed', 'show', 'hide'],
        on:{
          click: function(ev){/*sự kiện mặc định*/},
          mouseover:{callback: function(ev){/*cách viết khác*/}, cap:true},
          changed: function(data){/*sự kiện mở rộng*/}
        },
        class: ['popup-calendar', 'calendar-visible'],
        style:{width:'100%', height:'100%'},
        child:['div.class-name-3#element-id.class-name-1.class-name-2', 
               '<div class="abc">Inner Html</div>',
               fullParam_type_object]
        props:{
            value: new Date(),
            muiti: false
        },
    }

```

Trong đó: các trường có thể  ***undefined*** , thứ tự thực hiện  từ trên xuống dưới,
có thể truyền 1 phần tử thay cho việc truyền 1 mảng, ví dụ truyền ***item*** thay cho ***[item]*** vì 1 phần tử

* tag: có thể có hoặc không, mặc định là ***div***

* attr: tương đương với đoạn code sau:

```js
    Object.keys(fullParam.attr).forEach(key => element.setAttribute(key,fullParam.attr[key]));
```

* extendEvent: danh sách các sự kiện(event) mở rộng, sau khi khai báo có thể sử dụng đối tượng tạo ra như
  một EventEmitor, chỉ có thể gọi emit các sự kiện đã báo.

* on: tương đương với đoạn code

```js
    Object.keys(fullParam.on).forEach(key => element.addEventListener(key,fullParam.on[key].callback,!!fullParam.on[key].cap));
    /*tuy nhiên nó cũng là EventEmiter nên có thể hiểu thành*/
    Object.keys(fullParam.on).forEach(key => element.on(key,fullParam.on[key].callback,!!fullParam.on[key].cap));
```

* class: tương đương với

```js
    fullParam.class.forEach(key => element.classList.add(key));
    /* với những element được truy xuất hoặc tạo từ thư viện cũng có thể tương đương với*/
    fullParam.class.forEach(key => element.addClass(key));
```

* style: tương đương với

```js
    Object.keys(fullParam.style).forEach(key => element.style[key] = fullParam.style[key];
    /* với những element được truy xuất hoặc tạo từ thư viện cũng có thể tương đương với*/
    Object.keys(fullParam.style).forEach(key => element.addStyle(key,fullParam.style[key]));
```

* id: tương đương với

```js
    element.attr('id',fullParam.id);
```

* props: tương đương với

```js
    Object.assign(element, fullParam.props);

```



## Basic component

Sử dụng namespace `absol` hoặc

```js
var _  = absol._;
var $  = absol.$;
//Hoặc dùng
absol.buildDom(absolDomParam);
absol.buildSvg(absolSvgParam);
```




### Track Bar

```js
    var trackbar = _({
        tag: 'trackbar', 
        props:{value: 3, leftValue:0, rightValue:10},//defaul: value: 0, leftValue:0, rightValue:1
        on:{
            change:function(event){ 
                console.log(this.value, event.trackbarValue);//both is the same
            }
        }
    });
    body.addChild(trackbar);

    //Tùy chọn kích thước bề ngang
    var trackbar1 = _({
        tag: 'trackbar', 
        style:{
            width:'500px'
        },
        props:{value: 55, leftValue:20, rightValue:100},
        on:{
            change:function(event){ 
                console.log(this.value, event.trackbarValue);//both is the same
            }
        }
    });
    body.addChild(trackbar1);

```





## input kèm đơn vị

```js
var unitinput = _({
    tag: 'unitinput', 
    props:{value: 55, unit:'%'},
    on:{
        change:function(event){ 
            console.log(this.value, event.unitInputValue);//both is the same
        }
    }
});
body.addChild(unitinput);

var unitinput1 = _({
    tag: 'unitinput', 
    style:{
        width:'20em',
        'margin-left':'2em'
    },
    props:{value: 539924895, unit:'%'},
    on:{
        change:function(event){ 
            console.log(this.value, event.unitInputValue);//both is the same
        }
    }
});
body.addChild(unitinput1);
```





### Trackbar có input

```js
var trackbarInput = _({
    tag:'trackbarinput', 
    props:{
        unit:'$',
        leftValue:99,
        rightValue:999,
        valueFixed:0,
        value:50
    }
});
body.addChild(trackbarInput);

var trackbarInput1 = _({
    tag:'trackbarinput', 
    style:{
        width:'38em',
        'margin-left':'5em'
    },
    props:
    // {
    //     unit:'%',
    //     rightValue:100,
    //     valueFixed:0,
    //     value:15
    // },
    {
        unit: "%",
        valueFixed: 0,
        leftValue: 0,
        rightValue: 100,
        value: 25,
        }
});
body.addChild(trackbarInput1);
```

### Text có thể sửa dữ liệu bên trong được

<p>Đây là một đoạn văn mà <span id="editabe-text">phần chữ này có thể sửa được</span>. Phần sau này cố định </p>

<script>
    var holder = $('#editabe-text');
    // console.log(holder.innerHTML);
    var edtText = _({
        tag:'editabletext',
        props:{
            text:holder.innerHTML
        }, 
        on:{
            click:function(){
                this.editing = true;
            }
        }
    });
    holder.selfReplace(edtText);
</script>


```html

<p>Đây là một đoạn văn mà <span id="editabe-text">phần chữ này có thể sửa được</span>. Phần sau này cố định </p>

<script>
    var holder = $('#editabe-text');
    // console.log(holder.innerHTML);
    var edtText = _({
        tag:'editabletext',
        props:{
            text:holder.innerHTML
        }, 
        on:{
            click:function(){
                this.editing = true;
            }
        }
    });
    holder.selfReplace(edtText);
</script>

```

### Checkbox

```js
    var checkbox = _({
        tag:'checkbox',
        style:{
            'font-size':'30px'
        },
        props:{
            text:'Hello'
        }
    }).addTo(body);
    var checkbox1 = _({
        tag:'checkbox',
        style:{
            'font-size':'60px'
        },
        props:{
            text:'chữ bên trái', rev:true
        }
    }).addTo(body);
    var checkbox2 = _({
        tag:'checkbox',
        style:{
            'font-size':'12px'
        },
        props:{
            text:'Hello'
        }
    }).addTo(body);

```


### radio

```js
var radio = _({
    tag:'radio',
    style:{
        'font-size':'30px'
    },
    props:{
        text:'Hello',
       name:'abc'
    }
}).addTo(body);

var radio1 = _({
    tag:'radio',
   
    style:{
        'font-size':'60px'
    },
    props:{
        text:'Hello',
         name:'abc'
    }
}).addTo(body);

var radio2 = _({
    tag:'radio',
    style:{
        'font-size':'12px'
    },
 
    props:{
        text:'Hello',
        name:'abc', rev:true


    }
}).addTo(body);

```



* child: các phần tử có thể là dạng ngắn gọn, HTML code, dạng đầy đủ ,hoặc đối tượng kiểu HTML.
  Việc gắn con vào như thế nào không đơn thuần chỉ là gọi hàm ***appendChild*** mà nó phụ thuộc vào cách
  hiện thực một đối tượng đặc biệt. Ví dụ:

```js
/*calendar kiểu Element*/
/**
*@type{Element}
*/
var calendar = _({
    tag: 'calendar',
    data: { currentDate: value || new Date() },
    props:{ text: "abc"}
    on: {
        changed: function(val) {
            input.dateIimeValue = val;
            value = val;
            res.emit('changed', val);
            ++currentSession;
            res.show = false;
        }
    }
});
var res = _({ tag: 'dropdown',
            data: { anchor: data.anchor || 'auto' }, 
            extendEvent: ['changed' ], 
            child:[{ tag: 'datetime-text-input', attr: { value: 'dd/mm/yyyy', size: '8' }, data: { dateToString:data.dateToString} },
calendar]});
```

* data: có 2 trường hợp xảy ra, data sẽ được đổ vào bên trong đối tượng nếu nó không phải
  kiểu Element cơ bản, ngược lại, sẽ tương đương với:

```js
 Object.keys(fullParam.data).forEach(key => element[key] = fullParam.data[key]));
 /*do vậy, đối vơi 1 số đối tượng có thể viết*/
 _({tag:'a', data:{innerHTML:'123456'}});
```

* props: dữ liệu được truyền vào sau khi đối tượng được tạo ra

## absol.Dom

1. Giới thiệu

Đây là một phần trong thư viện

```js
absol.ShareCreator = {};
absol.ShareDom = new absol.Dom({ creator: absol.ShareCreator });
absol.$ = absol.ShareDom.$;
absol._ = absol.ShareDom._;
```

Để sử dụng ở global, có thể viết:

```js
window._ = absol._;
window.$ = absol.$;
```
> Việc này có thể gây xung đột với jquery

2. Phát triển


```js
/*Không gian riêng biệt cho module*/
absol.calendar = { creator: {} };
absol.calendar.Dom = new absol.Dom({ creator: absol.calendar.creator });

/*Tạo một đối tượng mới và gắn nó vào không gian riêng*/

frame.creator.vscrollbar = function () {
    var _ = frame._;
    var $ = frame.$;
    var res = _({
        tag: 'scrollbar',
        class: 'frame-scroll-bar-v'
    });


    var body = $('body');
    var top0, scrollTop0;
    var mouseMoveEventHandler = function (event) {
        var dy = event.clientY - top0;
        var newScrollTop = scrollTop0 + dy * (res.innerHeight / res.scrollHeight);
        if (newScrollTop + res.scrollHeight > res.innerHeight)
            newScrollTop = res.innerHeight - res.scrollHeight;
        if (newScrollTop < 0) newScrollTop = 0;
        res.scrollTop = newScrollTop;
        //todo
        event.scrollTop = newScrollTop;
        res.emit('scroll', event);
    };

    var finishEventHandler = function (event) {
        body.off('mouseleave', finishEventHandler);
        body.off('mouseup', finishEventHandler);
        body.off('mousemove', mouseMoveEventHandler);
    };

    var mouseDownEventHandler = function (event) {
        var boundRes = res.getBoundingClientRect();
        var boundButton = res.$button.getBoundingClientRect();
        top0 = event.clientY;
        if (event.target == res.$button) {
            scrollTop0 = res.scrollTop;
        }
        else {
            var newScrollTop = Math.map(top0 - boundButton.height / 2, 0, boundRes.height, 0, res.innerHeight);
            if (newScrollTop + res.scrollHeight > res.innerHeight)
                newScrollTop = res.innerHeight - res.scrollHeight;
            if (newScrollTop < 0) newScrollTop = 0;
            res.scrollTop = newScrollTop;
            //todo
            event.scrollTop = newScrollTop;
            scrollTop0 = newScrollTop;
            res.emit('scroll', event);
        }

        body.on('mouseleave', finishEventHandler);
        body.on('mouseup', finishEventHandler);
        body.on('mousemove', mouseMoveEventHandler);

    };


    res.on('mousedown', mouseDownEventHandler, true);


    return res;
};


frame.creator.vscrollbar.prototype.init = function (props) {
    Object.assign(this, props || {});
};

frame.creator.vscrollbar.prototype.updateValue = function () {
    this.$button.addStyle('height', Math.min(this.scrollHeight / this.innerHeight, 1) * 100 + '%');
    this.$button.addStyle('top', this.scrollTop / this.innerHeight * 100 + '%');
};


frame.creator.vscrollbar.property = {
    scrollTop: {
        set: function (value) {
            value = value || 0;
            if (this._scrollTop != value) {
                this._scrollTop = value;
                this.updateValue();
            }
        },
        get: function () {
            return this._scrollTop || 0;
        }
    },

    innerHeight: {
        set: function (value) {
            value = value || 1;
            value = Math.max(value, 1);
            if (this._innerHeight != value) {
                this._innerHeight = value;
                this.updateValue();
            }
        },
        get: function () {
            return this._innerHeight || 1;
        }
    },
    scrollHeight: {
        set: function (value) {
            value = value || 0;
            value = Math.max(value, 0);
            if (this._scrollHeight != value) {
                this._scrollHeight = value;
                this.updateValue();
            }
        },
        get: function () {
            return this._scrollHeight || 0;
        }
    }
};

/*gắn vào không gian để dùng chung*/

absol.ShareCreator['calendar'] = frame.creator.vscrollbar;
```

> Để có thể tạo thêm các đối tượng khác, có thể tham khảo module absol.calendar. Từ bên trong
không gian riêng, muốn lấy 1 đối tượng trong không gian dùng chung cần sử dụng ```absol._```
thay vì ```frame.Dom._``` như ví dụ

## absol._

Tạo một đối tượng DOM

```js
var urlBlob = URL.createObjectURL(xhr.response);
filename = filename || absol.net.getFileNameFromXHR(xhr);
var a = absol._(`<a href="${urlBlob}" style="display:none;"  download="${filename || ''}"></a>`);
absol.$('body').addChild(a);
a.click();
a.selfRemove();

```

## absol.net

### Tải về một file

```js
absol.net.download(
    'https://www.volcanion.cf/Etone/music/Rays Of Light ft. Broiler - [Alan Walker].flac',
    'Rays Of Light ft. Broiler - [Alan Walker].flac',//tên file
    function(pro, total){
        console.log('Tiến trình',pro, total);
    }//có thể có hoặc không
    ).then(
        function(){
        //Thành công
        },
        function(err){
            //Thất bại
        }
    );
```

## Ghi chú

### Lỗi event pointerleave

```js
body.on('mouseleave', mouseFinishEventHandler, true);
body.on('mouseleave', mouseFinishEventHandler);
```
Nếu caption = true, mọi sự kiện mouseleave của con cũng sẽ bị gọi, ngược lại chỉ gọi khi thực sự ra khỏi body

