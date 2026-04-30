
# absol framework


## class AElement




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

* text: nếu có trường này thì kết quả trả về là một `TextNode`, không tạo `Element`

```js
    var helloText = _({ text: 'Xin chào absol' });
    document.body.appendChild(helloText);
```

* props: tương đương với

```js
    Object.assign(element, fullParam.props);

```

* once: đăng ký sự kiện chạy đúng một lần, có cùng cú pháp với `on`

```js
    var button = _({
        tag: 'button',
        child: { text: 'Chỉ log 1 lần' },
        once: {
            click: function () {
                console.log('Sự kiện này chỉ chạy một lần');
            }
        }
    });
```

* elt: dùng lại một node có sẵn rồi tiếp tục gán `attr`, `class`, `style`, `on`, `props`

```js
    var nativeButton = document.createElement('button');
    nativeButton.textContent = 'Nút gốc';

    var upgradedButton = _({
        elt: nativeButton,
        class: 'primary-btn rounded',
        style: {
            color: 'white',
            background: '#2d6a4f'
        },
        on: {
            click: function () {
                console.log('Đã attach API của absol vào element có sẵn');
            }
        }
    });
```

* class: ngoài mảng còn có thể truyền một chuỗi có khoảng trắng, thư viện sẽ tự tách thành nhiều class

```js
    var box = _({
        class: 'card shadow-lg p-2'
    });
```

* tag: ngoài chuỗi tên thẻ, có thể truyền trực tiếp hàm creator hoặc các creator đặc biệt đã có sẵn như `svg`, `attachhook`

```js
    var svgRoot = _({
        tag: 'svg',
        attr: {
            viewBox: '0 0 100 100'
        }
    });
```

Creator `svg` ở đây dùng để tạo phần tử SVG gốc. Nếu cần dựng đầy đủ cây SVG theo namespace, nên dùng `absol.buildSvg(...)` hoặc module SVG chuyên biệt.

```js
    var hook = _({
        tag: 'attachhook',
        once: {
            attached: function () {
                console.log('Hook đã được gắn vào document.body');
            }
        }
    });

    body.addChild(hook);
```




## absol.$ và absol.$$

`absol.$(query, root)` tìm phần tử đầu tiên khớp với JSPath selector. `absol.$$(query, root)` trả về tất cả phần tử khớp dưới dạng mảng.

```js
var firstItem = absol.$('.menu-item', document.body);
var allItems = absol.$$('.menu-item', document.body);

allItems.forEach(function (item) {
    item.addClass('is-ready');
});
```

Nếu tham số đầu tiên đã là DOM node thì `absol.$` chỉ attach API của absol và trả lại chính node đó:

```js
var externalNode = document.querySelector('#app');
var app = absol.$(externalNode);
app.addStyle('min-height', '100vh');
```



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

var frame = absol.calendar;
var _ = frame.Dom._;
var $ = frame.Dom.$;

/*Tạo một creator theo cú pháp mới, đầy đủ*/

function VScrollbar() {
    this.$button = $('.scrollbar-button', this);
    //các hàm eventHandler sẽ tự động bind với con trỏ this
    this.on('draginit', this.eventHandler.dragInit, true)
        .on('drag', this.eventHandler.drag, true)
        .on('dragend', this.eventHandler.dragEnd, true);
}

VScrollbar.tag = 'vscrollbar';

VScrollbar.render = function (data, option, dom) {
    // data  : lấy từ field data của descriptor
    // option: toàn bộ descriptor đang truyền vào frame.Dom._(...)
    // dom   : chính instance Dom hiện tại, tương đương frame.Dom
    // có thể dùng _ ở trên hoặc lấy từ dom._ được truyền vào, có thể nó thuộc 2 đối tượng dom khác nhau
    return dom._({
        tag: 'scrollbar',
        class: ['frame-scroll-bar-v'].concat(data && data.extraClass || []),
        child: '.scrollbar-button'
    }, true);// true: kế thừa
};

VScrollbar.prototype.updateValue = function () {
    // ... cập nhật vị trí và kích thước nút kéo
};

VScrollbar.prototype.updateStatus = function () {
    // ... thêm hoặc bỏ class theo trạng thái overflow
};


VScrollbar.eventHandler = {};

VScrollbar.eventHandler.dragInit = function (event) {
    // ... lấy vị trí bắt đầu kéo, tính innerOffset ban đầu, emit scroll nếu cần
};

