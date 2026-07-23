import "./App.css"
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Section from "./components/Section/Section"
import { getTopAlbums, getNewAlbums, getSongs } from "./services/api"
function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const data = await getTopAlbums();
        setTopAlbums(data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchNewAlbums = async () => {
      try {
        const data = await getNewAlbums();
        setNewAlbums(data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSongs = async () => {
      try {
        const data = await getSongs();
        setSongs(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
  }, []);

  return (
    <div className="app">
      <Navbar searchData={[]} />
      <Hero />
      <Section title="Top Albums" data={topAlbums} />
      <Section title="New Albums" data={newAlbums} />
      <Section title="Songs" data={songs} type="song" />
    </div>
  );
}
export default App;
