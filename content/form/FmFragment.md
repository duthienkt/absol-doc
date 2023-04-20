# <span class="mdi mdi-cube-scan"></span> `FmFragment`

## Mô tả

### LifeCycle

- onCreate: chuẩn  bị tạo view, có thể override 
- buildContentView + bind
- onCreated: sau khi view đã được tạo, có thể override
- chờ khởi chạy tự động hoặc bởi fragment cha
- sau onStart=>onResume lần đầu tiên, phương thức onReady sẽ được gọi
