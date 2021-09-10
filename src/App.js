import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans text-3xl font-bold text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main style={{ height: "2000px" }}>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
