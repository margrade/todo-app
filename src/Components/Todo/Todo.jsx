const Todo = ({ todo }) => {

    const { title, completed } = todo

    return (
       <div className="flex items-center justify-between p-4 bg-gray-200 00 border-b border-solid border-gray-600 text-black">

        <div className="flex items-center">
            {
                completed ? (
                    <div className="bg-green-700 p-1 rounded-full cursor-pointer">
                        <img className="h-4 w-4" src='/check-icon.svg' alt='Check Icon' />
                    </div>
                ) : (
                    <span className="border border-gray-500 border-solid p-3 rounded-full cursor-pointer"></span>

                )
            }
            <p className= {"pl-3 text-black" + (completed && "line-through") }>
                {title}
            </p>
        </div>

        <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"  src="/close-icon.svg" alt="Close Icon" />

       </div>
    )
}

export { Todo }