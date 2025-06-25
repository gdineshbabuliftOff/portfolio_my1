"use client";

import { Github, Linkedin, Twitter, Code, ExternalLink, Briefcase, GraduationCap, Send, X, Award } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import profileImage from '../../../public/praveen.jpeg';
import portfolio from '../../../public/portfolio.png';

// --- TYPE DEFINITIONS ---
interface PortfolioImageProps {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  image: StaticImageData;
}

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

interface Certification {
  title: string;
  issuer: string;
  url: string;
}

// --- CLIENT COMPONENTS ---
const PortfolioImage: React.FC<PortfolioImageProps> = ({ src, alt }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const fallbackSrc = `https://placehold.co/400x400/e2e8f0/94a3b8?text=Image+Not+Found`;

  return (
    <motion.div
      className="w-full h-full"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <Image
          src={profileImage || imgSrc}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImgSrc(fallbackSrc)}
        />
    </motion.div>
  );
};

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; id?: string; }> = ({ children, className = "", id }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`py-20 md:py-24 scroll-mt-20 ${className}`}
        >
            {children}
        </motion.section>
    );
};


// --- PAGE & LAYOUT ---
export default function PortfolioPage() {
  return (
    <div className="bg-slate-50 text-slate-700 font-sans leading-relaxed selection:bg-teal-300 selection:text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <FeaturedProjects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-5">
                <div className="text-2xl font-bold text-slate-800 tracking-wider">
                    <a href="#hero">A. Praveen</a>
                </div>
                <nav className="hidden md:flex items-center space-x-8 text-slate-600 font-medium">
                    <a href="#about" className="hover:text-teal-500 transition-colors duration-300">About</a>
                     <a href="#education" className="hover:text-teal-500 transition-colors duration-300">Education</a>
                    <a href="#skills" className="hover:text-teal-500 transition-colors duration-300">Skills</a>
                    <a href="#projects" className="hover:text-teal-500 transition-colors duration-300">Projects</a>
                    <a href="#certifications" className="hover:text-teal-500 transition-colors duration-300">Certifications</a>
                    <a href="#contact" className="hover:text-teal-500 transition-colors duration-300">Contact</a>
                </nav>
                 <a href="/resume.html" target="_blank" className="hidden md:inline-flex items-center gap-2 bg-teal-500 text-white px-5 py-2.5 rounded-lg hover:bg-teal-600 font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-px">
                    Resume
                </a>
            </div>
        </motion.header>
    );
};

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center bg-slate-100 scroll-mt-0">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div 
            className="text-center md:text-left flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tighter">
            A. Praveen
          </h1>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-600">
            Developer & AI Enthusiast
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto md:mx-0">
            A B.Tech student majoring in AI & Data Science with a passion for software development and problem-solving. Eager to contribute to innovative projects and grow my skills.
          </p>
          <div className="mt-10 flex gap-4 justify-center md:justify-start">
             <a href="#contact" className="inline-flex items-center gap-2 bg-teal-500 text-white font-semibold text-lg px-8 py-4 rounded-lg hover:bg-teal-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Contact Me <Send size={20} />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 text-slate-700 font-semibold text-lg px-8 py-4 rounded-lg hover:bg-slate-200 transition-colors transform hover:-translate-y-1 duration-300">
              View Projects
            </a>
          </div>
        </motion.div>
        <motion.div 
            className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120 }}
        >
           <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-sky-300 to-purple-300 rounded-full blur-2xl opacity-50"></div>
           <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <PortfolioImage
              src="https://placehold.co/400x400/f1f5f9/334155?text=A.P"
              alt="A portrait of A. Praveen"
            />
           </div>
        </motion.div>
    </div>
  </section>
);

const About = () => (
  <AnimatedSection id="about">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">About Me</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto space-y-4">
            <span>I am a dedicated and passionate student pursuing a B.Tech in CSE with a specialization in Artificial Intelligence and Data Science. My goal is to leverage my growing skills in Java, Python, and problem-solving to contribute to innovative software development projects.</span>
            <span>I am a strong believer in continuous learning and am always exploring new technologies. My academic projects have allowed me to delve into areas like deep learning, and I am eager to apply this knowledge to real-world challenges in a forward-thinking organization.</span>
        </p>
      </div>
    </div>
  </AnimatedSection>
);

