export const Contact = () =>{
    const onSubmit = (e: any) =>{
        e.preventDefault()
    }
    return (
        <>
        <div className="m-4">
            <div className="flex flex-col md:flex-row p-6 bg-white rounded-xl w-full">
                <div className="md:w-9/12">
                <h2 className="flex items-center h-full text-3xl text-purple-900 md:ml-24 mb-4">Get an Appointment by sending us your email. </h2>
                </div>
                <form className="flex flex-col gap-3 md:w-3/12 ">
                    <input type="text" placeholder="Email" className="h-12 rounded-3xl bg-gray-100 p-4" />
                    <button onClick={onSubmit} className="h-12 rounded-3xl text-white font-bold bg-purple-700">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}