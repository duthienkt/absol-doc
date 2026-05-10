# TabView

## Tạo mới

`tabview` là container tab, nhận các child kiểu `tabframe`, `frame` hoặc `singlepage`.

```js
var frame1 = absol._('tabframe').attr({
	name: 'Material-design-icon',
	id: 'matd',
	desc: 'Material Design Icon'
}).addChild(absol._({
	tag: 'iframe',
	style: {
		width: '100%',
		height: '100%'
	},
	attr: {
		src: 'https://absol.cf/css/materialdesignicons/preview.html'
	}
}));

var frame2 = absol._('tabframe').attr({
	name: 'vchart',
	id: 'matd2',
	desc: 'Dual chart demo'
}).addChild(absol._({
	tag: 'iframe',
	style: {
		width: '100%',
		height: '100%'
	},
	attr: {
		src: 'https://absol.cf/libs/absol-vchart/demo/dualchart.html'
	}
}));

var tabview = absol._({
	tag: 'tabview',
	style: {
		height: '800px'
	},
	props: {
		tvTitle: 'admin'
	},
	child: [frame1, frame2]
}).addTo(document.body);
```

## Tên tag

- `tabview`
- `tabframe`
- `frame`
- `singlepage`

## Demo

- https://absol.cf/libs/absol-acomp/demo/tab.html

## Frame

`frame` là phần tử nội dung cơ sở, có thể được đặt trong `tabview`.

### event

| Tên | EventData | Ghi chú |
|-----|-----------|---------|
| `attached` | `{ parentElt }` | Gọi khi frame được gắn vào parent. |
| `detached` | `{ parentElt }` | Gọi khi frame bị gỡ khỏi parent. |
| `active` | `{ id, userActive, tabButton, holder }` | Gọi khi frame được kích hoạt. |
| `inactive` | `{ id, userActive, tabButton, holder }` | Gọi khi frame mất active. |
| `deactive` | như `inactive` | Alias cũ, được forward từ `inactive` để tương thích. |

### prototype

| Tên | Tham số | Trả về | Ghi chú |
|-----|---------|--------|---------|
| `requestActive` |  |  | Yêu cầu parent active frame hiện tại. |
| `getParent` |  | `TabView \| FrameView \| undefined` | Parent logic của frame. |
| `selfRemove` |  |  | Nếu đã có parent thì nhờ parent gỡ đúng cách. |

## TabFrame

`tabframe` kế thừa `frame` và thêm metadata để hiển thị tab.

### props

| Tên | Kiểu dữ liệu | Ghi chú |
|-----|--------------|---------|
| `name` | `string` | Tên hiển thị trên nút tab. Nếu không có thì `TabView` fallback về `NoName`. |
| `desc` | `string` | Mô tả phụ của tab. |
| `modified` | `boolean` | Đánh dấu trạng thái đã sửa đổi. Khi đổi giá trị, `TabView` cập nhật lại nút tab. |
| `preventClosing` | `boolean` | Nếu `true` thì tab được đánh dấu không cho đóng. |

### attr

| Tên | Giá trị | Ghi chú |
|-----|---------|---------|
| `id` | `string` | Nên đặt rõ ràng để gọi `activeTab`, `removeTab`, `getTabById`. |
| `name` | `string` | Map sang prop `name`. |
| `desc` | `string` | Map sang prop `desc`. |
| `modified` | `'true' \| '1'` | Map sang prop `modified`. |

### event

| Tên | EventData | Ghi chú |
|-----|-----------|---------|
| `requestremove` | `{ id, userActive, tabButton, holder, waitFor(promise) }` | Gọi trước khi tab bị gỡ. Có thể chặn luồng remove bằng cách truyền Promise reject qua `waitFor`. |
| `remove` | `{ id, userActive, tabButton, holder }` | Gọi sau khi tab đã bị gỡ. |
| `active` | `{ id, userActive, tabButton, holder }` | Gọi khi tab được active. |
| `inactive` | `{ id, userActive, tabButton, holder }` | Gọi khi tab bị ẩn hoặc bị gỡ khỏi trạng thái active. |

### prototype

| Tên | Tham số | Trả về | Ghi chú |
|-----|---------|--------|---------|
| `requestRemove` |  |  | Yêu cầu parent gỡ tab hiện tại. |
| `revokeResource` |  |  | Hook dọn tài nguyên của tab. |

## TabView

### props

