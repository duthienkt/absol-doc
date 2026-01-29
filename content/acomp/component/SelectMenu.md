## SelectMenu

### [Demo](https://absol.cf/libs/absol-acomp/demo/selectmenu.html)

### prototype

| Tên                | Tham số         | Trả về                                                                                       |
|--------------------|-----------------|----------------------------------------------------------------------------------------------|
| findItemsByValue   | value: any      | Array các item trùng giá trị, hoặc undefined nếu không có                                    |
| findItemByValue    | value: any      | Item đầu tiên trùng giá trị, hoặc undefined nếu không có                                     |

### style

| Tên thuộc tính   | Giá trị                                     | Mô tả                                                                                   |
|------------------|---------------------------------------------|----------------------------------------------------------------------------------------|
| textAlign        | `"center"\|"left"`                          | Căn chỉnh văn bản trong SelectMenu. "center": căn giữa, "left": mặc định, căn trái     |
| variant          | `"v0"\|"secondary"`                         | Kiểu giao diện. "v0": mặc định, "secondary": kiểu phụ                                 |
| minWidth         | `string`                                    | Đặt min-width cho SelectMenu, ví dụ "120px", "unset", "auto"                          |
| size             | `"v0"\|"tiny"\|"small"\|"regular"\|"large"` | Kích thước tổng thể, kế thừa từ AbstractInput. "regular": mặc định                    |
| outputMode       | `true\|"borderless"\|false `                | Kiểu hiển thị: true (nền trong suốt), "borderless" (không viền), false (mặc định)      |

Các thuộc tính này có thể được đặt qua hàm addStyle hoặc style khi khởi tạo. Các giá trị kế thừa từ AbstractInput như size, outputMode dùng chung cho nhiều module nhập liệu.

### props

<script>
var clazz = absol.require('selectmenu');
render({
    tag: 'table',
    child: [
        {
            tag: 'thead',
            child: [
                {
                    tag: 'tr',
                    child: [
                        { tag: 'td', child: { text: 'Tên' } },
                        { tag: 'td', child: { text: 'Chú thích' } }
                    ]
                }
            ]
        },
        {
            tag: 'tbody',
            child: Object.keys(clazz.property).map(function (name) {
                return {
                    tag: 'tr',
                    child: [
                        { tag: 'td', child: { text: name } },
                        { tag: 'td', child: { text: '' } },
                    ]
                }
            })
        }
    ]
});
</script>

### Ví dụ
