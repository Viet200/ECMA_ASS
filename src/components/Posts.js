import { getAll } from "../API/Post";
const Posts = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
       
            ${data.map((item) => /* html */
        `<div class="blog w-80 h-80 relative flex justify-center my-3">
                <img class="w-full h-full" src="${item.img}" alt="">
                <div class="title-blog bg-white h-auto flex flex-col text-center absolute top-28 rounded-sm hidden">
                    <div class="w-60 px-5 font-medium mt-3">
                    ${item.title}
                    </div>
                    <div class="font-medium mt-3 text-red-500 pb-3">
                        <a href="">Đọc Thêm</a>
                    </div>
                </div>
            </div>
            `
    ).join("")}
                
            </div>
        </div>
    </div>
    `;
    }
};
export default Posts;