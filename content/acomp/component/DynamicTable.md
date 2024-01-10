## DynamicTable

### style

Để hiển thị như inline-block: thêm class *'as-inline'*

### sort

**Nhiều key trong 1 cột**

```js
adapter = {
    data: {
        head: {
            rows: [
                {
                    cells: [
                        { id: 'cb' },
                        { child: absol._({ text: "STT" }), idx: 'cb_1' },
                        {
                            child: absol._({ text: "MSSV" }), id: 'cb_2',
                            sortKey: ['class', 'score'],// hoặc "class;score" hoặc "class score", key không chứa dấu space
                            sortMenu: {
                                'class': ["Xếp lớp tăng dần", "Xếp lớp giảm dần"],
                                'score': ["Xếp điểm tăng dần", "Xếp điểm giảm dần"]
                            }
                        },
                        { child: { text: 'Tên' }, id: 'cb_3' },
                        //...
                    ]
                }
            ]
        },
        //...
    }
}
```
