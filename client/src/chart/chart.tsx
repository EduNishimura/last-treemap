import { useEffect, useState } from "react";
import { useFormContext } from "../context/formContext";
import getTopArtists from "../hooks/get-lastfm";
import { parseAlbums } from "../components/parser-albums";
import { AlbumTreemap } from "../components/treemap";
import { useNavigate } from "react-router-dom";

export default function Chart() {
    const { formData } = useFormContext();
    const [data, setData] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!formData.username || !formData.timespan || !formData.chartType) {
            navigate('/');
            return;
        }

        getTopArtists(formData.username, formData.timespan, formData.chartType)
            .then((res) => setData(res));
    }, [formData.username, formData.timespan, formData.chartType, navigate]);

    if (!data) {
        return <div className="w-full h-full flex justify-center items-center text-xl">Loading...</div>;
    }

    const albums = parseAlbums(data?.topalbums?.album || []);

    return (
        <>
            <AlbumTreemap albums={albums} />
        </>
    );
}