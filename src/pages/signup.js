import { signup } from "../API/user";

const Signup = {
    render() {
        return /* html */ `
        <div class="w-full pt-20 pb-60 h-full bg-[#9f9da7]">
            <div class="w-96 h-96 m-auto bg-white rounded-md text-center">
                <div class="font-medium pt-3 text-[#2b3e51] text-3xl">Đăng ký tài khoản</div>
                <form class="ml-6 my-10 form-signup">
                <div class="mb-3">
                    <input type="text" class="form-control w-80 h-14 ml-2" id="username" placeholder="Tên tài khoản">
                </div>
                <div class="mb-3">
                <input type="text" class="form-control w-80 h-14 ml-2" id="email" placeholder="Email">
                </div>
                <div class="mb-3">
                <input type="text" class="form-control w-80 h-14 ml-2" id="password" placeholder="Mật khẩu">
                </div>
                <div class="mb-3 hidden">
                    <input type="text" class="form-control" id="vaiTro" value = "2">
                </div>
                <button class="btn btn-primary bg-[#3ca9e2] w-80 h-14 mr-5 font-medium text-xl">Đăng ký</button>
            </form>
            </div>
        </div>
        `;
    },
    afterRender() {
        const formSignup = document.querySelector(".form-signup");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            try {
                const { data } = signup({
                    username: document.querySelector("#username").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                    vaiTro: document.querySelector("#vaiTro").value,
                });
                console.log(data);
                alert("Đăng ký tài khoản thành công, chuyển đến trang đăng nhập !");
                document.location.href = "/signin";
            } catch (error) {
                console.log(error);
            }
        });
    },
};
export default Signup;