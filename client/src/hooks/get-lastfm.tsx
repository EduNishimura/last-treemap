import axios from "axios";

export default async function getTopArtists(username: string, period: string, chartType: string) {
    const LASTFM_API_KEY = "7a260eeecf6729213ec7ba3881a7f745";
    const URL = `https://ws.audioscrobbler.com/2.0/?method=user.gettop${chartType}&user=${username}&period=${period}&format=json&api_key=${LASTFM_API_KEY}`;

    try {
        const response = await axios.get(URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}