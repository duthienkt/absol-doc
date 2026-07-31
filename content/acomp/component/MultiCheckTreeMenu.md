# MultiCheckTreeMenu

## Quy ước

Node cha sẽ là chọn tất cả nếu tất cả node con được chọn

Node noSelect được tính là không được chọn bởi user, nhưng nếu chọn bằng cách gán values thì vẫn được

Nếu chọn node cha, mà không phải tất cả node con được chọn thì node cha chỉ hiện dấu -

Mặc định, item có noView sẽ bị loại bỏ khỏi danh sách ngay từ bước đầu tiên gán vào items

Trong chế độ leafOnly, 1 node khôg có lá nào sẽ được bỏ qua khi tính selectAll
