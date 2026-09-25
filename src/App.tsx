import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderMain from "./components/header/HeaderMain";
import ProjectsMain from "./components/projects/ProjectsMain";
import FooterMain from "./components/footer/FooterMain"
import ContactMain from "./components/contact/ContactMain"
import BlogProject from "./components/projects/projectPages/BlogProject";
import AboutMain from "./components/about/AboutMain"
import WordlyProject from "./components/projects/projectPages/WordlyProject";

function App() {
    return (
        <BrowserRouter>
            <HeaderMain />

            <Routes>
                <Route path="/" element={<ProjectsMain />} />
                <Route path="/portfolio" element={<ProjectsMain />} />

                <Route
                    path="/about"
                    element={<AboutMain />}
                />

                <Route
                    path="/journal"
                    element={<h1>Journal</h1>}
                />

                <Route
                    path="projects/Blog"
                    element={<BlogProject />}
                />
                <Route
                    path="projects/Wordly"
                    element={<WordlyProject />}
                />


                <Route
                    path="/contact"
                    element={<ContactMain />}
                />
            </Routes>
			<FooterMain />
        </BrowserRouter>
    );
}

export default App;