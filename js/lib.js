
const products = [
    {
        id: 1,name: "BT21 đặc biệt", price: "180.000 VNĐ", image: "../assets/images/bt211.jpg",category: "doll"
        ,description: "Sản phẩm BT21 handmade được móc bằng len cao cấp."
    },
    {
        id: 2,
        name: "Gấu Tata BT21",
        price: "140.000 VNĐ",
        image: "../assets/images/tata.jpg",
        category: "doll",
        description: "Móc len thủ công hình Tata BT21."
    },
    {
        id: 3,
        name: "Hoa cẩm tú cầu",
        price: "50.000 VNĐ",
        image: "../assets/images/camtucau.jpg",
        category: "flower",
        description: "Hoa len trang trí thủ công."
    },
    {
        id: 4,
        name: "Cún cơm nắm",
        price: "69.000 VNĐ",
        image: "../assets/images/cun.jpg",
        category: "doll",
        description: "Móc len hình cún cơm nắm."
    },
    {
        id: 5,
        name: "Gấu móc khóa các loại",
        price: "69.000 VNĐ",
        image: "../assets/images/gau.jpg",
        category: "doll",
        description: "Móc khóa gấu len dễ thương."
    },
    {
        id: 6,
        name: "Móc khóa bó hoa",
        price: "79.000 VNĐ",
        image: "../assets/images/bohoahong.jpg",
        category: "flower",
        description: "Bó hoa len mini làm móc khóa."
    },
    {
        id: 7,
        name: "Lót ly cà chua",
        price: "39.000 VNĐ",
        image: "../assets/images/cachua.jpg",
        category: "flower",
        description: "Lót ly handmade hình cà chua."
    },
    {
        id: 8,
        name: "Len MikCoton",
        price: "10.000 VNĐ",
        image: "../assets/images/mikcoton.jpg",
        category: "yarn",
        description: "Len sợi MikCoton mềm mại."
    },
    {
        id: 9,
        name: "Len nhung đũa",
        price: "17.000 VNĐ",
        image: "../assets/images/nhungdua.jpg",
        category: "yarn",
        description: "Len nhung đũa chuyên móc thú."
    },
    {
        id: 10,
        name: "Len nhung gấu",
        price: "13.500 VNĐ",
        image: "../assets/images/nhunggau.jpg",
        category: "yarn",
        description: "Len nhung gấu mềm và xốp."
    },
    {
        id: 11,
        name: "Len bông xù",
        price: "20.000 VNĐ",
        image: "../assets/images/bongxu.jpg",
        category: "yarn",
        description: "Len bông xù tạo hiệu ứng lông."
    },
    {
        id: 12,
        name: "Len CotonLove",
        price: "23.500 VNĐ",
        image: "../assets/images/cotonlove.jpg",
        category: "yarn",
        description: "Len cotton chất lượng cao."
    },
    {
        id: 13,
        name: "Kim móc len",
        price: "15.500 VNĐ",
        image: "../assets/images/kimmoc.jpg",
        category: "yarn",
        description: "Kim móc nhiều kích cỡ."
    },
    {
        id: 14,
        name: "Móc cài đánh dấu",
        price: "1.000 VNĐ",
        image: "../assets/images/mocdd.jpg",
        category: "yarn",
        description: "Phụ kiện đánh dấu mũi móc."
    },
    {
        id: 15,
        name: "Kim khâu len",
        price: "1.000 VNĐ",
        image: "../assets/images/kimkhau.jpg",
        category: "yarn",
        description: "Kim khâu hoàn thiện sản phẩm."
    },
    {
        id: 16,
        name: "Chart gấu hình vuông",
        price: "Miễn phí",
        image: "../assets/images/chart1.jpg",
        category: "chart",
        description: "Chart móc gấu hình vuông."
    },
    {
        id: 17,
        name: "Chart lót ly quả táo",
        price: "Miễn phí",
        image: "../assets/images/chart2.jpg",
        category: "chart",
        description: "Chart móc lót ly quả táo."
    },
    {
        id: 18,
        name: "Chart máy ảnh",
        price: "Miễn phí",
        image: "../assets/images/chart3.jpg",
        category: "chart",
        description: "Chart móc máy ảnh mini."
    }
];
// 1. Logic xử lý Giỏ hàng (Đồng bộ số lượng qua localStorage)
let cart = Number(localStorage.getItem("cart_count")) || 0;

// Cập nhật số lượng lên giao diện ngay khi vừa tải trang
document.addEventListener("DOMContentLoaded", function () {
    const cartBadge = document.getElementById("cart-count");
    if (cartBadge) {
        cartBadge.innerText = cart;
    }

    const addButtons = document.querySelectorAll(".add-cart");
    addButtons.forEach(button => {
        button.addEventListener("click", () => {
            cart++;
            localStorage.setItem("cart_count", cart); // Lưu vào bộ nhớ trình duyệt
            
            const badge = document.getElementById("cart-count");
            if (badge) {
                badge.innerText = cart;
            }
            alert("Đã thêm sản phẩm vào giỏ hàng thành công!");
        });
    });
});
// 2. Logic xử lý Bộ lọc sản phẩm (Đã tối ưu mượt mà)
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Đổi màu nút đang chọn làm nổi bật (Active state)
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        const productCards = document.querySelectorAll(".product");
       productCards.forEach(product => {
            if (filter === "all" || product.dataset.category === filter) {
                product.style.display = "block"; // Hiện sản phẩm hợp lệ
            } else {
                product.style.display = "none";  // Ẩn các sản phẩm khác
            }
        });
    });
});

// 3. Logic Bộ tính toán số lượng len
function calculateYarn() {
    const length = Number(document.getElementById("length").value);
    
    if (!length || length <= 0) {
        document.getElementById("result").innerHTML = `<span class="text-danger">Vui lòng nhập số chiều dài hợp lệ lớn hơn 0!</span>`;
        return;
    }

    // Thuật toán giả định: cứ 50cm chiều dài cần khoảng 2 cuộn len
    const yarnNeeded = Math.ceil((length * 2) / 50);
    document.getElementById("result").innerHTML = `Bạn cần khoảng <b class="text-primary">${yarnNeeded}</b> cuộn len`;
}
// ======================
// TRANG CHI TIẾT SẢN PHẨM
// ======================

if (window.location.href.includes("detail.html"))  {

    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("id"));

    const product = products.find(p => p.id === productId);

    if (product) {

        document.getElementById("product-name").innerText =
            product.name;

        document.getElementById("product-price").innerText =
            product.price;

        document.getElementById("product-description").innerText =
            product.description;
        document.getElementById("product-image").src =
    product.image;

    } else {

        document.querySelector(".container").innerHTML =
            "<h2 class='text-center text-danger'>Không tìm thấy sản phẩm</h2>";
    }
}
// Thêm đoạn này vào file js/lib.js để nút Mua ở trang chủ hoạt động
document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".add-cart");
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Đã thêm sản phẩm vào giỏ hàng thành công!");
        });
    });
});