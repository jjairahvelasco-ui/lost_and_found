export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center border-x border-gray-200 max-w-[1126px] mx-auto text-center bg-white text-gray-700">

      <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-gray-900 my-8">
        Lost & Found System
      </h1>

      <h2 className="text-xl md:text-2xl text-gray-800 mb-2">
        Find your lost items easily
      </h2>

      <p className="text-gray-600">
        Welcome to your backend-connected system
      </p>

      <div className="mt-6">
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
          API Status: Connected
        </code>
      </div>

    </div>
  );
}