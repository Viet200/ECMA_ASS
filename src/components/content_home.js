import { getAll } from "../API/Products";

const Content_home = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        <div class="w-full h-auto">
        <div class="max-w-screen-lg h-auto m-auto">
            <div class="w-80 m-auto flex flex-col items-center">
                <div class="text-2xl font-medium mt-4">
                    SẢN PHẨM
                </div>
                <div class="w-28 h-1 bg-yellow-500 my-3"></div>
                <div class="w-[800px] flex justify-between my-3">
                    <div class="w-[200px] category bg-yellow-500 hover:bg-green-900 h-11 items-center text-white flex justify-center font-medium rounded-sm ml-1"><i class="fa-solid fa-mobile-screen"></i> <a href="/products" class="text-black">Điện thoại</a>
                       
                    </div>
                    <div class="w-[100px] ml-1 category bg-yellow-500 hover:bg-green-900 h-11 items-center text-white flex justify-center font-medium rounded-sm">
                        <a href="/iphone_products" class="text-black" id="nam">Tablet</a>
                    </div>
                    <div class="w-[100px] ml-1 category bg-yellow-500 hover:bg-green-900 h-11 items-center text-white flex justify-center font-medium rounded-sm">
                        <a href="/samsung_products" class="text-black">Phụ kiện</a>
                    </div>
                    <div class="w-[100px] ml-1 category bg-yellow-500 hover:bg-green-900 h-11 items-center text-white flex justify-center font-medium rounded-sm">
                    <a href="#" class="text-black">Sửa chữa</a>
                     </div>
                    <div class="w-[100px] ml-1 category bg-yellow-500 hover:bg-green-900 h-11 items-center text-white flex justify-center font-medium rounded-sm">
                    <a href="#" class="text-black">Tin tức</a>
                    </div>
                    <div class="w-[100px] ml-1 category bg-yellow-500 hover:bg-green-900 h-11 items-center text-white flex justify-center font-medium rounded-sm">
                    <a href="#" class="text-black">Tra cứu </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full h-auto rounded-md border-1 ">
        <div class="max-w-screen-lg m-auto h-auto mt-5">
            <div class="flex justify-between flex-wrap mt-4">
            ${data.map((item) => /* html */`
            <div class="product w-60 h-auto text-center my-3 relative">
                <img class="h-96 mt-3 w-[250px] h-[250px] mr-10" src="${item.img}" alt="">
                <div class="align-center text-[#1e1e27] font-medium mb-3">
                    <a href="">${item.product_name}</a>
                </div>
                <div class="flex justify-center pb-2">
                    <div class="text-red-500 mr-3 font-bold">
                    ${item.price}
                    </div>
                    <div>
                        <del class="text-[#b9b4c7] font-bold">${item.sale}</del>
                    </div>
                </div>
                <div class="cart w-full h-10 bottom-0 bg-red-500  hidden absolute">
                    <a href="/product_detail/${item.id}" class="font-semibold text-white leading-10">Xem sản phẩm </a>
                </div>
            </div>
                `).join("")}
            </div>
        </div>
    </div>
        `;
    },
};
export default Content_home;