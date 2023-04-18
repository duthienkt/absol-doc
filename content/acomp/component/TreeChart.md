# TreeChart

## [<span class="mdi mdi-link-variant"></span>Demo](https://absol.cf/libs/absol-acomp/demo/treechart.html)

## props 

| Tên             | Kiểu dữ liệu | Chú thích                                                                           |
|-----------------|--------|-------------------------------------------------------------------------------------|
| maxHorizonLevel | `number` | Nhận giá trị từ 0-Inf, level tối đa dùng hiển thị theo chiều ngang. tính từ level 0 |
| data            |     `TreeChartData` | Dữ liệu dạng cây                                                                    |                                                                   |  


## Kiểu dữ liệu

### TreeChartData 

| Tên  | Kiểu dữ liệu                              | Chú thích                                             |
|------|-------------------------------------------|-------------------------------------------------------|
| name | `string`                                  | Tên của node, tùy chọn                                |
| text | `string`                                  | Text hiển thị, nếu không có thì dùng name để hiển thị |
| item | `Array<TreeChartData>`                    | Dữ liệu các node con, có thể null hoặc mảng rỗng      |
| fill | `string / Color`                          | Màu của node                                          |
| icon | `AbsolConstructDescriptor` hoặc `Element` | icon                                                  |

> Có thể dùng dữ liệu dạng {text, items...} tương tự SelectTreeMenu 

## Ví dụ

```js

var data = {
    text:"A",
    items:[
        {text:'B'},
        {
            text:'C',
            icon:'span.mdi.mdi-account',
            fill: 'red',
            items:[
                {text:'E'},
                {text:'F'}
            ]
        },
        {text:'D'},
    ]
}

var chart = _({
    tag: 'treechart',
    props: {
        data: data,
        maxHorizonLevel: 2
    }
});
document.body.appendChild(chart);
```