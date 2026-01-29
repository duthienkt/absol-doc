# Hướng dẫn sử dụng StepIndicator

## Giới thiệu

StepIndicator là một thành phần giao diện người dùng hiển thị tiến trình qua các bước. Nó hữu ích để chỉ ra vị trí hiện tại của người dùng trong một quy trình nhiều bước.

## Tạo StepIndicator bằng cú pháp Absol

Bạn nên sử dụng cú pháp `absol._` để tạo đối tượng StepIndicator đúng chuẩn Absol:

```javascript
// Import nếu cần thiết
import 'absol-acomp/js/StepIndicator';

// Tạo đối tượng StepIndicator với nhãn và bước hiện tại
var stepIndicator = absol._({
    tag: "stepindicator",
    props: {
        labels: ["Bước 1", "Bước 2", "Bước 3"],
        idx: 0
    }
});

document.body.appendChild(stepIndicator);
```

**Giải thích:**
- `absol._({ tag: ..., props: {...} })` là cú pháp tạo phần tử mới trong Absol.
- `labels`: Mảng các nhãn cho từng bước.
- `idx`: Chỉ số bước hiện tại (bắt đầu từ 0).
- Có thể thêm vào DOM bằng `appendChild` hoặc các phương thức Absol khác.

Bạn cũng có thể thay đổi thuộc tính hoặc lắng nghe sự kiện:

```javascript
stepIndicator.labels = ["A", "B", "C"];
stepIndicator.idx = 1;
stepIndicator.on('change', function(e) {
    console.log('Chuyển sang bước', e.idx, e.label);
});
```

## Sử dụng labels với cú pháp rút gọn

Thuộc tính `labels` của StepIndicator hỗ trợ:
- Chuỗi ký tự đơn giản (ví dụ: "A", "B", "C")
- Chuỗi cú pháp rút gọn Absol (ví dụ: "span.mdi.mdi-account", "span.mdi.mdi-check")

Khi truyền chuỗi cú pháp rút gọn, StepIndicator sẽ tự động tạo phần tử tương ứng.

### Ví dụ sử dụng labels dạng ký tự và cú pháp rút gọn

```javascript
var stepIndicator = absol._({
    tag: "stepindicator",
    props: {
        labels: [
            "1", // Ký tự đơn giản
            "span.mdi.mdi-account", // Biểu tượng tài khoản
            "span.mdi.mdi-check"    // Biểu tượng check
        ],
        idx: 0
    }
});
document.body.appendChild(stepIndicator);
```

**Lưu ý:**
- Nếu label là chuỗi 1 ký tự, sẽ hiển thị trực tiếp.
- Nếu label là chuỗi cú pháp Absol (ví dụ: "span.mdi.mdi-icon"), sẽ hiển thị phần tử tương ứng (thường dùng cho icon).
- Bạn có thể kết hợp cả hai dạng trong cùng một StepIndicator.
