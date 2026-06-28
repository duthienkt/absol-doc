
# Variables Management

## class VarScope

`VarScope` là lớp quản lý biến theo cơ chế scope lồng nhau (parent scope).
Mỗi biến được lưu dưới dạng `Ref` hoặc `Const`, hỗ trợ khai báo, đọc/ghi, thu hồi và tra cứu lên scope cha.

### Import

```js
import VarScope from "absol/src/AppPattern/VarScope";
```

### Constructor

#### `new VarScope(parent)`

- **parent**: `VarScope=` scope cha, mặc định `null`.

---

### Methods

#### `revoke(name): VarScope`

Xóa biến khỏi scope hiện tại.

- **name**: `string`
- **Returns**: `VarScope`

#### `isDeclared(name): boolean`

Kiểm tra biến có được khai báo trong scope hiện tại hay chưa (không kiểm tra scope cha).

- **name**: `string`
- **Returns**: `boolean`

#### `declareRef(name, ref): VarScope`

Khai báo trực tiếp một biến từ đối tượng `Ref`.

- **name**: `string`
- **ref**: `Ref`
- **Returns**: `VarScope`

#### `declareConst(name, value, force, type): VarScope`

Khai báo hằng số (`Const`) trong scope hiện tại.

- **name**: `string`
- **value**: `*`
- **force**: `boolean=` nếu `true` có thể ghi đè biến đã có.
- **type**: `*=` thông tin kiểu dữ liệu (tuỳ context dùng).
- **Returns**: `VarScope`

#### `declareVar(name, value, force, type): VarScope`

Khai báo biến thay đổi được (`Ref`) trong scope hiện tại.

- **name**: `string`
- **value**: `*`
- **force**: `boolean=` nếu `true` có thể ghi đè biến đã có.
- **type**: `*=` thông tin kiểu dữ liệu (tuỳ context dùng).
- **Returns**: `VarScope`

#### `declare(name, initValue, force): VarScope`

Alias của `declareVar(name, initValue, force)`.

- **name**: `string`
- **initValue**: `*`
- **force**: `boolean=`
- **Returns**: `VarScope`

#### `get(name): *`

Lấy giá trị biến theo chuỗi scope: scope hiện tại -> scope cha.

- **name**: `string`
- **Throws**: lỗi nếu biến chưa được khai báo.

#### `set(name, value): void`

Gán giá trị cho biến tìm được theo chuỗi scope.

- **name**: `string`
- **value**: `*`
- **Throws**: lỗi nếu biến không tồn tại hoặc là `const`.

#### `findScope(name): VarScope|null`

Tìm scope gần nhất đang chứa biến `name`.

- **name**: `string`
- **Returns**: `VarScope|null`

#### `findRef(name): Ref|Const|null`

Tìm `Ref/Const` của biến theo chuỗi scope.

- **name**: `string`
- **Returns**: `Ref|Const|null`

#### `makeFlattenedScope(): VarScope`

Tạo scope mới chứa toàn bộ biến đã resolve từ chain cha -> con.
Biến ở scope con sẽ override biến trùng tên từ scope cha.

- **Returns**: `VarScope`

---

### Simple example

```js
import VarScope from "absol/src/AppPattern/VarScope";

var globalScope = new VarScope();
globalScope.declareConst("PI", 3.14);
globalScope.declareVar("x", 10);

var localScope = new VarScope(globalScope);
localScope.declareVar("y", 20);

console.log(localScope.get("x")); // 10 (lấy từ parent)
console.log(localScope.get("y")); // 20 (lấy từ local)

localScope.set("x", 15); // cập nhật biến ở parent scope
console.log(globalScope.get("x")); // 15

console.log(localScope.findScope("x") === globalScope); // true
console.log(localScope.isDeclared("x")); // false (vì x không ở local data)
console.log(localScope.isDeclared("y")); // true
```

## class Ref

`Ref` là wrapper cho một giá trị có thể thay đổi, thường dùng cùng `VarScope` cho biến kiểu mutable.

### Import

```js
import Ref from "absol/src/AppPattern/Ref";
```

### Constructor

#### `new Ref(value, type)`

