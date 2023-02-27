# TableEditor

## [Demo](https://absol.cf/libs/absol-sheet/)

## Hướng dẫn


### Khởi tạo
```js
		 var editor = new absol.sheet.TableEditor(option);
```

### Tham số

Ví dụ:

```js
	var option = {
    propertyNames: ['p1', 'p2'],
    propertyDescriptors: {
      p1: {//Mô tả kiểu dữ liệu, xem phần tiếp theo 
        type: 'number',
         text: "Giới hạn dưới",
         max: "= max - 1 ",
         step: 0.1,
         defaultValue: 100000
      }
    }   
  }

```

### Mô tả kiểu dữ liệu

#### base - tất cả đều có


| tên              | kiểu   | Bắt buộc |   Chú thích                                               |
|------------------|--------|----------|-----------------------------------------------------------|
| type             | string |     x    | tên kiểu dữ liêu, ví dụ "number", "string"                |
| text             | string |          | tên trường, hiển thị trên header, có thể là tiếng Việt, mặc định sẽ lấy tên trường trong dữ liệu    |
| calc             | string |          | tính giá trị phụ thuộc từ các trường khác bằng biểu thức, giá trị sẽ không xuất hiện trong dữ liệu trả về|
| defaultValue     | any    |          | Giá trị mặc định khi hàng được tạo mới mởi thao tác chỉnh sửa của người dùng, lưu ý thêm bằng code thì phải tự gán giá trị mặc định nếu có|            


