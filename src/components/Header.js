const Header = {
    render() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        return /* html */ `
        <div class="w-full h-auto bg-black py-3">
        <div class="max-w-screen-lg h-auto m-auto flex justify-between">
            <div class="menu-top text-sm">
                ${localStorage.getItem("user") ? `<ul class="flex">
                <a id="account-email"></a>
                <a herf="" id="logout" class="cursor-pointer">Logout</a>
                </ul>` : `<a href="/signin" class="mr-5 text-whilte hover:underline">Đăng nhập</a>
                <a href="/signup" class="  text-whilte-900 ">Đăng ký</a>`}
            </div>
        </div>
    </div>
    <div class="w-full h-auto py-5 ">
        <div class=" h-auto m-auto flex justify-between ">
            <div class=" float-right">
                <a href="/"> <img  src="../../img/logo.png" alt="" width="150px" height="100px"></a>
            </div>
            <div class="w-30 mt-10">   
            <form method="get">
            <input type="text" class="w-[450px] h-[35px] pl-[10px]" name="keyword" id="keyword"
                autocomplete="off" placeholder="Tìm kiếm sản phẩm ...">
            <button type="submit" class="btn-search">
                <i class="fas fa-search"></i>
            </button></div>
            <ul class="ul w-auto flex justify-between items-center">
                <li>
                    <a href="/">TRANG CHỦ</a>
                </li>
                <li>
                    <a href="/products">SẢN PHẨM</a>
                </li>
                <li>
                    <a href="/post">BÀI VIẾT</a>
                </li>
                <li>
                    <a href="/contact">LIÊN HỆ</a>
                </li>
               
                <div class="w-10 h-10 bg-[#eceff6] flex justify-center rounded-full items-center relative">
                    <a href="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
                    <div class="absolute w-5 h-5 -top-2 right-0 rounded-full flex justify-center items-center">
                        <a href="" class="text-white text-sm"></a>
                    </div>
                </div>
            </ul>
        </div>
    </div>
        `;
    },
    afterRender() {
        const logout = document.querySelector("#logout");
        logout.addEventListener("click", () => {
            localStorage.removeItem("user");
            document.location.href = "/";
        });
    },
};
export default Header;