| Tên | Kiểu dữ liệu | Ghi chú |
|-----|--------------|---------|
| `tvTitle` | `string` | Tiêu đề ở vùng bên phải thanh tab. Được drill sang plugin nội bộ. |
| `notificationPanel` | `NotificationPanel` | Getter tạo lazy panel thông báo ở bên phải thanh tab. |
| `historyOfTab` | `string[]` | Danh sách lịch sử active tab, chỉ đọc. |

### child hợp lệ

- `tabframe`
- `frame`
- `singlepage`

`addChild` sẽ kiểm tra child có `notifyAttached` và `notifyDetached`. Nếu không có, hàm sẽ throw lỗi `element is not a tabframe`.

### event

| Tên | EventData | Ghi chú |
|-----|-----------|---------|
| `activetab` | `{ id, userActive, tabButton, holder, from, to }` | Gọi khi tab mới được active. |
| `inactivetab` | `{ id, userActive, tabButton, holder }` | Gọi khi tab đang active bị chuyển sang ẩn hoặc chuẩn bị bị remove. |
| `requestremovetab` | `{ id, userActive, tabFrame, tabButton, holder, waitFor(promise) }` | Gọi trước khi remove tab. Có thể dùng để xác nhận lưu dữ liệu. |
| `removetab` | `{ id, userActive, tabButton, holder }` | Gọi sau khi tab đã bị gỡ. |
| `pressaddtab` |  | Chỉ là event mở rộng để giao diện custom có thể tự phát khi bấm nút add tab. |

### prototype

| Tên | Tham số | Trả về | Ghi chú |
|-----|---------|--------|---------|
| `addChild` | `...elt: TabFrame \| Frame \| SinglePage` |  | Thêm tab mới và active ngay tab vừa thêm. |
| `activeTab` | `id: string, userActive?: boolean` |  | Active tab theo `id`. |
| `removeTab` | `id: string, userActive?: boolean` | `Promise<any[]>` | Gỡ tab theo `id`, có chờ các Promise từ `requestremove` và `requestremovetab`. |
| `activeLastTab` |  |  | Active lại tab gần nhất còn tồn tại trong history. |
| `getChildAt` | `index: number` | `TabFrame \| Frame \| SinglePage` | Lấy child theo vị trí trong danh sách holder. |
| `getAllChild` |  | `Array<TabFrame \| Frame \| SinglePage>` | Lấy toàn bộ child logic của `TabView`. |
| `getActiveTabHolder` |  | `object \| null` | Lấy holder của tab đang active. |
| `getActiveTab` |  | `TabFrame \| Frame \| SinglePage \| null` | Lấy nội dung tab đang active. |
| `getActiveTabId` |  | `string \| null` | Lấy `id` của tab đang active. |
| `getTabById` | `id: string` | `TabFrame \| Frame \| SinglePage \| null` | Tìm child theo `id`. |
| `getTabHolderById` | `id: string` | `object \| null` | Tìm holder theo `id`. |
| `activeFrame` | `id: string \| AElement` |  | Alias để active theo `id` hoặc truyền trực tiếp frame. |

### Ví dụ bắt event remove

```js
var tabview = absol._({
	tag: 'tabview',
	class: 'as-without-close-button',
	style: {
		height: '800px'
	},
	child: [frame1, frame2],
	on: {
		removetab: function (event) {
			if (this.getAllChild().length === 0) {
				console.log('remove all');
			}
			else {
				console.log('removetab', event.id);
			}
		}
	}
}).addTo(document.body);
```

### Ví dụ giao diện có nút add tab

```js
absol._({
	tag: 'tabview',
	class: ['cad-dark', 'as-has-add-btn'],
	style: {
		height: '800px',
		backgroundColor: '#222933'
	},
	on: {
		pressaddtab: function () {
			alert('Add tab');
		}
	},
	child: [frame1, frame2]
}).addTo(document.body);
```

### Ghi chú

- `TabView` tự đồng bộ trạng thái `name`, `desc`, `modified`, `preventClosing` từ `tabframe` sang nút tab bằng các hàm `notifyUpdate...` nội bộ.
- Khi remove tab đang active, `TabView` sẽ tự gọi `activeLastTab()` để quay về tab gần nhất còn tồn tại trong history.
- `historyOfTab` là bản sao của lịch sử active, không phải mảng nội bộ gốc nên có thể đọc an toàn.

