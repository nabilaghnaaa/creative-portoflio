import { motion } from "motion/react";

export default function ProjectCategory({
    projects,
    onSelect
}) {
    if (projects.length === 0) {
        return (
            <div className="project-empty">
                <span>nothing here yet.</span>

                <p>
                    This collection is still growing.
                </p>
            </div>
        );
    }

    return (
        <div className="project-grid">
            {projects.map((project, index) => (
                <motion.button
                    key={project.id}
                    type="button"
                    className={`project-card project-card-${(index % 3) + 1}`}
                    onClick={() => onSelect(project)}
                    initial={{
                        opacity: 0,
                        y: 15
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: index * 0.05,
                        duration: 0.3
                    }}
                    whileTap={{
                        scale: 0.98
                    }}
                >
                    <div className="project-card-image">
                        <img
                            src={project.image}
                            alt={project.title}
                        />
                    </div>

                    <div className="project-card-info">
                        <div>
                            <span>
                                {project.type}
                            </span>

                            <strong>
                                {project.title}
                            </strong>
                        </div>

                        <small>
                            {project.year}
                        </small>
                    </div>
                </motion.button>
            ))}
        </div>
    );
}