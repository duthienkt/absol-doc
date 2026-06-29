## Array

Các hàm tiện ích trong `DataStructure/Array` để xử lý tập hợp phần tử, so sánh mảng và thao tác ngẫu nhiên.

### `arrayUnique(arr)`

Loại bỏ phần tử trùng lặp và giữ lại lần xuất hiện đầu tiên.

* `arr` | Kiểu: `(string | number | boolean | null)[]` | Mảng đầu vào.
* Trả về | Kiểu: `(string | number | boolean | null)[]` | Mảng mới chỉ còn phần tử duy nhất.

```js
import { arrayUnique } from 'absol/src/DataStructure/Array';

arrayUnique([1, 2, 2, '2', null, null]);
// [1, 2, '2', null]
```

### `arrayUnion(a1, a2)`

Hợp hai mảng và loại trùng lặp.

* `a1` | Kiểu: `(string | number | boolean | null)[]` | Mảng thứ nhất.
* `a2` | Kiểu: `(string | number | boolean | null)[]` | Mảng thứ hai.
* Trả về | Kiểu: `(string | number | boolean | null)[]` | Mảng hợp không trùng phần tử.

```js
import { arrayUnion } from 'absol/src/DataStructure/Array';

arrayUnion([1, 2, 3], [3, 4, 5]);
// [1, 2, 3, 4, 5]
```

### `arrayRemoveNone(arr)`

Loại bỏ các phần tử `null` và `undefined` khỏi mảng.

* `arr` | Kiểu: `any[]` | Mảng đầu vào.
* Trả về | Kiểu: `any[]` | Mảng mới không chứa `null`/`undefined`.

```js
import { arrayRemoveNone } from 'absol/src/DataStructure/Array';

arrayRemoveNone([0, null, '', undefined, false, 3]);
// [0, '', false, 3]
```

### `arrayIntersection(a1, a2)`

Lấy giao của hai mảng (các phần tử xuất hiện ở cả hai mảng), không lặp lại phần tử.

* `a1` | Kiểu: `any[]` | Mảng thứ nhất.
* `a2` | Kiểu: `any[]` | Mảng thứ hai.
* Trả về | Kiểu: `any[]` | Mảng giao.

```js
import { arrayIntersection } from 'absol/src/DataStructure/Array';

arrayIntersection([1, 2, 3, 3], [3, 4, 1]);
// [1, 3]
```

### `arrayIsSubset(childArr, parentArr)`

Kiểm tra `childArr` có phải tập con của `parentArr` hay không.

* `childArr` | Kiểu: `any[]` | Mảng cần kiểm tra là tập con.
* `parentArr` | Kiểu: `any[]` | Mảng cha.
* Trả về | Kiểu: `boolean` | `true` nếu mọi phần tử của `childArr` đều có trong `parentArr`.

```js
import { arrayIsSubset } from 'absol/src/DataStructure/Array';

arrayIsSubset([1, 2], [1, 2, 3]); // true
arrayIsSubset([1, 4], [1, 2, 3]); // false
```

### `arrayCompare(a1, a2, order)`

So sánh hai mảng có bằng nhau hay không.

* Khi `order = true`: so sánh theo đúng thứ tự phần tử.
* Khi `order` không truyền hoặc `false`: hàm sẽ `sort()` cả hai mảng trước khi so sánh.

* `a1` | Kiểu: `any[]` | Mảng thứ nhất.
* `a2` | Kiểu: `any[]` | Mảng thứ hai.
* `order` | Kiểu: `boolean | undefined` | Có xét thứ tự hay không.
* Trả về | Kiểu: `boolean` | Kết quả so sánh.

Lưu ý: khi `order` là `false`, hàm thay đổi trực tiếp `a1` và `a2` do dùng `sort()` in-place.

```js
import { arrayCompare } from 'absol/src/DataStructure/Array';

arrayCompare([1, 2], [1, 2], true); // true
arrayCompare([2, 1], [1, 2], false); // true
arrayCompare([2, 1], [1, 2], true);  // false
```

### `arrayLexicographicalCompare(a1, a2)`

So sánh từ điển (lexicographical) giữa hai mảng số.

