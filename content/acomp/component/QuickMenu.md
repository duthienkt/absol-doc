## Dữ liệu mẫu

Sử dụng định dạng chung cho các loại menu

```js
//trường cmd là trường tùy chọn, có thể thay thế bằng các trường khác,
//không được tên trường  trường đặc biệt như className, tagName, childNodes..., 
//các trường này trùng với các trường của HTMLElement
var menuProps = {
  items: [
    {
      text: 'Cut', key: 'extendStyle[color=red]', cmd: 'cut',
      extendStyle: {
        color: 'red'
      },
      icon: 'span.mdi.mdi-content-cut'
    },
    "================================",
    { text: 'Undo', key: 'Ctrl+Z', cmd: 'undo', icon: 'span.mdi.mdi-undo' },
    { text: 'Redo', key: 'Ctrl+Y', cmd: 'redo', icon: 'span.mdi.mdi-redo' },

    { text: 'Copy', key: 'extendClasses[hover-blue]', cmd: 'copy', extendClasses: 'hover-blue' },
    {
      text: 'Paste',
      key: 'icon[.mdi.mdi-flash]',
      cmd: 'paste',
      icon: 'span.mdi.mdi-flash',
      extendClasses: 'hover-yellow'
    },
    "==============================",
    { text: 'Find', key: 'iconSrc', cmd: 'find' },
    { text: 'Replace', key: 'Ctrl+R', cmd: 'replace' },
    "=============================",
    { text: 'Find in Nodes', key: 'Ctrl+Shift+F' },
    { text: 'Replace in Nodes', iconSrc: 'http://absol.cf/exticons/extra/folder-git.svg', key: 'svgIcon' }
  ]
};
```

## Tạo mới

### Dạng tĩnh, không thay đổi thông số
```js
var button = render({
  tag: 'flexiconbutton',
  style:{
    margin: '5px'
  },
  props:{
    text: 'Anchor = '+JSON.stringify(anchor)
  }
});
var holder = absol.QuickMenu.toggleWhenClick(button, {
  menuProps: menuProps,
  anchor: [1,2,3,4, 'modal'],
  onSelect: function (item){
    console.log(item);
  }
});
```
Tham khảo anchor ở phần [Follower](https://absol.cf/libs/absol-acomp/demo/follower.html)

### Dạng động, thông số thay đổi theo tùy lần nhấn

```js

var counter = 10;

var button = render({
  tag: 'flexiconbutton',
  style:{
    margin: '200px'
  },
  props:{
    text: 'Counter = '+ counter
  }
});
var holder = absol.QuickMenu.toggleWhenClick(button, {
  getMenuProps: function () {
    return {
      items: [
        {
          text: 'Cut', key: 'extendStyle[color=red]', cmd: 'cut',
          extendStyle: {
            color: 'red'
          },
          icon: 'span.mdi.mdi-content-cut'
        },
        "================================",
        { text: 'Lần thứ ' + counter, value: counter },
        {text: 'Menu text', value:123}
      ]
    }
  },
  getAnchor: function (){
    return [Math.random() * 15 >>0,Math.random() * 15 >>0, Math.random() * 15 >>0]
  },
  onSelect: function (item) {
    console.log(item)
  },
  onOpen: function (){
    //Khi menu mở ra
  },
  onClose: function (){
    //khi nenu được đóng lại
    counter--;
    button.text =  'Counter = '+ counter;
    if (!counter) holder.remove();//remove quickmenu form button
  }
});
```


### Chặn QuickMenu trước khi được mở

```js

//...
var holder = absol.QuickMenu.toggleWhenClick(button, {
  onClick: function(event){
    if (checkSomething(event)){
    	event.cancel();// chặn không cho menu mở ra
    }
  }
  getMenuProps: function () {
    //...
  },
  //
});


```

## Hủy QuickMenu


```js
	//...
	holder.remove();
```



