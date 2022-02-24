import toastr from "toastr";
import $ from "jquery";
import validate from "jquery-validation";
import { signin } from "../API/user";

const Signin = {
    render() {
        return /* html */ `
        <div class="w-full pt-20 pb-60 h-full bg-[#9f9da7]">
            <div class="w-96 h-96 m-auto bg-white rounded-md text-center">
                <div class="font-medium pt-5 text-[#2b3e51] text-3xl">Đăng nhập tài khoản</div>
                <form class="ml-6 my-10 form-signin" id="form-singin">
                <div class="mb-3">
                <input type="text" name="e-mail" class="form-control w-80 h-14 ml-2" id="email" placeholder="Email">
                </div>
                <div class="mb-3">
                <input type="password" name="pass-word" class="form-control w-80 h-14 ml-2" id="password" placeholder="Mật khẩu">
                </div>
                <div class="mb-3 hidden">
                    <input type="text" class="form-control" id="vaiTro" value = "2">
                </div>
                <button class="btn btn-primary bg-[#3ca9e2] w-80 h-14 mt-3 mr-5 font-medium text-xl">Đăng nhập</button>
            </form>
            </div>
        </div>
        `;
    },
    afterRender() {
        const formSignin = document.querySelector(".form-signin");

        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                localStorage.setItem("user", JSON.stringify(data.user));
                if (data) {
                    toastr.success("Đăng nhập thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default Signin;