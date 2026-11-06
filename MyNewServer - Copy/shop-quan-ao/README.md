# UrbanWear – Website bán quần áo mẫu

Website tĩnh dùng **HTML, CSS và JavaScript**, phù hợp để thực hành trên Visual Studio Code.

## 1. Cấu trúc thư mục

```text
shop-quan-ao/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── hero.svg
    ├── ao-thun.svg
    ├── ao-so-mi.svg
    ├── quan-jeans.svg
    ├── quan-kaki.svg
    ├── ao-khoac.svg
    ├── tui-tote.svg
    ├── mu.svg
    └── ao-polo.svg
```

## 2. Cách chạy website

1. Giải nén `shop-quan-ao.zip`.
2. Mở Visual Studio Code.
3. Chọn **File → Open Folder** và mở thư mục `shop-quan-ao`.
4. Mở file `index.html`.
5. Có thể nhấp đúp `index.html` để mở bằng trình duyệt, hoặc cài tiện ích **Live Server** trong VS Code, nhấp chuột phải vào `index.html` và chọn **Open with Live Server**.

## 3. Chức năng hiện có

- Trang chủ giới thiệu cửa hàng.
- Hiển thị danh sách sản phẩm mẫu.
- Tìm kiếm sản phẩm theo tên.
- Lọc theo danh mục áo, quần và phụ kiện.
- Thêm sản phẩm vào giỏ hàng, xóa sản phẩm và tính tổng tiền.
- Giao diện co giãn cho điện thoại và máy tính.

## 4. Chỉnh sửa nội dung

- Sửa tên cửa hàng, menu và thông tin liên hệ trong `index.html`.
- Sửa màu sắc, kích thước và bố cục trong `style.css`.
- Thêm hoặc sửa sản phẩm trong mảng `products` ở đầu file `script.js`.
- Đặt ảnh sản phẩm vào thư mục `images/`, sau đó cập nhật đường dẫn ảnh trong `script.js`.

## 5. Lưu ý

Đây là website frontend để học tập. Giỏ hàng chỉ hoạt động trong trình duyệt; website chưa có cơ sở dữ liệu, đăng nhập, quản trị sản phẩm, đặt hàng thật hoặc thanh toán trực tuyến. Muốn triển khai bán hàng thực tế cần xây dựng backend, cơ sở dữ liệu, bảo mật và tích hợp thanh toán.
