import {Route, Routes} from "react-router";
import {Bio} from "./pages/bio/main/Bio.tsx";
import ProjectFull from "./pages/projects/project-full.tsx";


export default function MyRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element=<Bio/>/>
                <Route path="/project/:projectId" element=<ProjectFull/>/>
            </Routes>
        </>
    )
}