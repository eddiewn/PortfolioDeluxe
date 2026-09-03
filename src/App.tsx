import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderMain from "./components/header/HeaderMain";
import ProjectsMain from "./components/projects/ProjectsMain";
import FooterMain from "./components/footer/FooterMain"

function App() {
    return (
        <BrowserRouter>
            <HeaderMain />

            <Routes>
                <Route path="/" element={<ProjectsMain />} />
                <Route path="/portfolio" element={<ProjectsMain />} />

                <Route
                    path="/about"
                    element={<h1>About</h1>}
                />

                <Route
                    path="/journal"
                    element={<h1>Journal</h1>}
                />

                <Route
                    path="/contact"
                    element={<h1>Contact</h1>}
                />
            </Routes>
			<FooterMain />
        </BrowserRouter>
    );
}

export default App;