VScrollbar.eventHandler.drag = function (event) {
    // ... cập nhật innerOffset trong lúc kéo rồi emit('scroll', event)
};

VScrollbar.eventHandler.dragEnd = function () {
    this.removeClass('absol-active');
};

VScrollbar.property = {
    innerOffset: {
        set: function (value) {
            // ... gán giá trị mới và gọi updateValue()
        },
        get: function () {
            return this._innerOffset || 0;
        }
    },

    outerHeight: {
        set: function (value) {
            // ... chuẩn hóa giá trị, cập nhật giao diện và trạng thái
        },
        get: function () {
            return this._outerHeight || 0;
        }
    },

    innerHeight: {
        set: function (value) {
            // ... chuẩn hóa giá trị, cập nhật giao diện và trạng thái
        },
        get: function () {
            return this._innerHeight || 1;
        }
    }
};

frame.Dom.install(VScrollbar);

var scrollbar = frame.Dom._({
    tag: 'vscrollbar',
    data: {
        extraClass: ['dark-scrollbar']
    },
    props: {
        outerHeight: 320,
        innerHeight: 960,
        innerOffset: 120
    }
});
```

Trong ví dụ trên, phần quan trọng là cấu trúc creator mới gồm 4 lớp ý nghĩa: hàm khởi tạo, `render`, `eventHandler`, và `property`. Hàm `render(data, option, dom)` được gọi trước để dựng phần khung DOM; `data` lấy từ field `data`, `option` là toàn bộ descriptor truyền vào, còn `dom` là instance `Dom` đang tạo component. Các đoạn `// ...` là logic chi tiết có thể thay đổi theo từng component.

> Để có thể tạo thêm các đối tượng khác, có thể tham khảo module absol.calendar. Từ bên trong
không gian riêng, muốn lấy 1 đối tượng trong không gian dùng chung cần sử dụng ```absol._```
thay vì ```frame.Dom._```. Với creator mới, phần dựng cấu trúc nên đặt ở `render`, xử lý sự kiện gom vào `eventHandler`, còn state expose ra ngoài đặt trong `property`.

### Cài thêm creator bằng `install`

`Dom.prototype.install()` nhận nhiều kiểu dữ liệu khác nhau: một hàm creator, mảng creator, object chứa creator, hoặc một `Dom` khác.

```js
//creator đơn giản nhất
function Badge() {
    return _({
        tag: 'span.badge',
        child: { text: 'NEW' }
    });
}

Badge.tag = 'badge';

absol.ShareDom.install(Badge);

var badge = _({ tag: 'badge' });
```

```js
absol.ShareDom.install({
    greenbox: function () {
        return _({
            tag: 'div',
            class: 'green-box'
        });
    }
});

var greenBox = _({ tag: 'greenbox' });
```

Có thể kiểm tra creator đã được gắn hay chưa bằng `require()`:

```js
var badgeCreator = absol.ShareDom.require('badge');
console.log(!!badgeCreator);
```

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

Ngoài object descriptor, `absol._` còn nhận trực tiếp các kiểu sau:

```js
var fromShortSyntax = absol._('button#save-btn.primary');
var fromHtmlString = absol._('<button class="accent">Lưu</button>');
var fromTextNode = absol._({ text: 'Một text node độc lập' });
```

Nếu truyền vào một DOM node có sẵn, `absol._` sẽ attach thêm API của absol thay vì tạo node mới:

```js
var rawDiv = document.createElement('div');
rawDiv.innerHTML = 'Created by document.createElement';

var wrappedDiv = absol._(rawDiv);
wrappedDiv.addClass('mounted-by-absol');
```

## absol.AElement

`AElement` là lớp nền được attach vào hầu hết DOM element do `absol._(...)` tạo ra hoặc `absol.$(...)` truy xuất ra. Nó mở rộng `HTMLElement` bằng các hàm tiện ích để thao tác DOM, style, class, attribute và event theo kiểu chain.

Không dùng `new AElement()` trực tiếp. Cách dùng phổ biến là lấy một element từ `absol._(...)` hoặc `absol.$(...)`, rồi gọi các method của `AElement` trên chính element đó.

