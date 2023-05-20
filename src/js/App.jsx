import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import "../css/App.css";

import Navbar from '../components/Navbar';

function App() {
    return (
        <Navbar />
    );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);