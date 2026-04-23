import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/formContext';

export default function ChartType() {
    const { formData, updateFormData } = useFormContext();
    const navigate = useNavigate();

    const handleNext = () => {
        if (formData.chartType.trim()) {
            navigate('/timespan');
        }
    };

    return (
        <div className="w-sm h-full flex flex-col justify-center items-center gap-5">
            <p className="text-2xl font-bold">Select your chart type</p>
            <select className="w-1/2 h-12 p-3 text-black" value={formData.chartType} onChange={(e) => updateFormData({ chartType: e.target.value })}>
                <option value="" disabled>Select a chart type</option>
                <option value="artists">Top Artists</option>
                <option value="albums">Top Albums</option>
                <option value="tracks">Top Tracks</option>
            </select>
            <button onClick={handleNext} className="w-1/2 h-12 bg-blue-500 text-white hover:bg-blue-700 transition-colors cursor-pointer">Submit</button>
        </div>
    )
}