* Trả về `-1` nếu `a1 < a2`.
* Trả về `1` nếu `a1 > a2`.
* Trả về `0` nếu hai mảng bằng nhau.

* `a1` | Kiểu: `number[]` | Mảng thứ nhất.
* `a2` | Kiểu: `number[]` | Mảng thứ hai.
* Trả về | Kiểu: `number` | `-1`, `0`, hoặc `1`.

```js
import { arrayLexicographicalCompare } from 'absol/src/DataStructure/Array';

arrayLexicographicalCompare([1, 2, 3], [1, 2, 4]); // -1
arrayLexicographicalCompare([1, 3], [1, 2, 9]);    // 1
arrayLexicographicalCompare([1, 2], [1, 2]);       // 0
```

### `arrayShuffle(arr)`

Trộn ngẫu nhiên thứ tự phần tử trong mảng.

* `arr` | Kiểu: `Array` | Mảng cần trộn.
* Trả về | Kiểu: `void` | Hàm thao tác trực tiếp trên mảng đầu vào.

```js
import { arrayShuffle } from 'absol/src/DataStructure/Array';

const items = [1, 2, 3, 4, 5];
arrayShuffle(items);
console.log(items); // Ví dụ: [3, 1, 5, 2, 4]
```


## class AVLTree

`AVLTree` là cây nhị phân tìm kiếm tự cân bằng (AVL), phù hợp cho thao tác thêm/xóa/tìm kiếm với độ phức tạp trung bình tốt.

### `new AVLTree(cmp)`

Khởi tạo cây AVL.

* `cmp` | Kiểu: `(a: any, b: any) => number` | Hàm so sánh.
* Nếu không truyền `cmp`, comparator mặc định sẽ so sánh theo toán tử `<` và `>`.

Quy ước comparator:

* `< 0` nếu `a` nhỏ hơn `b`.
* `> 0` nếu `a` lớn hơn `b`.
* `0` nếu bằng nhau.

Lưu ý: cây không chèn phần tử trùng (khi comparator trả về `0`).

```js
import AVLTree from 'absol/src/DataStructure/AVLTree';

const tree = new AVLTree();
```

### `insert(data)`

Thêm một phần tử vào cây và tự cân bằng lại nếu cần.

* `data` | Kiểu: `any` | Giá trị cần thêm.
* Trả về | Kiểu: `void`.

```js
import AVLTree from 'absol/src/DataStructure/AVLTree';

const tree = new AVLTree();
tree.insert(10);
tree.insert(20);
tree.insert(15);
```

### `delete(data)`

Xóa một phần tử khỏi cây (nếu tồn tại), sau đó cân bằng lại cây.

* `data` | Kiểu: `any` | Giá trị cần xóa.
* Trả về | Kiểu: `void`.

```js
import AVLTree from 'absol/src/DataStructure/AVLTree';

const tree = AVLTree.fromArray([10, 20, 30, 40]);
tree.delete(20);
```

### `inOrderTraversal(onNode)`

Duyệt cây theo thứ tự in-order (left -> root -> right).

* `onNode` | Kiểu: `(data: any) => void` | Callback nhận từng phần tử theo thứ tự tăng dần theo comparator.
* Trả về | Kiểu: `void`.

```js
import AVLTree from 'absol/src/DataStructure/AVLTree';

const tree = AVLTree.fromArray([3, 1, 2]);
tree.inOrderTraversal((x) => console.log(x));
// 1
// 2
// 3
```

### `find(cp, thisArg)`

Tìm phần tử trong cây bằng callback so sánh.

* `cp` | Kiểu: `(data: any) => number` | Hàm trả về:
* `< 0`: tiếp tục tìm về nhánh trái.
* `> 0`: tiếp tục tìm về nhánh phải.
* `0`: tìm thấy phần tử.
* `thisArg` | Kiểu: `any` | Ngữ cảnh `this` khi gọi callback.
* Trả về | Kiểu: `any | undefined` | Giá trị tìm được hoặc `undefined` nếu không có.

```js
import AVLTree from 'absol/src/DataStructure/AVLTree';

const tree = AVLTree.fromArray([5, 10, 15, 20]);
const found = tree.find((x) => x - 15);
console.log(found); // 15 hoặc undefined
```

