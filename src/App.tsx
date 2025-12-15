import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar'; 
import Home from './pages/Home';
import Profile from './pages/Profile'; // Assurez-vous d'importer votre page Profile

function MainRouter() {
    const navigate = useNavigate();

    const handleAppNavigation = (pageId: string) => {
        switch (pageId) {
            case 'home':
                navigate('/');
                break;
            case 'profile':
                navigate('/profile'); 
                break;
            default:
                navigate('/');
        }
    };

    return (
        <>
            <Navbar onNavigate={handleAppNavigation}  />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
}

// Votre point d'entrée doit utiliser BrowserRouter
function App() {
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
}

export default App;