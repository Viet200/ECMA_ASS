import navAdmin from "../../../components/navAdmin";
import { getAll, remove } from "../../../API/Products";

const AdminProducts = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
            ${navAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Quản lý sản phẩm
                </h2>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/admin/addProduct" class="sm:ml-3">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <!-- Heroicon name: solid/check -->
              <svg class="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Thêm mới
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
        <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-6 sm:px-0">
                    <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Img
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Giá
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sale
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            CategoryId
        </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        </th>
        <th></th>
            </tr>
          </thead>
            ${data.map((item) => /* html */
        `
        <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
                ${item.id}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">${item.product_name}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
           <img class="w-20  rounded-sm" src="${item.img}">
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            ${item.price}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            ${item.sale}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${item.categoryId}
        </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <div class="bg-red-500 w-12 h-6 flex justify-center items-cente rounded-sm">
          <a href="/admin/${item.id}/editProduct" class="text-white">Sửa</a>
          </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> 
          <div class="bg-red-500 w-12 h-6 flex justify-center items-cente rounded-sm">
          <a href="#" data-id="${item.id}" class="text-white btnDelete">Xóa</a>
          </div>
        </td>
        </tr>
      </tbody>
 `).join("")}
    </table>
    </div>
  </div>
</div>
</div>
                    </div>
                </div>
                <!-- /End replace -->
            </div>
        </main>
        `;
    },
    afterRender() {
        const btnDelete = document.querySelectorAll(".btnDelete");
        btnDelete.forEach((button) => {
            button.addEventListener("click", () => {
                const { id } = button.dataset;
                const confirm = window.confirm("Bạn có muốn xóa không ?");
                if (confirm) {
                    remove(id);
                    button.parentNode.parentNode.parentNode.remove();
                }
            });
        });
    },
};
export default AdminProducts;