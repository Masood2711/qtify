import "./App.css"
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Section from "./components/Section/Section"
import { getTopAlbums, getNewAlbums, getSongs, getGenres } from "./services/api"
function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

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
    const fetchGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
    fetchGenres();
  }, []);

  return (
    <div className="app">
      <Navbar searchData={[]} />
      <Hero />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      <Section title="Songs" data={songs} type="song" genres={genres} />
    </div>
  );
}
export default App;
