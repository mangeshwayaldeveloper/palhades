export const Testimonial = () =>{
    return (
        <>
            <div className="flex md:flex-row flex-col w-full mt-16">
                <div className="flex flex-col gap-4 w-1/3 m-16">
                    <p className="text-lg text-purple-700 font-semibold">TESTIMONIAL</p>
                    <p className="text-4xl text-purple-900 text-wrap w-1/2 font-semibold">Customer Feedback & Reviews</p>
                    <p className="text-lg text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex flex-col md:flex-row w-2/3 m-16 gap-4 text-gray-500">
                    <div className="p-6 bg-gray-100 rounded-xl">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facere, nostrum dicta expedita, facilis illum dolorum ad delectus mollitia illo quisquam voluptas blanditiis maxime quos voluptatibus itaque dignissimos. Ex, natus.</p>
                        <p className="text-end mt-10 text-purple-600">- Monika Alba</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis amet animi libero, accusamus accusantium veritatis magni temporibus corrupti totam cupiditate eius explicabo, debitis dolorem, vitae quia blanditiis. Accusantium, numquam impedit!</p>
                        <p className="text-end mt-10 text-purple-600">- Monika Alba</p>
                    </div>
                </div>
            </div>
        </>
    )
}
