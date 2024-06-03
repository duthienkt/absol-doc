
Lưu ý, module đang hoàn thiện, chưa đủ chức năng như DynamicTable

```js
var cache = {};
var adapter = {
    data: {
        head: {
            rows: [
                {
                    cells: [
                        {
                            child: { text: 'STT' }
                        },
                        {
                            child: { text: 'Hoàn thành' }
                        },
                        {
                            child: { text: 'Tên' }
                        },
                        {
                            child: { text: 'Kết thúc' }
                        },
                        {
                            child: 'span.bsc-icon-hover-black.mdi.mdi-table-settings'
                        }
                    ]
                }
            ]
        },
        body: {
            getLength: function () {
                //return 1000;
                return Promise.resolve(1000);//có thể trả trực tiếp kết quả, không nhất thiết phải là bất đồng bộ
            },
            getRowAt: function (i) {
                cache[i] =cache[i]||absol.string.randomPhrase(30);
                //dữ liệu trả tra có thể là object, có thể đồng bộ hoặc bất đồng bộ trong promise
                return Promise.resolve({
                    stt: i,
                    completed: ((i * 3) % 7) || ((i * 17) % 13),
                    name: cache[i]
                });
            },
            rowTemplate: {
                cells: [
                    {
                        child: 'span.as-dt-row-index',
                    },
                    {
                        render: function (elt, data, controller) {//data lấy từ hàm getRowAt
                            elt.addChild(absol._(
                                data.completed % 2 ? 'span.mdi.mdi-check' : 'span'
                            ));
                        }
                    },
                    {
                        render: function (elt, data, controller) {
                            elt.addChild(absol._({
                                text: '' + data.name
                            }));
                        }
                    }, {
                        render: function (elt, data, controller) {//data from getRowAt
                            elt.addChild(absol._(
                                (data.completed % 2 && !(data.completed % 3)) ? 'span.mdi.mdi-check' : 'span'
                            ));
                        }
                    },
                    {
                        render: function (elt, data, controller) {}
                    }
                ]
            }
        }
    }
};

var table = absol._({
    tag: 'efficienttable',
    style: {
        width: '100%'
    },
    props: {
        adapter: adapter
    }
}).addTo(document.body);

```