- **value**: `T` giá trị khởi tạo.
- **type**: `*=` metadata kiểu dữ liệu (tuỳ context).

### Methods

#### `get(): T`

Lấy giá trị hiện tại.

#### `set(value): void`

Cập nhật giá trị.

- **value**: `T`

#### `valueOf(): T`

Trả về giá trị hiện tại (hỗ trợ ép kiểu ngầm định).

#### `toString(): string`

Trả về chuỗi của giá trị hiện tại.

### Simple example

```js
import Ref from "absol/src/AppPattern/Ref";

var score = new Ref(5, "number");
console.log(score.get()); // 5

score.set(8);
console.log(score.get());      // 8
console.log(score.valueOf());  // 8
console.log(score.toString()); // "8"
```


## class Const

`Const` là wrapper cho một giá trị chỉ đọc, không có phương thức `set`.
Lớp này dùng để đại diện biến hằng trong `VarScope`.

### Import

```js
import Const from "absol/src/AppPattern/Const";
```

### Constructor

#### `new Const(value, type)`

- **value**: `T` giá trị khởi tạo.
- **type**: `*=` metadata kiểu dữ liệu (tuỳ context).

### Methods

#### `get(): T`

Lấy giá trị hằng.

#### `valueOf(): T`

Trả về giá trị hằng (hỗ trợ ép kiểu ngầm định).

#### `toString(): string`

Trả về chuỗi của giá trị hằng.

### Simple example

```js
import Const from "absol/src/AppPattern/Const";

var pi = new Const(3.14, "number");
console.log(pi.get());       // 3.14
console.log(pi.valueOf());   // 3.14
console.log(pi.toString());  // "3.14"

// pi.set(4); // lỗi: Const không có method set
```


# State Management

Thứ tự class bên dưới được sắp theo hướng kế thừa từ nhỏ đến lớn (base -> derived).

## class ContextManager

`ContextManager` là kho key-value dùng để chia sẻ dữ liệu context giữa các `Context`.

### Import

```js
import ContextManager from "absol/src/AppPattern/ContextManager";
```

### Constructor

#### `new ContextManager()`

### Methods

#### `get(key): *`

- **key**: `string`

#### `set(key, value): ContextManager`

- **key**: `string`
- **value**: `*`

#### `assign(obj): ContextManager`

Gộp nhiều cặp key-value cùng lúc.

- **obj**: `Object`

#### `remove(key): ContextManager`

- **key**: `string`

#### `contains(key): boolean`

- **key**: `string`

### Simple example

```js
import ContextManager from "absol/src/AppPattern/ContextManager";

var cm = new ContextManager();
cm.set("theme", "light").set("lang", "vi");

console.log(cm.get("theme")); // "light"
console.log(cm.contains("lang")); // true

cm.remove("lang");
console.log(cm.contains("lang")); // false
```

## class Context

`Context` là lớp base cho vòng đời (start/pause/resume/stop/destroy) và cơ chế kế thừa context qua `parent`.

### Import

```js
import Context from "absol/src/AppPattern/Context";
```

### Constructor

#### `new Context()`

### Properties

- **state**: `"CREATE"|"PAUSE"|"RUNNING"|"STANDBY"|"DIE"|"STOP"`
- **parent**: `Context|null`
- **ctxMng**: `ContextManager|null`

### Methods

#### `getContext(key): *`

Tìm giá trị context theo chuỗi parent.

#### `setContext(key, value): *`

Set context qua `getContextManager()` gần nhất.

#### `getContextManager(): ContextManager`

Tìm `ContextManager` gần nhất theo chain parent.

#### `attach(parent): void`

Gắn context vào parent mới (có `stop()` trước khi attach).

#### `detach(): void`

Tách khỏi parent và gọi `onDetached`.

#### `start(standBy): void`

Chuyển state sang `STANDBY` rồi `RUNNING` nếu không ở chế độ chờ.

#### `resume(): void`

Đưa state sang `RUNNING`.

#### `pause(): void`

Đưa state `RUNNING` sang `PAUSE`.

#### `stop(): void`

Dừng context, state sang `STOP`.

#### `destroy(): void`

Hủy context, state sang `DIE`.

### Lifecycle hooks