const Education = () => (
    <AnimatedSection id="education" className="bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Education</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg flex items-center gap-8">
                    <div className="text-teal-500"> <GraduationCap size={64} /> </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-500">2022 - 2026 (Pursuing)</p>
                        <h3 className="text-2xl font-bold text-slate-800">Bachelor of Technology (B.Tech)</h3>
                        <p className="text-lg font-semibold text-slate-700">CSE (AI & Data Science)</p>
                        <p className="mt-1 text-slate-600">Mother Theresa Institute of Engineering and Technology, Palamaner</p>
                        <p className="mt-1 font-bold text-teal-600">Current Aggregate: 76%</p>
                    </div>
                </div>
                 <div className="bg-white p-8 rounded-lg shadow-lg flex items-center gap-8">
                    <div className="text-teal-500"> <Briefcase size={60} /> </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-500">2020 - 2022</p>
                        <h3 className="text-2xl font-bold text-slate-800">Intermediate Education</h3>
                        <p className="text-lg font-semibold text-slate-700">Srichaitanya Junior College, Madanapalli</p>
                        <p className="mt-1 font-bold text-teal-600">Aggregate: 63%</p>
                    </div>
                </div>
                 <div className="bg-white p-8 rounded-lg shadow-lg flex items-center gap-8">
                    <div className="text-teal-500"> <Award size={56} /> </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-500">2020</p>
                        <h3 className="text-2xl font-bold text-slate-800">10th Class (SSC)</h3>
                        <p className="text-lg font-semibold text-slate-700">Viswamaithri English Medium High School, Vayalpad</p>
                        <p className="mt-1 font-bold text-teal-600">GPA: 8.0</p>
                    </div>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const projectData: Project[] = [
    {
        title: "Image Segmentation & Object Detection",
        category: "Deep Learning",
        description: "A mini-project focusing on identifying and classifying objects within images using deep learning techniques.",
        longDescription: "This project was developed using Python and core deep learning libraries to explore the domain of computer vision. It involved implementing algorithms for segmenting images into different regions and then applying object detection models to identify and locate specific objects within those segments. This project provided hands-on experience with data preprocessing, model training, and evaluating performance metrics for computer vision tasks.",
        tags: ["Python", "Deep Learning", "Computer Vision", "TensorFlow/Keras"],
        liveUrl: "#",
        repoUrl: "#",
        image: portfolio
    },
    {
        title: "Personal Portfolio Website",
        category: "Web Application",
        description: "This very portfolio, built with Next.js and Tailwind CSS to showcase my skills and projects.",
        longDescription: "This website is a project designed to demonstrate my abilities in frontend development. It's built using Next.js for server-side rendering and performance, styled with Tailwind CSS for a modern and responsive design, and includes interactive elements powered by Framer Motion for a smooth user experience.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://apraveen.vercel.app/profile",
        repoUrl: "https://github.com/praveen44",
        image: portfolio
    },
    {
        title: "E-commerce UI/UX",
        category: "UI Design",
        description: "A responsive user interface design for an e-commerce website, focusing on a clean layout and intuitive user experience.",
        longDescription: "This project focused purely on the frontend implementation and design of an e-commerce site. I designed and built key pages like the homepage, product listings, and product detail pages. The focus was on creating a responsive layout using modern CSS, and ensuring the UI was visually appealing and easy to navigate across different devices.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        liveUrl: "#",
        repoUrl: "#",
        image: portfolio
    }
];

const FeaturedProjects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <AnimatedSection id="projects">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                     <h2 className="text-4xl font-bold text-slate-900 tracking-tight">My Projects</h2>
                     <p className="mt-2 text-lg text-slate-600">A selection of my work. Click for more details.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} project={project} onCardClick={() => setSelectedProject(project)} />
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
            </AnimatePresence>
        </AnimatedSection>
    );
};

