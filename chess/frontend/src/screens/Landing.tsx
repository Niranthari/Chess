import React from "react"

export const Landing = ()=>{
    return <div>
       <div className = "pt-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex justify-center">
                    <img src={"/chessboard.jpeg"} className="max-w-96"/>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-4xl font bold text-white"> 
                        Play Chess online on the #2 Site!
                    </h1>
                    <div className ="mt-4 flex justify-center">
                        <button className = "px-8 py-16 text-2xl bg-green-500 hover:bg-blue-700 text-white font bold rounded">
                                            Play Online
                        </button>
                    </div>
                </div>
            </div>
       </div>
    </div>
}