
## SelectMenu

### [Demo](https://absol.cf/libs/absol-acomp/demo/selectmenu.html)

### props 

<script>
var clazz = absol.require('fileinputbox');
var descriptions = {};
descriptions.value = 'Nhận giá trị bất kì, nếu các trường thông tin khác bị thiếu,'
+' các trường khác sẽ được tự tính toán nếu có thể';
descriptions.allowUpload = 'Mặc định là true';
descriptions.downloadable = 'Mặc định là false';
descriptions.removable = 'Mặc định là false';
descriptions.accept = 'Dùng để chọn định dạng khi mở FileDialog hệ thống. Tham khảo thêm tại: '+
'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept';
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
                        { tag: 'td', child: { text: descriptions[name] } },
                    ]
                }
            })
        }
    ]
});
</script>

### Ví dụ

abc

