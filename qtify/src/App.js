import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"

function App() {
  return (
    <div className="app">
      <Navbar searchData={[]} />
      <Hero />
    </div>
  )
}

export default App;
