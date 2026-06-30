## CMDTool

`CMDTool` là thanh công cụ lệnh dạng ribbon/tab. Thành phần này đọc descriptor từ delegate để render nút, ribbon, bộ chọn màu..., và gọi lại `execCmd(name, ...args)` khi người dùng thao tác.

Nguồn tham khảo chính:

- `absol-acomp/js/CMDTool.js`
- `absol-form/js/cmds/CmdDescriptors.js`
- `absol-form/js/layouteditor/LayoutEditor.js`

### Khởi tạo nhanh

```js
import CMDTool from 'absol-acomp/js/CMDTool';
import { CMDToolDelegate } from 'absol-acomp/js/CMDTool';
import CmdDescriptors from '../cmds/CmdDescriptors';
import { mixClass } from 'absol/src/HTML5/OOP';

function Explorer() {
	this.cmdTool = new CMDTool();
	this.cmdDelegate = new ExplorerCMDDelegate(this);
	this.cmdTool.delegate = this.cmdDelegate;
}

Explorer.prototype.onStart = function () {
	this.cmdDelegate.refresh();
};

function ExplorerCMDDelegate(explorer) {
	CMDToolDelegate.call(this);
	this.explorer = explorer;
}

mixClass(ExplorerCMDDelegate, CMDToolDelegate);

ExplorerCMDDelegate.prototype.getCmdGroupTree = function () {
	return ['new', 'reload'];
};

ExplorerCMDDelegate.prototype.getCmdDescriptor = function (name) {
	return Object.assign({
		type: 'trigger',
		desc: name,
		icon: 'span.mdi.mdi-apple-keyboard-command'
	}, CmdDescriptors[name]);
};

ExplorerCMDDelegate.prototype.execCmd = function (name) {
	if (name === 'new') {
		this.openNewFunctionDialog();
	}
	else if (name === 'reload') {
		this.explorer.redrawExpTree();
	}
};

ExplorerCMDDelegate.prototype.openNewFunctionDialog = function () {
	// Mở dialog tạo mới form
};

var explorer = new Explorer();
document.body.appendChild(explorer.cmdTool.getView());
explorer.onStart();
```

Ví dụ trên bám theo cách tổ chức trong EZEExplorer:

- Tách delegate thành class riêng để gom toàn bộ logic lệnh.
- `getCmdGroupTree()` chỉ định thứ tự và nhóm nút hiển thị.
- `getCmdDescriptor()` merge descriptor mặc định với `CmdDescriptors` dùng chung.
- `execCmd()` điều hướng từng lệnh sang handler cụ thể (`new`, `reload`, ...).

### Luồng hoạt động

1. `CMDTool` gọi `delegate.getCmdGroupTree()` để lấy cây menu.
2. Mỗi node command sẽ lấy descriptor qua `delegate.getCmdDescriptor(name)`.
3. Khi click/chọn, `CMDTool` gọi `delegate.execCmd(name, ...args)`.
4. Khi trạng thái thay đổi (disabled, checked, icon, text...), gọi `updateVisibility(...)` hoặc `refresh()`.

## Format mô tả mỗi lệnh (descriptor)

Descriptor là object được trả về bởi `getCmdDescriptor(name)`. Dạng cơ bản:

```js
{
	type: 'trigger',
	desc: 'Save',
	icon: 'span.mdi.mdi-content-save'
}
```

### Các trường chung

- `type`: kiểu node UI. Thường gặp: `trigger`, `toggle_switch`, `ribbon`, `color`, `font`.
- `desc`: chữ hiển thị trên button. Có thể là chuỗi hoặc hàm trả về chuỗi.
- `icon`: mô tả icon (thường là css query string như `span.mdi...`, hoặc object/HTML theo `RibbonButton`).
- `disabled`: nếu `true` thì vô hiệu hóa button.
- `args`: mảng tham số mặc định được nối vào khi gọi `execCmd`.
- `name`: tên command (thường là key do `CmdDescriptors` cấp).

### Theo từng type

#### 1) trigger

Button bấm một lần để chạy lệnh.

```js
{
	type: 'trigger',
	desc: 'Delete',
	icon: 'span.mdi.mdi-delete-variant',
	disabled: false
}
```

Khi click:

```js
execCmd(name, ...(descriptor.args || []))
```

#### 2) toggle_switch

Button bật/tắt, có thể loại trừ nhau theo nhóm.

```js
{
	type: 'toggle_switch',
	desc: 'Select Tool',
	icon: 'select-tool-ico',
	checked: true,
	group: 'tool'
}
```

Khi click:

```js
execCmd(name, newChecked, ...(descriptor.args || []))
```

#### 3) ribbon

Button có menu item bên trong.

```js
{
	type: 'ribbon',
	desc: 'Depth Select',
	icon: 'span.mdi.mdi-selection',
	items: [
		{ text: 'Select In Current Layout', icon: 'span.mdi.mdi-selection', args: ['CURRENT_LAYOUT'] },
		{ text: 'Depth Select', icon: 'depth-select-ico', args: ['DEPTH'] }
	]
}
```

Khi chọn item:

```js
execCmd(name, ...(item.args || []), ...(descriptor.args || []))
```

#### 4) color

Button mở color picker.

```js
{
	type: 'color',
	desc: 'Line Color',
	icon: 'drawpenico',
	value: '#ff0000'
}
```

Khi đổi màu:

```js
execCmd(name, value)
```

#### 5) font

Đã có renderer cơ bản trong `CMDTool`, thường dùng để mở rộng UI chọn font.

```js
{
	type: 'font',
	desc: 'Format Font',
	icon: 'span.mdi.mdi-format-font'
}
```

## Format cây command (group tree)

`getCmdGroupTree()` trả về cây node để bố trí layout của tool.

Node thường dùng:

- `tab_list` -> danh sách tab
- `tab` -> 1 tab
- `group_x2` -> group 2 cột
- `group_x1` -> group 1 cột
- `left_group` -> nhóm bên trái (khi dùng `tab_list`)
- command node hoặc chuỗi tên command

Ví dụ ngắn:

```js
{
	type: 'tab_list',
	children: [
		{
			type: 'tab',
			name: 'Home',
			children: [
				{ type: 'group_x2', children: ['save', 'undo', 'redo'] },
				{ type: 'group_x2', children: ['copy', 'paste', 'delete'] }
			]
		},
		{
			type: 'left_group',
			children: ['preview']
		}
	]
}
```

## Ghi chú thực tế khi tích hợp với editor

- Ở `LayoutEditor`, descriptor thường được merge với state runtime (`disabled`, `checked`) trong `getCmdDescriptor(name)`.
- Nếu thay đổi cấu trúc tab/group theo context, gọi `refresh()` để dựng lại node.
- Nếu chỉ thay đổi state của một số lệnh, gọi `updateVisibility('save', 'undo', ...)` để cập nhật nhanh.
