
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

* child: có thể là một phần tử đơn, mảng phần tử, chuỗi selector rút gọn, chuỗi HTML hoặc object descriptor. Khi `child` là chuỗi HTML bắt đầu bằng `<`, thư viện sẽ parse trực tiếp thành DOM node.

```js
var article = _({
    tag: 'article.story',
    child: [
        { tag: 'h2', child: { text: 'Tiêu đề' } },
        '<p class="desc">Đoạn mô tả tạo từ HTML string</p>',
        { text: 'Dòng text node nằm cuối' }
    ]
});
```

Một số thẻ bảng được bọc tự động để browser parse đúng:

```js
var row = _('<tr><td>Ô 1</td><td>Ô 2</td></tr>');
var cell = _('<td>Nội dung ô</td>');
```
