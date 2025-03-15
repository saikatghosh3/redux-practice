import React from "react"
import Counter from "./component/Counter"
import Stats from "./component/Stat"
function App() {
  

  return (
    <>
   <div className="w-screen p-10 bg-gray-300 text-slate-700">
     <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
      Simple Counter Application
     </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <Counter />
        <Counter />
        < Stats totalCount={10}/>
      </div>
   </div>
    </>
  )
}

export default App
