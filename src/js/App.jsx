import { createRoot } from 'react-dom/client';
import "../css/App.css";

import Navbar from '../components/Navbar';
import CrewMembers from '../components/CrewMembers';

function App() {
    return (
        <>
        <Navbar />
        <CrewMembers/>
        </>
    );
}

const body = createRoot(document.querySelector("body"));
body.render(<App/>);

//https://www.pngwing.com/en/search?q=planet+Express