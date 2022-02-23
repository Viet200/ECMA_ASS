const Content_contact = {
    render() {
        return /* html */ `
        < <div class="w-full h-auto">
        <div class="max-w-screen-lg m-auto h-auto">
            <div class="w-full h-auto mt-10 flex justify-between">
                <div class="w-5/12 h-auto">
                    <div class="font-medium text-3xl mb-10">
                    Tổng đài hỗ trợ (Miễn phí gọi)
                    </div>
                    <div class="mb-10 text-[#6d545f] text-lg">
                    Gọi mua: 1800.1060 (7:30 - 22:00)
                    </div>
                    <div class="mb-10 text-[#6d545f] text-lg">
                    Kỹ thuật: 1800.1763 (7:30 - 22:00)
                    </div>
                    <div class="mb-10 text-[#6d545f] text-lg">
                    Khiếu nại: 1800.1062 (8:00 - 21:30)
                    </div>

                    <div class="mb-10 text-[#6d545f] text-lg">
                    Bảo hành: 1800.1064 (8:00 - 21:00)
                    </div>
                    <div class="flex w-40 justify-between">
                        <div class="w-8 h-8 bg-[#3a61c9] flex justify-center items-center rounded-2xl"><i class="fab fa-facebook text-white"></i></div>
                        <div class="w-8 h-8 bg-[#41a1f6] flex justify-center items-center rounded-2xl"><i class="fab fa-twitter text-white"></i></div>
                        <div class="w-8 h-8 bg-[#fb4343] flex justify-center items-center rounded-2xl"><i class="fab fa-google-plus-g text-white"></i></div>
                        <div class="w-8 h-8 bg-[#8f6247] flex justify-center items-center rounded-2xl"><i class="fab fa-instagram-square text-white"></i></div>
                    </div>
                </div>

                <div class="w-5/12 h-auto">
                    <div class="font-medium text-3xl mb-5">
                        HÃY GỬI TIN NHẮN CHO CHÚNG TÔI !
                    </div>
                    <div class="mb-7 text-[#6d545f] text-lg">
                        Điền vào biểu mẫu dưới đây để nhận miễn phí và bảo mật.
                    </div>
                    <div>
                        <form action="">
                            <p class="w-full mb-4"><input class="information w-full h-12 pl-4" type="text" placeholder="Tên"></p>
                            <p class="w-full mb-4"><input class="information w-full h-12 pl-4" type="text" placeholder="Email"></p>
                            <p class="w-full mb-4"> <textarea class="information w-full pl-4" name="" id="" cols="30" rows="10" placeholder="Nội dung"></textarea></p>
                            <p><button type="button" class="bg-[#1e1e27] text-white w-40 h-12 rounded-md">GỬI TIN NHẮN</button></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    }
};
export default Content_contact;