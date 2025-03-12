## CollapsibleTreeNavigator

## [Demo](https://absol.cf/libs/absol-acomp/demo/collapsibletreenavigator.html) 

### Tạo mới

> Lưu ý: nếu value bị trùng, nó sẽ được thêm hậu tố ngẫu nhiên

```js
var items = [
    {
        text: 'Tất cả',
        value: 'all',
        icon: 'span.mdi.folder-multiple',
        testRaw: 123
    },
    {
        text: 'Đã nhận',
        count: 5,
        value: 'received'
    },
    {
        text: 'Nhóm',
        actions: [
            { name: "option", icon: 'span.mdi.mdi-cog-outline' },
        ],
        initOpened: true, //tự động mở ra khi gán vào lần đầu tiên
        items: [
            {
                text: 'Nhãn mẹ',
                value: 'parent_stamp',
                items: [
                    {
                        text: 'Nhãn con',
                        count: 1,
                        value: 'child_stamp'
                    }
                ]
            },
            {
                text: 'Marketing',
                value: 'marketing',
                items: [
                    {
                        text: 'Nhãn con',
                        count: 1,
                        value: 'child_stamp'
                    }
                ]
            }

        ]
    }];
window.navigator1 = render({
    tag: 'CollapsibleTreeNavigator'.toLowerCase(),
    style: {},
    props: {
        value: 'child_stamp',// tự động mở nếu con của group được chọn
        items: items

    },
    on: {
        change: function (event) {
            console.log('change')
            absol.require('snackbar').show(`this.value=${this.value}`);
            console.log(event.data, event.value);
        },
        action: function (event) {
            console.log('action', event.action, event.data);
        }
    }
})
```