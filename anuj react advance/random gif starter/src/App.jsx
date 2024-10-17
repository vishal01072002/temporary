import  Random  from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background overflow-auto">

      <h1 className="bg-white rounded-md text-center mt-[40px] px-10 py-2 ml-[25px] mr-[25px] font-bold text-3xl ">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
        <Random/>
        <Tag/>
      </div>

    </div>
  )
}
