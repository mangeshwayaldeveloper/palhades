export const Contact = () =>{
    const onSubmit = (e: any) =>{
        e.preventDefault()
    }
    return (
        <>
        <div className="m-4">
            <div className="flex p-6 bg-white rounded-xl w-full">
                <div className="w-9/12">
                <h2 className="flex items-center h-full text-3xl text-purple-900 ml-24">Get an Appointment by sending us your email. </h2>
                </div>
                <form className="flex flex-col gap-3 w-3/12 ">
                    <input type="text" placeholder="Email" className="h-12 rounded-3xl bg-gray-100 p-4" />
                    <button onClick={onSubmit} className="h-12 rounded-3xl text-white font-bold bg-purple-700">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}