- `onStart`
- `onResume`
- `onPause`
- `onStop`
- `onDestroy`
- `onAttached`
- `onDetached`

Mặc định các hook là `noop`, có thể override trong class con.

### Simple example

```js
import Context from "absol/src/AppPattern/Context";

var ctx = new Context();
ctx.onStart = function () { console.log("started"); };
ctx.onResume = function () { console.log("running"); };
ctx.onPause = function () { console.log("paused"); };

ctx.start();   // started + running
ctx.pause();   // paused
ctx.resume();  // running
ctx.stop();
ctx.destroy();
```

## class GrandContext extends Context

`GrandContext` là `Context` có sẵn `ctxMng` riêng để làm root context local.

### Import

```js
import GrandContext from "absol/src/AppPattern/GrandContext";
```

### Constructor

#### `new GrandContext()`

Tự tạo `this.ctxMng = new ContextManager()`.

### Simple example

```js
import GrandContext from "absol/src/AppPattern/GrandContext";

var gctx = new GrandContext();
gctx.setContext("apiBase", "/v1");
console.log(gctx.getContext("apiBase")); // "/v1"
```

## class Fragment extends GrandContext

`Fragment` là lớp nền cho thành phần có view và lifecycle, kế thừa khả năng context từ `GrandContext`.

### Import

```js
import Fragment from "absol/src/AppPattern/Fragment";
```

### Methods

#### `createView(): HTMLElement`

Bắt buộc override. Mặc định ném lỗi `Not implement!`.

#### `getView(): HTMLElement`

Lazy-create view qua `createView()` và cache tại `this.$view`.

#### `revokeResource(): void`

Thu hồi tài nguyên, mặc định gọi `destroy()`.

#### `onCreated(): void`

Hook chạy sau khi tạo view lần đầu.

### Simple example

```js
import Fragment from "absol/src/AppPattern/Fragment";

function HelloFragment() {
	Fragment.call(this);
}

HelloFragment.prototype = Object.create(Fragment.prototype);
HelloFragment.prototype.constructor = HelloFragment;

HelloFragment.prototype.createView = function () {
	var div = document.createElement("div");
	div.textContent = "Hello Fragment";
	return div;
};

// hoặc có thể để giá trị vào trường this.$view sau đó thực hiện nhiều bước tiếp theo

HelloFragment.prototype.createView = function () {
	this.$view = document.createElement("div");
	this.$view.textContent = "Hello Fragment";
	//vì đã có giá trị trong this.$view, nên không cần return
};

var f = new HelloFragment();
document.body.appendChild(f.getView());
```

## class Activity extends Context

`Activity` biểu diễn một màn hình/ngữ cảnh chạy trong `Application`.

### Import

```js
import Activity from "absol/src/AppPattern/Activity";
```

### Methods

#### `startActivity(activity): void`

Yêu cầu parent mở activity mới.

#### `finish(): void`

Yêu cầu parent đóng activity hiện tại.

### Notes

- `Activity` kế thừa lifecycle đầy đủ từ `Context`.
- Thường dùng cùng `Application` để quản lý stack màn hình.

## class Application extends Context

`Application` là context cấp cao quản lý stack các `Activity`.

> Class này hiện chưa được dùng thử nghiệm trên thực tế

### Import

```js
import Application from "absol/src/AppPattern/Application";
```

### Properties

- **activityStack**: `Activity[]`
- **currentActivity**: `Activity|null`

### Methods

#### `startActivity(activity): void`

Pause activity hiện tại (nếu có), đẩy vào stack, attach activity mới và start.

#### `stopActivity(activity): void`

Đóng activity top; khôi phục activity trước đó từ stack.

#### `setContentView(view, overlay): void`

Phải override để gắn `view` vào UI thực tế.

#### `backToTopActivity(): void`

Quay về activity đầu stack.

### Simple example

```js
import Application from "absol/src/AppPattern/Application";

function MyApplication() {
	Application.call(this);
}

MyApplication.prototype = Object.create(Application.prototype);
MyApplication.prototype.constructor = MyApplication;

MyApplication.prototype.setContentView = function (view) {
	document.body.innerHTML = "";
	document.body.appendChild(view);
};
```

# Data Binding Object

## class Attributes

