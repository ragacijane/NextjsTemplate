import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/homepage';
import { CallbackPage } from './pages/callback-page';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
}

export default App;
