## [Demo](https://absol.cf/libs/absol-acomp/demo/tablescroller.html)

## Hướng dẫn

### Tạo mới

```js
//chuẩn bị dữ liệu
var cities = [...cityList];

//Tạo bảng theo cách thông thường              

var matrixTable = render({
	tag: 'table',
  child: [
    { tag:'thead', child:[...childList]},
    {
      tag: 'tbody',
      child: [
        {
        	tag: 'tr',
          child:[
            {
              tag: 'td', 
              class: 'as-drag-zone',
              child:[...moveIcon]
            
            }
            ,...otherCells]
        },
        ...otherRows
      ]
    }
  ]             
});

var currentCitiesArr = cities.slice();
var mTableScroller2 = _({
  tag: 'tablescroller',
  style: {
    height: '500px',
    width: '700px'
  },
  props: {
    fixedCol: 4
  },
  child: matrixTable,
  on:{
    orderchange: function(event){
      console.log(event.from, event.to);
      //cập nhật dữ liệu khi người dùng kéo thả
      var city = currentCitiesArr[event.from];
      currentCitiesArr.splice(event.from, 1);
      currentCitiesArr.splice(event.to, 0, city);
      console.log(currentCitiesArr.slice());
    }
  }
}).addTo(document.body);

```

> Kể từ phiên bản này trở đi, có thể sử dụng các đối tượng có tương tác như checkbox, button, radio... để trong phần cố định
> **Không** được thay đổi trường `fixedCol` sau khi tạo