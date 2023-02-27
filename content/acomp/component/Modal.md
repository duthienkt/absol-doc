# Modal

<button class="v-btn v-btn--outlined" data-on-click="showModal()">ShowModal</button>

```js
var myModal = absol._({
        tag: 'modal',
        child: [
            '<h1>5</h1>'
        ]
});
```

Để lấy children đã thêm vào, xử dụng method  `getChildren`, ví dụ
```js
absol._({
  tag: 'button',
  child: {text: 'Show Modal'},
  on: {
    click: function () {
      demo1.addChild(myModal);
      var count = 5;
      setTimeout(function tick() {
        if (count <= 0) myModal.remove();
        else {
          myModal.getChildren()[0].innerHTML = (--count) + '';
          setTimeout(tick, 1000);
        }
      }, 1000);
    }
  }
}).addTo(demo1);
```

# Loading Cube Modal

<button class="v-btn v-btn--outlined" data-on-click="showCubeLoadingModal()">ShowCubeLoadingModal</button>

```js
function showCubeLoadingModal(){
  var LoadingCubeModal = absol.require('loadingcubemodal');
  var token = LoadingCubeModal.show();
  //dùng token để xác định quyền được đóng, 
  //nếu có 1 nơi khác gọi sau thì token sẽ mất hiệu lực 
  setTimeout(function () {
    LoadingCubeModal.close(token);
  }, 3000);
}
```
> trong được hợp buộc phải đóng thì gọi truyền vào `null` thay cho `token`



