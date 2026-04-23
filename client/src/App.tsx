import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { FormProvider } from './context/formContext';

import Username from './forms/username';
import ChartType from './forms/chart-type';
import Timespan from './forms/timespan';
import Chart from './chart/chart';

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <div className="w-full h-screen flex flex-col justify-center items-center gap-5 text-white">
          <h1 className="text-3xl font-bold">Last Chart</h1>
          <Routes>
            <Route path="/" element={<Navigate to="/username" />} />
            <Route path="/username" element={<Username />} />
            <Route path="/type" element={<ChartType />} />
            <Route path="/timespan" element={<Timespan />} />
            <Route path="/chart" element={<Chart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;