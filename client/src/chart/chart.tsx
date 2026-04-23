import { useFormContext } from "../context/formContext";
import getTopArtists from "../hooks/get-lastfm";

export default function Chart() {
    const { formData } = useFormContext();
    const data = getTopArtists(formData.username, formData.timespan, formData.chartType);

    return (
        <div>
            <h1>Chart</h1>
            <p>{data}</p>
        </div>
    );
}