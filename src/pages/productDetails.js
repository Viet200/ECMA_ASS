import toastr from "toastr";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { get, getAll } from "../API/Products";
import { addToCart } from "../utils/cart";
import "toastr/build/toastr.min.css";

const productDetail = {
    async render(id) {
        const { data } = await get(id);
        const data2 = await getAll();
        return /* html */ `
        ${Header.render()}
        <div class="w-full h-auto">
        <div class="max-w-screen-lg m-auto h-auto flex py-2 border-b-2 border-[#f2f2f2]">
            <div class="text-[#5d5f6c]">
                Trang chủ
            </div>
            <div class="mx-2 text-xs leading-7 text-[#5d5f6c]">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <div class="text-[#5d5f6c]">
                Chi tiết sản phẩm
            </div>
        </div>
        <div class="max-w-screen-lg m-auto h-auto flex justify-between mt-5">
            <div class="flex w-5/6">
              
                <div>
                    <img src="${data.img}" alt="" class="w-96 mt-1 h-96 ml-2">
                </div>
            </div>
            <div class="w-4/6">
                <div class="text-4xl font-medium mb-3">
                ${data.product_name}
                </div>
                <div class="text-[#51545f] font-medium mb-3">
                ${data.desc}
                </div>
                <div class="text-[#b9b4c7] font-medium mb-1">
                    <del>${data.price}</del>
                </div>
                <div class="text-[#fe4c50] font-semibold text-2xl mb-5">
                ${data.sale}
                </div>
                <div class="flex">
                    <div class="text-[#1e1e27] mt-1">
                        Số lượng:
                    </div>
                    <div class="mx-3 border-1 h-10 w-28 flex justify-around">
                        <input type="number" id="inputQuantity" value="1" class="w-10 text-center mx-2">
                    </div>  
                </div>
                <div class="mt-8">
                    <button id="btnAddToCart" class="bg-orange-400 h-10 w-44 rounded-sm text-white">Thêm vào giỏ hàng</button> 
                </div>
            </div>
        </div>
        <div class="max-w-screen-lg m-auto h-auto">
            <div class="text-[#5d5f6c] text-2xl font-medium mt-14">
               Sản phẩm liên quan 
            </div>
            <div class="flex justify-between mt-3 flex-wrap">
            ${data2.data.map((item) => {
        if (item.categoryId == data.categoryId) {
            return /* html */ `
                        <div class="product w-60 h-auto text-center my-3 relative">
                        <img class="h-80" src="${item.img}" alt="">
                        <div class="align-center text-[#1e1e27] font-medium mb-3">
                            <a href="/product_detail/${item.id}">${item.product_name}</a>
                        </div>
                        <div class="flex justify-center pb-2">
                            <div class="text-red-500 mr-3 font-bold">
                            ${item.price}
                            </div>
                            <div class="text-[#b9b4c7] font-medium">
                            <del>${item.sale}</del>
                            </div>
                        </div>
                        <div class="cart w-full h-10 bottom-0 bg-red-500  hidden absolute">
                            <a href="/product_detail/${item.id}" class="font-semibold text-white leading-10">CHI TIẾT SẢN PHẨM</a>
                        </div>
                        </div>
                        `;
        }
    }).join("")
}
            </div>
        </div>
    </div>
    ${Footer.render()}
        `;
    },
    afterRender(id) {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const inputQuantity = document.querySelector("#inputQuantity");
        btnAddToCart.addEventListener("click", async () => {
            if (!localStorage.getItem("user")) {
                alert("Bạn cần đăng nhập để mua hàng !");
            } else {
                const { data } = await get(id);
                addToCart({ ...data, quantity: +inputQuantity.value }, () => {
                    toastr.success(`Thêm sản phẩm ${data.product_name} vào giỏ hàng thành công!`);
                });
            }
        });
    },
};
export default productDetail;