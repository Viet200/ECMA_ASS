import { getAll } from "../API/Post";
const Content_post = {
        async render() {
            const { data } = await getAll();
            return /*html*/ `
        <div class="w-full h-auto mt-10">
            <div class="max-w-screen-lg m-auto h-auto flex justify-between flex-wrap">
                ${data.map((item)=> /*html*/ `
                <div class="w-80 h-72  relative mb-32">
                <div class="w-full h-full">
                    <img class="w-full h-full" src="${item.img}" alt="">
                </div>
                <div class="border_title_post absolute w-64 h-32 bg-white -bottom-16 left-8 rounded-sm text-center">
                    <div class="font-semibold mt-3 text-[#0d0d0d]">
                        ${item.title}
                    </div>
                    <div class="hover_post pt-3 font-medium text-[#0d0d0d]">
                        <a href="">Đọc Thêm</a>
                        <div class="border-post">
                            
                        </div>
                    </div>
                </div>
            </div>
                `).join("")}
            </div>
    </div>
        `;
    }
};
export default Content_post;