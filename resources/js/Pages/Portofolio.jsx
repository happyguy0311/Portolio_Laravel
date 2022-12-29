// Import Core Libraries
import { Head } from "@inertiajs/inertia-react";

// Import Components
import About from "@/Components/Portofolio/About";
import Contact from "@/Components/Portofolio/Contact";
import Projects from "@/Components/Portofolio/Projects";
import PortofolioLayout from "@/Layouts/PortofolioLayout";
import Jumbotron from "@/Components/Portofolio/Jumbotron";

export default function Portofolio(props) {
    return (
        <PortofolioLayout owner={props.about} application={props.application}>
            <Head title={props.about.name} />
            <Jumbotron owner={props.about} />
            <About owner={props.about} />
            <Projects projects={props.projects} />
            <Contact />
        </PortofolioLayout>
    );
}