import Navigo from "navigo";
import Home from "./pages/home";
import products from "./pages/products";
import iphone_products from "./pages/iphone_products";
import samsung_products from "./pages/samsung_products";
import Product_detail from "./pages/productDetails";
import Contact from "./pages/contact";
import Post from "./pages/post";
import Cart from "./pages/cart";
import Dashboard from "./pages/admin/dashboard";
import AdminCategory from "./pages/admin/category";
import addCategory from "./pages/admin/category/addCategory";
import editCategory from "./pages/admin/category/editCategory";
import AdminProduct from "./pages/admin/products";
import addProduct from "./pages/admin/products/addProduct";
import editProduct from "./pages/admin/products/editProduct";
import AdminPost from "./pages/admin/posts";
import addPost from "./pages/admin/posts/addPost";
import editPost from "./pages/admin/posts/editPost";
import signup from "./pages/signup";
import signin from "./pages/signin";
import users from "./pages/admin/users";
import addUser from "./pages/admin/users/addUser";
import editUser from "./pages/admin/users/editUser";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) {
        content.afterRender(id);
    }
};
router.on({
    "/": () => {
        print(Home);
    },
    "/products": () => {
        print(products);
    },
    "/iphone_products": () => {
        print(iphone_products);
    },
    "/samsung_products": () => {
        print(samsung_products);
    },
    "/product_detail/:id": ({ data }) => {
        print(Product_detail, data.id);
    },
    "/contact": () => {
        print(Contact);
    },
    "/post": () => {
        print(Post);
    },
    "/cart": () => {
        print(Cart);
    },
    "/admin/dashboard": () => {
        print(Dashboard);
    },
    "/admin/category": () => {
        print(AdminCategory);
    },
    "/admin/addCategory": () => {
        print(addCategory);
    },
    "/admin/edit/:id/Category": ({ data }) => {
        print(editCategory, data.id);
    },
    "/admin/product": () => {
        print(AdminProduct);
    },
    "/admin/addProduct": () => {
        print(addProduct);
    },
    "/admin/:id/editProduct": ({ data }) => {
        print(editProduct, data.id);
    },
    "/admin/post": () => {
        print(AdminPost);
    },
    "/admin/addPost": () => {
        print(addPost);
    },
    "/admin/:id/editPost": ({ data }) => {
        print(editPost, data.id);
    },
    "/signup": () => {
        print(signup);
    },
    "/signin": () => {
        print(signin);
    },
    "/admin/users": () => {
        print(users);
    },
    "/admin/addUser": () => {
        print(addUser);
    },
    "/admin/:id/editUser": ({ data }) => {
        print(editUser, data.id);
    },

});
router.resolve();