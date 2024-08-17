//b1 khởi tạo đối tượng product
// khởi tạo danh sách sản phẩm để bán
let products = [
    { name: "iphone5", price: 50000 },
    { name: "iphone6", price: 70000 },
    { name: "iphone10", price: 100000 },
    { name: "iphone15", price: 150000 },
]
document.write(JSON.stringify(products));

// tạo mảng giỏ hàng để chứa các sản phẩm
let shoppingCart = [];
//Viết hàm để thêm sản phẩm vào giỏ hàng
function addToCart(productName, price, quantity) {

    // lấy dữ liệu từ người dùng nhập
    let nameProduct = prompt("Mời nhập tên sản phẩm");
    let flag = false;
    // kiểm tra xem 
    let findProduct = products.find((item) => {
        return item.name == nameProduct;
    })
    console.log(("findProduct", findProduct));
    if (!findProduct) {
        console.log("Không có");

    } else {
        /*
        khi thêm sản phẩm vào giỏ thàng thì kiểm tra xem sản phẩ có trong giỏ hàng hcuwa, nếu có thì tăng số lượng
        nếu chưa có thì push vào
         */
        let findIndex = shoppingCart.findIndex((item) => {
            return item.name == nameProduct;
        })
        // findIndex=-1 chứng tỏ chưa có trong giỏ hàng
        if (findIndex == -1) {
            shoppingCart.push({ ...findProduct, quantity: 1 })
        } else {
            // chứng tỏ trong giỏ hàng đã có rồi
            shoppingCart[findIndex].quantity = ++shoppingCart[findIndex].quantity;
        }

    }
    console.log("Giỏ hàng của bạn", shoppingCart);
}

//Viết một hàm removeFromCart(productName) để xóa một sản phẩm khỏi giỏ hàng.
function removeFromCart(productName) {
    // cho người dùng xóa
    let nameProduct = prompt("nhập tên sản phẩm muốn xóa");
    let findIndex = shoppingCart.findIndex((item) => {
        return item.name == nameProduct;
    })
    if (findIndex == -1) {
        console.log("sản phẩm không có trong giỏ hàng");

    } else {
        shoppingCart.splice(findIndex, 1);
        console.log("giỏ hàng hiện tại ", shoppingCart);

    }

}

//Viết một hàm displayCart() để hiển thị thông tin chi tiết của giỏ hàng,
// bao gồm tên sản phẩm, giá, số lượng, và tổng giá trị cho từng sản phẩm.
function displayCart() {
    if (!shoppingCart.length) {
        document.write(JSON.stringify(products));
        document.write("<br>")
        document.write("không có sản phẩm trong giỏ hàng");
    } else {
        document.write(JSON.stringify(products));
        document.write("<br>")
        document.write(JSON.stringify(shoppingCart))
    }
}






