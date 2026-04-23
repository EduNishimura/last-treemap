import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/formContext';

const Username = () => {
  const { formData, updateFormData } = useFormContext();
  const navigate = useNavigate();

  const handleNext = () => {
    if (formData.username.trim()) {
      navigate('/type'); 
    }
  };

  return (
    <div className="w-sm h-full flex flex-col justify-center items-center gap-5">
      <p className="text-2xl font-bold">Enter your Last.fm username</p>
      <input 
        type="text" 
        className="w-full h-12 p-3 bg-slate-800 border border-slate-700 rounded" 
        placeholder="Last.fm username"
        value={formData.username}
        onChange={(e) => updateFormData({ username: e.target.value })}
      />
      <button
        onClick={handleNext}
        className="w-full h-12 bg-blue-500 text-white hover:bg-blue-600 transition-colors cursor-pointer rounded font-bold"
      >
        Next Step
      </button>
    </div>
  );
};

export default Username;