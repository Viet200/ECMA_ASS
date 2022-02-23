import { add } from "../../../API/Products";
import { getAllCate } from "../../../API/Category";
import navAdmin from "../../../components/navAdmin";
import axios from "axios";
const addProduct = {
    render() {

        return /*html*/ `
        ${navAdmin.render()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
               Thêm mới sản phẩm
            </h2>
        </div>
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <a href="/admin/product" class="sm:ml-3">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <!-- Heroicon name: solid/check -->
          <svg class="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Quay lại
        </button>
            </a>

            <!-- Dropdown -->
            <span class="ml-3 relative sm:hidden">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
          More
          <!-- Heroicon name: solid/chevron-down -->
          <svg class="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
          <!-- Active: "bg-gray-100", Not Active: "" -->
          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0">Edit</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1">View</a>
        </div>
      </span>
        </div>
    </div>
        </div>
    </header>
        <form class="ml-6 my-10 form-addProduct">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Tên</label>
            <input type="text" class="form-control" id="addNamePro">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Ảnh</label>
            <input type="file" class="form-control" id="addImagePro">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Giá</label>
            <input type="number" class="form-control" id="addPricePro">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Sale</label>
            <input type="number" class="form-control" id="addSalePro">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Mô tả</label>
            <input type="text" class="form-control" id="addDescPro">
        </div>
        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Danh mục</label>
        <div class="input-group mb-3">
        <select class="custom-select form-control" id="inputGroupSelect02">
        </select>
      </div>
    </div>
        <button type="submit" class="btn btn-primary bg-[#0d6efd]" id="btn_Pro">Thêm</button>
    </form>
        `;
    },
    async afterRender() {
        const { data } = await getAllCate();
        var select = document.querySelector(".custom-select");
        var result = data.map((item) => {
            return `
                <option value="${item.id}">${item.Cate_name}</option>
            `;
        }).join("");
        select.innerHTML = result;
        const form_addPro = document.querySelector(".form-addProduct");
        const imgProduct = document.querySelector("#addImagePro");
        imgProduct.addEventListener("change", async(e) => {
            const file = e.target.files[0];
            const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/daa9dhzta/image/upload";
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "yllflmbh");
            const { data } = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/x-www-formendcoded",
                },
            });
            form_addPro.addEventListener("submit", (e) => {
                console.log(select.value);
                e.preventDefault();
                const product = {
                    "product_name": document.querySelector("#addNamePro").value,
                    "img": data.url,
                    "price": document.querySelector("#addPricePro").value,
                    "sale": document.querySelector("#addSalePro").value,
                    "desc": document.querySelector("#addDescPro").value,
                    "categoryId": select.value
                };
                add(product);
            });
        });

    }
};
export default addProduct;