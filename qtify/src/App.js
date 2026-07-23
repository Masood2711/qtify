import "./App.css"
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Section from "./components/Section/Section"
import { getTopAlbums } from "./services/api"
function App() {
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const data = await getTopAlbums();
        setTopAlbums(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTopAlbums();
  }, []);

  return (
    <div className="app">
      <Navbar searchData={[]} />
      <Hero />
      <Section title="Top Albums" data={topAlbums} />
    </div>
  );
}
export default App;
