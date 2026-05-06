import { useEffect, useState } from "react";
import { useFormContext } from "../context/formContext";
import getTopArtists from "../hooks/get-lastfm";
import { parseAlbums } from "../components/parser-albums";
import { AlbumTreemap } from "../components/treemap";
import { useNavigate } from "react-router-dom";
import { toPng } from "html-to-image";

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

    const handleDownload = () => {
        const node = document.getElementById("chart");
        if (node) {
            toPng(node)
                .then((dataUrl) => {
                    const link = document.createElement("a");
                    link.download = "treemap.png";
                    link.href = dataUrl;
                    link.click();
                })
                .catch((err) => {
                    console.error("Error generating image:", err);
                });
        }
    };

    return (
        <>
            <AlbumTreemap albums={albums} />
            <button className="w-1/3 rounded-2xl h-12 bg-blue-500 text-white hover:bg-blue-700 transition-colors cursor-pointer" onClick={handleDownload}>Download</button>
        </>
    );
}