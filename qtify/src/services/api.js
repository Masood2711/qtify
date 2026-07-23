import axios from "axios";

const API = axios.create({
    baseURL: "https://qtify-backend.labs.crio.do",
});

export const getTopAlbums = async () => {
    const response = await API.get("/albums/top");
    return response.data;
};

export const getNewAlbums = async () => {
    const response = await API.get("/albums/new");
    return response.data;
};

export const getSongs = async () => {
    const response = await API.get("/songs");
    return response.data;
};

export const getGenres = async () => {
    const response = await API.get("/genres");
    return response.data;
};