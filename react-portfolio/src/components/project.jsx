import { ArrowRight, ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: "Port Grid",
        description: "A hng project using testid.",
        image: "/projects/pro1.png",
        tags: ["JavaScript", "CSS"],
        demo: "#",
        githubURL: "#"
    },
    {
        id: 2,
        title: "Portfolio",
        description: "A cool one page portfolio.",
        image: "/projects/pro2.png",
        tags: ["HTML", "CSS"],
        demo: "#",
        githubURL: "#"
    },
    {
        id: 3,
        title: "School Website",
        description: "A school database website.",
        image: "/projects/pro3.png",
        tags: ["HTML", "TailwindCSS"],
        demo: "#",
        githubURL: "#"
    }

]

export function ProjectSection() {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span>
                </h2>


                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-4">
                                <div className="flex flex-wrap gap-6 mb-3">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>


                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items0center">
                                    <div className='flex space-x-3'>
                                        <a href={project.demo} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'><ExternalLink size={20} /></a>
                                        <a href={project.githubURL} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'><Github size={20} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <a href="https://github/emmyden560" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}