## Hiển thị modal câu hỏi yes/no
```js
ModalElement.question({
  title: LanguageModule.text("war_title_delete_shift"),
  message: LanguageModule.text2("war_txt_detele", [host.database.shifts.items[index].name]),
  onclick: function(sel){
    if (sel == 0){//yes
      hr.shifts.deleteShift(host, id).then(function(value){
        resolve(value);
      });
    }
  }
});
```