import { motion } from "motion/react";

export default function ProjectDetail({
    project,
    onBack
}) {
    return (
        <motion.div
            className="project-detail"
            initial={{
                opacity: 0,
                x: 25
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            transition={{
                duration: 0.35
            }}
        >
            <button
                type="button"
                onClick={onBack}
            >
                ← back to projects
            </button>

            <div className="project-detail-layout">
                <div className="project-detail-image">
                    <img
                        src={project.image}
                        alt={project.title}
                    />
                </div>

                <div className="project-detail-content">
                    <span className="project-detail-kicker">
                        {project.type}
                    </span>

                    <h2>
                        {project.title}
                    </h2>

                    <div className="project-detail-meta">
                        <span>
                            {project.year}
                        </span>

                        <span>
                            {project.role}
                        </span>
                    </div>

                    <p className="project-detail-description">
                        {project.description}
                    </p>

                    <div className="project-technologies">
                        <span>
                            built with
                        </span>

                        <div>
                            {project.technologies.map(
                                (technology) => (
                                    <small
                                        key={technology}
                                    >
                                        {technology}
                                    </small>
                                )
                            )}
                        </div>
                    </div>

                    {project.link &&
                        project.link !== "#" && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                            >
                                visit project →
                            </a>
                        )}
                </div>
            </div>
        </motion.div>
    );
}