### `toArray()`

Chuyển cây thành mảng theo thứ tự in-order.

* Trả về | Kiểu: `any[]` | Mảng dữ liệu đã sắp theo comparator.

```js
import AVLTree from 'absol/src/DataStructure/AVLTree';

const tree = AVLTree.fromArray([4, 2, 6, 1, 3]);
console.log(tree.toArray()); // [1, 2, 3, 4, 6]
```

### `AVLTree.fromArray(arr, cmp)`

Tạo nhanh một cây AVL từ mảng.

* `arr` | Kiểu: `any[]` | Mảng đầu vào.
* `cmp` | Kiểu: `(a: any, b: any) => number` | Comparator tùy chọn.
* Trả về | Kiểu: `AVLTree` | Cây đã được chèn toàn bộ phần tử.

```js
import AVLTree from 'absol/src/DataStructure/AVLTree';

const tree = AVLTree.fromArray([7, 2, 9, 1, 5]);
console.log(tree.toArray()); // [1, 2, 5, 7, 9]
```


## class Heap

`Heap` là cấu trúc dữ liệu heap (mặc định là min-heap khi dùng comparator mặc định).

### `new Heap(cmp)`

Khởi tạo heap rỗng.

* `cmp` | Kiểu: `(a: any, b: any) => number` | Hàm so sánh.
* Mặc định dùng comparator số/chuỗi tăng dần:
* `< 0` nếu `a` ưu tiên hơn `b`.
* `> 0` nếu `a` kém ưu tiên hơn `b`.

```js
import Heap from 'absol/src/DataStructure/Heap';

const heap = new Heap();
```

### `push(x)`

Thêm phần tử vào heap.

* `x` | Kiểu: `any` | Phần tử cần chèn.
* Trả về | Kiểu: `Heap` | Trả về chính heap để chain.

```js
import Heap from 'absol/src/DataStructure/Heap';

const heap = new Heap();
heap.push(5).push(2).push(8);
```

### `pop()`

Lấy và xóa phần tử ở đỉnh heap.

* Trả về | Kiểu: `any` | Phần tử ưu tiên cao nhất hiện tại.

```js
import Heap from 'absol/src/DataStructure/Heap';

const heap = Heap.fromArray([5, 2, 8]);
console.log(heap.pop()); // 2
```

### `peek()`

Xem phần tử đỉnh heap mà không xóa.

* Trả về | Kiểu: `any` | Phần tử ở đỉnh.

```js
import Heap from 'absol/src/DataStructure/Heap';

const heap = Heap.fromArray([5, 2, 8]);
console.log(heap.peek()); // 2
```

### `contains(x)`

Kiểm tra heap có chứa phần tử `x` hay không.

* `x` | Kiểu: `any` | Phần tử cần kiểm tra.
* Trả về | Kiểu: `boolean`.

```js
import Heap from 'absol/src/DataStructure/Heap';

const heap = Heap.fromArray([1, 3, 5]);
console.log(heap.contains(3)); // true
```

### `clear()`

Xóa toàn bộ phần tử trong heap.

* Trả về | Kiểu: `Heap` | Trả về chính heap.

### `empty()`

Kiểm tra heap có rỗng hay không.

* Trả về | Kiểu: `boolean`.

### `size()`

Lấy số lượng phần tử hiện có trong heap.

* Trả về | Kiểu: `number`.

```js
import Heap from 'absol/src/DataStructure/Heap';

const heap = new Heap();
heap.push(10).push(4);
console.log(heap.size());  // 2
console.log(heap.empty()); // false
heap.clear();
console.log(heap.empty()); // true
```

### `clone()`

Tạo bản sao heap hiện tại (sao chép mảng nội bộ).

* Trả về | Kiểu: `Heap`.

### `toArray()`

Lấy bản sao mảng nội bộ của heap.

* Trả về | Kiểu: `any[]`.

### `toSortedArray()`

Trả về mảng đã sắp theo thứ tự ưu tiên bằng cách pop từ bản sao heap.

* Trả về | Kiểu: `any[]`.
* Không làm thay đổi heap gốc.