const ProjectCard: React.FC<{ project: Project; onCardClick: () => void; }> = ({ project, onCardClick }) => (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer"
      whileHover={{ scale: 1.03 }}
      onClick={onCardClick}
    >
      <div className="relative h-56 overflow-hidden">
        <Image src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" width={1000} height={1000} />
      </div>
      <div className="p-6">
        <p className='text-sm font-semibold text-teal-600 mb-1'>{project.category}</p>
        <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
        <p className="mt-3 text-slate-600 leading-relaxed">{project.description}</p>
      </div>
    </motion.div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void; }> = ({ project, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={onClose}>
        <motion.div
            className="relative bg-white rounded-lg shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 z-10">
                <X size={28} />
            </button>
            <div className="relative h-72">
                <Image src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-lg" width={1000} height={1000} />
            </div>
            <div className="p-8">
                <h2 className="text-3xl font-bold text-slate-900">{project.title}</h2>
                <p className="text-slate-600 mt-4">{project.longDescription}</p>
                 <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-sm font-medium text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
                        {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-6">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-500 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-600 transition-colors shadow-sm hover:shadow-md">
                        <ExternalLink size={18} /> Live Demo
                    </a>}
                    {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-600 font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-100 transition-colors">
                        <Code size={18} /> View Code
                    </a>}
                </div>
            </div>
        </motion.div>
    </div>
);

const skillsData = {
    "Languages": ["Python", "Java (Basics)", "SQL", "HTML"],
    "Frameworks & Libraries": ["React.js", "Next.js", "Node.js", "Tailwind CSS", "NumPy", "Pandas"],
    "Developer Tools": ["Git & GitHub", "VS Code", "Jupyter Notebook"],
};

const Skills = () => (
    <AnimatedSection id="skills" className="bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-slate-800 mb-6">{category}</h3>
                        <ul className="space-y-3">
                            {skills.map((skill, index) => (
                                <motion.li key={index} className="flex items-center gap-3 text-slate-600"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                                    {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const certificationData: Certification[] = [
    { title: "Best Performer - Deep Learning & Generative AI Workshop", issuer: "College Workshop", url: "#" },
    { title: "Certificate of Participation - EduSkills TECH CAMP on Google AI-ML", issuer: "EduSkills & Google", url: "#" },
    { title: "1st Prize - Poster Presentation on Science Day", issuer: "College Event", url: "#" },
];

const Certifications = () => (
    <AnimatedSection id="certifications">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Awards & Certifications</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
                {certificationData.map((cert, i) => (
                    <motion.a 
                        key={i} 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="text-teal-500 bg-teal-100 p-3 rounded-full">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 text-lg">{cert.title}</h3>
                                <p className="text-slate-500">{cert.issuer}</p>
                            </div>
                        </div>
                        <ExternalLink className="text-slate-400" size={20} />
                    </motion.a>
                ))}
            </div>
        </div>
    </AnimatedSection>
);


const Contact = () => (
    <AnimatedSection id="contact" className="bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center bg-teal-500/10 p-10 md:p-16 rounded-2xl">
                 <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Let&apos;s Connect</h2>
                 <p className="text-lg text-slate-700 mb-8">
                    I am actively looking for internship and full-time opportunities where I can apply my skills and continue to learn. Feel free to reach out!
                 </p>
                 <a href="mailto:rohan91821@gmail.com" className="inline-flex items-center gap-3 bg-teal-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:bg-teal-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Say Hello <Send size={20}/>
                 </a>
            </div>
        </div>
    </AnimatedSection>
);

const Footer = () => (
  <footer className="py-10 bg-slate-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600">
        <div className="flex justify-center gap-8 mb-6">
            <SocialLink href="https://github.com/praveen44" icon={Github} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/avula-praveen-0124b4348" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="#" icon={Twitter} label="Twitter" />
        </div>
         <div className="text-sm text-slate-500">
            <p className="font-semibold text-slate-600 mb-2">A. Praveen</p>
            <p>Pathepuram(Vi), Vayalpad(M), Annamayya, Andhra Pradesh</p>
        </div>
        <p className="mt-6">&copy; {new Date().getFullYear()} A. Praveen. All rights reserved.</p>
    </div>
  </footer>
);

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-slate-500 hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
    <Icon size={24} />
  </a>
);