```js
var card = absol._({
    tag: 'div.card',
    child: { text: 'Hello AElement' }
});

card
    .addClass('is-active')
    .addStyle({ color: '#134074', padding: '12px' })
    .attr('data-state', 'ready')
    .addTo(document.body);
```

Các method thường dùng:

* `attr(name)` | Params: `name: string` | Tác dụng: lấy giá trị của một attribute.
* `attr(name, value)` | Params: `name: string`, `value: any` | Tác dụng: gán attribute; nếu `value === null` hoặc `undefined` thì xóa attribute đó.
* `attr(object)` | Params: `object: Object` | Tác dụng: gán nhiều attribute một lần.
* `defineAttribute(name, descriptor)` | Params: `name: string`, `descriptor: {get, set, remove}` | Tác dụng: khai báo attribute mở rộng với logic get/set/remove riêng.
* `defineAttributes(descriptors)` | Params: `descriptors: Object` | Tác dụng: khai báo nhiều attribute mở rộng cùng lúc.
* `addStyle(name, value)` | Params: `name: string`, `value: string` | Tác dụng: gán một CSS property.
* `addStyle(styles)` | Params: `styles: Object` | Tác dụng: gán nhiều CSS property một lần.
* `removeStyle(name)` | Params: `name: string` | Tác dụng: xóa một CSS property khỏi element.
* `removeStyle(names)` | Params: `names: string[] | Object` | Tác dụng: xóa nhiều CSS property.
* `addClass(className)` | Params: `className: string | string[]` | Tác dụng: thêm một hoặc nhiều class.
* `removeClass(className)` | Params: `className: string | string[]` | Tác dụng: xóa một hoặc nhiều class.
* `hasClass(className)` | Params: `className: string` | Tác dụng: kiểm tra element có chứa class hay không.
* `addChild(child)` | Params: `child: Node | Node[]` | Tác dụng: thêm một hoặc nhiều node con vào cuối element.
* `addTo(parent)` | Params: `parent: Node` | Tác dụng: gắn chính element hiện tại vào `parent`.
* `selfRemove()` | Params: không có | Tác dụng: tự gỡ element khỏi parent hiện tại.
* `selfReplace(newNode)` | Params: `newNode: Node` | Tác dụng: thay element hiện tại bằng node khác.
* `clearChild()` | Params: không có | Tác dụng: xóa toàn bộ node con.
* `addChildBefore(newItem, beforeNode)` | Params: `newItem: Node`, `beforeNode: Node` | Tác dụng: chèn `newItem` vào trước `beforeNode`.
* `addChildAfter(newItem, afterNode)` | Params: `newItem: Node`, `afterNode?: Node` | Tác dụng: chèn `newItem` sau `afterNode`; nếu không truyền `afterNode` thì chèn lên đầu.
* `findChildAfter(node)` | Params: `node: Node` | Tác dụng: lấy node con đứng ngay sau `node`.
* `findChildBefore(node)` | Params: `node: Node` | Tác dụng: lấy node con đứng ngay trước `node`.
* `getComputedStyleValue(name)` | Params: `name: string` | Tác dụng: đọc giá trị computed style của một CSS property.
* `getFontSize()` | Params: không có | Tác dụng: lấy font-size hiện tại dưới dạng số.
* `getBoundingRecursiveRect(depth)` | Params: `depth?: number` | Tác dụng: lấy bounding rect bao toàn bộ cây con tới độ sâu chỉ định.
* `isDescendantOf(parent)` | Params: `parent: Node` | Tác dụng: kiểm tra element có nằm bên trong `parent` hay không.
* `getCSSRules()` | Params: không có | Tác dụng: lấy các CSS rule nội bộ đang match với element.
* `afterDisplayed(timeout)` | Params: `timeout?: number` | Tác dụng: trả về `Promise`, resolve khi element có kích thước hiển thị khác 0.

Điểm cần nhớ: `AElement.prototype.init(props)` sẽ được `Dom._(...)` gọi sau khi element được tạo xong, nên nhiều component nhận dữ liệu khởi tạo thông qua field `props`.


## Ghi chú

### Lỗi event pointerleave

```js
body.on('mouseleave', mouseFinishEventHandler, true);
body.on('mouseleave', mouseFinishEventHandler);
```
Nếu caption = true, mọi sự kiện mouseleave của con cũng sẽ bị gọi, ngược lại chỉ gọi khi thực sự ra khỏi body



