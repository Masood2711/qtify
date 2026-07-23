import axios from "axios";

const API = axios.create({
    baseURL: "https://qtify-backend.labs.crio.do"
});

export const getTopAlbums = async () => {
    const response = await API.get("/albums/top");
    return response.data;
};