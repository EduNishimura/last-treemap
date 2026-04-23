import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/formContext';

export default function Timespan() {
    const { formData, updateFormData } = useFormContext();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (formData.timespan.trim()) {
            navigate('/chart');
        }
    };

    return (
        <div className="w-sm h-full flex flex-col justify-center items-center gap-5">
            <p className="text-2xl font-bold">Select your timespan</p>
            <select className="w-1/2 h-12 p-3" value={formData.timespan} onChange={(e) => updateFormData({ timespan: e.target.value })}>
                <option value="7day">Last Week</option>
                <option value="1month">Last Month</option>
                <option value="3month">Last 3 Months</option>
                <option value="6month">Last 6 Months</option>
                <option value="12month">Last Year</option>
                <option value="overall">All Time</option>
            </select>
            <button onClick={handleSubmit} className="w-1/2 h-12 bg-blue-500 text-white hover:bg-blue-700 transition-colors cursor-pointer">Submit</button>
        </div>
    )
}