```js
import Heap from 'absol/src/DataStructure/Heap';

const heap = Heap.fromArray([7, 1, 4]);
console.log(heap.toSortedArray()); // [1, 4, 7]
console.log(heap.size()); // vẫn giữ nguyên kích thước ban đầu
```

### `Heap.fromArray(arr, cmp)`

Tạo heap từ mảng có sẵn.

* `arr` | Kiểu: `any[]` | Mảng đầu vào.
* `cmp` | Kiểu: `(a: any, b: any) => number` | Comparator của heap mới.
* Trả về | Kiểu: `Heap`.

Lưu ý:

* Mảng `arr` được dùng trực tiếp làm storage nội bộ của heap (không clone).
* Trong triển khai hiện tại, bước heapify trong `fromArray` dùng comparator mặc định.

```js
import Heap from 'absol/src/DataStructure/Heap';

const arr = [9, 3, 6, 1];
const heap = Heap.fromArray(arr);
console.log(heap.peek()); // 1
```

### Alias Methods

Các tên gọi tương đương trong class:

* `insert` -> `push`
* `top` -> `peek`
* `front` -> `peek`
* `has` -> `contains`
* `copy` -> `clone`

## object

Nhóm hàm trong `DataStructure/Object` hỗ trợ thu hồi tài nguyên và theo dõi thay đổi thuộc tính của object.

### `revokeResource(o)`

Thu hồi tài nguyên đệ quy cho nhiều kiểu dữ liệu:

* Nếu `o` là mảng: pop từng phần tử và gọi lại `revokeResource`.
* Nếu `o` có method `revokeResource()`: gọi method đó.
* Nếu `o` là DOM node (`nodeType` 1 hoặc 3):
* Gọi `offAll()` nếu có (gỡ event listeners kiểu emitter).
* Gọi `revokeResource()` của node nếu có.
* Nếu không có, duyệt và remove toàn bộ node con.
* Nếu `o` là object thường: thử xóa key và thu hồi đệ quy các giá trị con.

* `o` | Kiểu: `any` | Đối tượng cần thu hồi tài nguyên.
* Trả về | Kiểu: `void`.

```js
import { revokeResource } from 'absol/src/DataStructure/Object';

const holder = {
	list: [new Blob(['x']), { value: 123 }]
};

revokeResource(holder);
```

### `observePropertyChanges(obj, keys, callback)`

Theo dõi thay đổi của một hoặc nhiều thuộc tính bằng `Object.defineProperty`.

Khi property được gán giá trị mới, callback sẽ được gọi với:

* `key`: tên thuộc tính vừa đổi.
* `newValue`: giá trị mới.

* `obj` | Kiểu: `object` | Object cần theo dõi.
* `keys` | Kiểu: `string | string[]` | Một key hoặc danh sách key cần observe.
* `callback` | Kiểu: `(key: string, newValue: any) => void` | Hàm nhận sự kiện thay đổi.
* Trả về | Kiểu: `void`.

```js
import { observePropertyChanges } from 'absol/src/DataStructure/Object';

const state = { a: 1, b: 2 };
observePropertyChanges(state, ['a', 'b'], (key, value) => {
	console.log(key, value);
});

state.a = 10; // log: a 10
state.b = 20; // log: b 20
```

### `unobservePropertyChanges(obj, keys)`

Gỡ cơ chế observe đã gắn bằng `observePropertyChanges` cho một hoặc nhiều thuộc tính.

Triển khai hiện tại thực hiện:

* Lấy giá trị hiện tại.
* `delete` property.
* Gán lại property theo kiểu thông thường.

* `obj` | Kiểu: `object` | Object cần gỡ observe.
* `keys` | Kiểu: `string | string[]` | Một key hoặc danh sách key cần unobserve.
* Trả về | Kiểu: `void`.

```js
import { observePropertyChanges, unobservePropertyChanges } from 'absol/src/DataStructure/Object';

const state = { count: 0 };
observePropertyChanges(state, 'count', (key, value) => console.log(key, value));

state.count = 1; // log: count 1
unobservePropertyChanges(state, 'count');
state.count = 2; // không còn callback
```

