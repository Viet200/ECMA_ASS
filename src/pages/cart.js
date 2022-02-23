import Header from "../components/Header";
import Footer from "../components/Footer";
import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const cart = {
        render() {
            let cart = [];
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }
            let sum = 0;
            let result = 0;
            // cart.forEach((item) => {
            //     new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(sum = (item.price - (item.price * item.sale / 100)) * item.quantity);
            // });

            // console.log(sum);
            return /*html*/ `
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
                   Giỏ hàng
                </div>
            </div>
            <div class="w-full h-auto py-3">
            <div class="max-w-screen-lg h-auto m-auto border-1 border-[#ededed] py-4">
                <div class="w-full h-auto flex justify-between font-bold px-4">
                    <div class="w-1/3">
                        SẢN PHẨM
                    </div>
                    <div class="w-1/5">
                        GIÁ TIỀN
                    </div>
                    <div class="w-1/5">
                        SỐ LƯỢNG
                    </div>
                    <div class="w-1/5">
                        TỔNG TIỀN
                    </div>
                </div>
                <div class="border-cart w-full h-auto flex justify-between mt-6 px-4 pt-4 flex-wrap">
                    ${cart.map(item => /*html*/`
                    <div class="w-1/3 flex items-center">
                    <div>
                        <img src="${item.img}" alt="" class="w-16">
                    </div>
                    <div class="ml-2">
                        ${item.product_name}
                    </div>
                </div>
                <div class="w-1/5 flex items-center">
                    <div class="text-[#fe4c50] font-bold">
                    ${item.price}
                    </div>
                    <del class="ml-2 text-[#d1ceda]">
                    ${item.sale}
                    </del>
                </div>
                <div class="w-1/5 flex items-center">
                    <div class="flex w-32 justify-center py-2 rounded-sm">
                        <button data-id="${item.id}" class="btn btn-increase w-8 bg-[#d1ceda] rounded-sm flex items-center justify-center">+</button>
                        <input type="number" value="${item.quantity}" class="w-9 ml-3"/>
                        <button data-id="${item.id}" class="btn btn-decrease w-8 bg-[#d1ceda] rounded-sm flex items-center justify-center">-</button>
                    </div>
                </div>
                <div class="w-1/5 flex items-center">
                    <div class="text-[#fe4c50] font-bold">
                        ${sum = item.price *item.quantity}
                        <div class="hidden">${result+=sum}</div>
                    </div>
                    <div>
                    <button data-id="${item.id}" class="btn btn-delete rounded-md h-7 flex items-center justify-center text-white bg-red-500 p-2 ml-8">Xóa</button>
                    </div>
                </div>
                    `).join("")}
                </div>
            </div>
        </div>
        <div class="w-full h-auto">
            <div class="max-w-screen-lg m-auto h-auto flex items-center py-2">
                <div class="text-4xl">
                    <i class="fas fa-hand-holding-usd"></i>
                </div>
                <div class="text-xl ml-3">Tổng Thanh Toán: 
                <span class="text-[#fe4c50] font-medium">
                    ${new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(result)}
                 </span>
                 </div>
                <div class="ml-4 bg-[#f74877] px-2 py-1 rounded-md text-white">
                <a href="#" class="hover:text-black"> Đặt hàng</a>
                </div>
            </div>
        </div>
        
            ${Footer.render()}
        `;
    },
    afterRender(){
        const btns = document.querySelectorAll(".btn");
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener("click", () => {
                if(btn.classList.contains("btn-increase")){
                    increaseQuantity(id, () => reRender(cart, "#app"));
                } else if(btn.classList.contains("btn-decrease")){
                    decreaseQuantity(id, () => reRender(cart, "#app"));
                } else {
                    removeItemInCart(id, () => {
                        toastr.success("Xóa sản phẩm thành công !");
                        reRender(cart, "#app");
                    });
                }
            });
        });
    }
};
export default cart;