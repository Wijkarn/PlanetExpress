import { createRoot } from 'react-dom/client';
import "../css/App.css";

import Navbar from '../components/Navbar';

function App() {
    return (
        <Navbar />
    );
}

const body = createRoot(document.querySelector("body"));
body.render(<App/>);