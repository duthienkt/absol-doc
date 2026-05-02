# Cách debug component của absol


## Tìm listener, từ đó tìm element được tạo ở đâu

Ví dụ với menu chính

Bước 1: log element ra console từ cây Elements, ví dụ biến temp1, ví dụ menu sẽ có tên class là `am-springboard-menu`

Bước 2: gõ `temp1._azar_extendEvents.nonprioritize` ta sẽ có danh sách toàn bộ các listener user đã truyền vào

Bước 3. Ví dụ ở đay ta thấy trong object sự kiện press, muốn biết sự kiện `press`(custom event) có thể log tới `callback` trong `temp1._azar_extendEvents.nonprioritize.press[0].callback` sẽ tìm tới được code callback của dev sử dụng module

## Tìm tới code module

Bước 1 tương tự

Bước 2: gõ `temp1._azar_extendTags`, đây là 1 dictionary mà mỗi phần tử là constructor(function) dẫn tới code module, đồng thời cũng biết nó tạo từ tag nào