`Attributes` là lớp bọc object thuộc tính, cho phép gắn handler để can thiệp `get/set/export` theo từng property.

Khi chạy trong handler (`set/get/export/descriptor/defined/revoked`), `this` luôn trỏ về `node` truyền vào constructor.


Ứng dụng: tạo một object đại diện để xử lý dữ liệu cho object chính, nhưng không trực tiếp định nghĩa vào object chính(vì lý do xung đột), nhưng cần rút ngắn cách gọi con trỏ this

### Import

```js
import Attributes from "absol/src/AppPattern/Attributes";
```

### Constructor

#### `new Attributes(node)`

- **node**: `Object` đối tượng sở hữu attributes.

### AttributeHandler

Mỗi key trong handler map có dạng:

```js
{
	defined?: function (ref) {},
	revoked?: function (ref) {},
	get?: function (ref) {},
	set?: function (value, ref) {},
	descriptor?: Object | function () {},
	export?: function (ref) {}
}
```

Ý nghĩa:

- `defined`: gọi sau khi property được define.
- `revoked`: gọi trước khi property bị gỡ.
- `set`: xử lý khi gán giá trị (`obj.prop = value`).
- `get`: xử lý khi đọc giá trị (`obj.prop`).
- `descriptor`: metadata cho editor/UI schema.
- `export`: cách xuất dữ liệu khi gọi `export()`.

---

### Methods

#### `loadAttributeHandlers(newHandlers): void`

Nạp danh sách handler mới, tự thêm/xoá property theo handler map.

#### `unloadAttributeHandlers(oldHandlers): void`

Gỡ các property được định nghĩa bởi `oldHandlers`.

#### `defineProperty(name, handler): void`

Định nghĩa một property có getter/setter theo handler.

#### `revokeProperty(name, handler): void`

Gỡ property đã define. Nếu truyền `handler`, sẽ kiểm tra đúng handler mới gỡ.

#### `getProperty(name, ...args): *`

Đọc property qua computed getter nếu có handler.

#### `setProperty(name, value): void`

Gán property qua computed setter nếu có handler.

#### `exportProperty(name): *`

Xuất một property theo `handler.export` (nếu có), ngược lại dùng giá trị hiện tại.

#### `export(): Object`

Xuất toàn bộ property enumerable thành object; bỏ qua key có giá trị `undefined`.

#### `getPropertyDescriptor(name): Object`

Lấy descriptor metadata của property. Nếu handler có `descriptor` là function thì function đó sẽ được gọi.

---

### Simple example

```js
import Attributes from "absol/src/AppPattern/Attributes";

function EZViewLike() {
	this.logs = [];

	// Giống EZView:
	// this.attributes ban đầu là object plain,
	// sau đó trộn vào instance Attributes để có cơ chế handler.
	this.attributes = Object.assign(new Attributes(this), this.attributes);
	this.attributes.loadAttributeHandlers(this.attributeHandlers);
}

EZViewLike.prototype.attributes = {
	title: "",
	hidden: false
};

EZViewLike.prototype.attributeHandlers = {
	title: {
		set: function (value, ref) {
			// this === instance EZViewLike, không phải this.attributes
			value = String(value || "").trim();
			ref.set(value);
			this.logs.push("set title: " + value);
			return value;
		},
		get: function (ref) {
			return ref.get();
		},
		export: function (ref) {
			return ref.get() || undefined;
		},
		descriptor: {
			type: "string",
			group: "Basic"
		}
	},
	hidden: {
		set: function (value, ref) {
			value = !!value;
			ref.set(value);
			this.logs.push("set hidden: " + value);
			return value;
		},
		export: function (ref) {
			return ref.get() ? true : undefined;
		}
	}
};

var view = new EZViewLike();

view.attributes.title = "  Hello EZView  ";
view.attributes.hidden = false;

console.log(view.attributes.title);       // "Hello EZView"
console.log(view.attributes.export());    // { title: "Hello EZView" }
console.log(view.logs);                   // ["set title: Hello EZView", "set hidden: false"]

// Có thể dùng trực tiếp API tiện ích:
view.attributes.setProperty("title", "  New title  ");
console.log(view.attributes.getProperty("title")); // "New title"
```


