import { useState } from "react";
import projects from "../../data/projects";
import ProjectCategory from "./ProjectCategory";
import ProjectDetail from "./ProjectDetail";

const categories = [
    {
        id: "all",
        label: "all projects"
    },
    {
        id: "uiux",
        label: "ui / ux"
    },
    {
        id: "web",
        label: "web developer"
    },
    {
        id: "mobile",
        label: "mobile"
    },
    {
        id: "creative",
        label: "creative"
    }
];

export default function ProjectExplorer() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter(
                (project) =>
                    project.category === activeCategory
            );

    if (selectedProject) {
        return (
            <ProjectDetail
                project={selectedProject}
                onBack={() => setSelectedProject(null)}
            />
        );
    }

    return (
        <div className="project-explorer">
            <header className="project-header">
                <div>
                    <span className="project-kicker">
                        GINA'S WORK
                    </span>

                    <h1>
                        things I've <em>built.</em>
                    </h1>
                </div>

                <div className="project-header-note">
                    <span>01</span>

                    <small>
                        projects
                        <br />
                        archive
                    </small>
                </div>
            </header>

            <div className="project-intro">
                <p>
                    A little collection of things I've
                    designed, developed, and created
                    along the way.
                </p>

                <span>
                    {projects.length} projects
                </span>
            </div>

            <div className="project-categories">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        type="button"
                        className={
                            activeCategory === category.id
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setActiveCategory(category.id)
                        }
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            <ProjectCategory
                projects={filteredProjects}
                onSelect={setSelectedProject}
            />

            <footer className="project-footer">
                <span>
                    selected works
                </span>

                <span>
                    click a project to explore
                </span>
            </footer>
        </div>
    );
}