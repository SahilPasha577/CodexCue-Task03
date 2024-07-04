import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Weather } from './MyComp/Weather';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Weather />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
