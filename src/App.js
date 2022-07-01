import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import Header from './master/Header';
import url from './Koneksi';
import Halaman from './pages/Halaman';
import AddMenu from './pages/AddMenu';
import EditMenu from './pages/EditMenu';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <div className="wrapper" style={{ textAlign : "left" }}>
                <div className="container-fluid"> <br />
                  <Routes>
                      <Route path="/" element={<Halaman />} />
                      <Route path="/add" element={<AddMenu />} />
                      <Route path="/edit/:id" element={<EditMenu />} />
                  </Routes>
                </div>
          </div>
        </div>
     </ BrowserRouter>
  );
}

export default App;
