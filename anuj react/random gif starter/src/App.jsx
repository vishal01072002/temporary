export default function App() {
  return (
    <div className="flex flex-col w-full h-screen ">

        <h1 className="bg-white rounded-sm">RANDOM GIFS</h1>
        <div className="flex flex-col">
          <Random/>
          <Tag/>
        </div>
    </div>
  );
}
