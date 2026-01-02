import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">ME</span>
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Frontend Developer  & UI Enthusiast</h3>

                        <p className="text-muted-foreground">
                            With about a year of experience in building responsive and user-friendly web applications, I create accessible, performant, and visually engaging interfaces using modern frontend tools and technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I enjoy translating design concepts into interactive web experiences, optimizing applications for speed and scalability, and constantly learning new frameworks and techniques to deliver polished, high-quality projects.
                        </p>

                        <div className="flex fles-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>

                            <a href="./Emmy_CV.pdf"
                                download 
                            className="rock-button">Download CV</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Ceating responsive website and web apps with high functionality and modern framewoks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">User Experience</h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive and engaging interfaces that prioritize accessibility, usability, and seamless interactions for all users.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Collaboration</h4>
                                    <p className="text-muted-foreground">
                                        Working effectively with designers, developers, and stakeholders to deliver projects on time while maintaining high-quality standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}