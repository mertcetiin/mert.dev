import { PROJECTS_INFO } from "@/constants";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";


function Projects() {
    return (
        <section id="projects" className="flex justify-center text-center items-center">
            <div className="flex flex-col mx-4">
                <h1 className="mt-[30px] text-2xl md:text-4xl font-extrabold">My Projects</h1>
                <div className="flex flex-wrap justify-center gap-[20px] mt-[30px] mx-auto">
                    {PROJECTS_INFO.map((project, index) => (
                        <div key={index}
                            className="border max-w-[400px] w-full rounded-2xl pt-4 px-4">
                            <Link href={project.href} target="e_blank"
                                className="text-xl text-center font-bold">
                                {project.name}
                                <FaExternalLinkAlt className="ml-2 inline align-baseline" />
                            </Link>
                            <hr className="my-4 mx-4" />
                            <p className="text-customGray600 mt-[10px] h-[100px]">
                                {project.content}
                            </p>
                            <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
                                {project.skills.map((skill, index) => (
                                    <span key={index}
                                        className="px-4 py-2 border-2 rounded-full text-customGray800">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;