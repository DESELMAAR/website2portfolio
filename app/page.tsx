import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Globe, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"

import {
  AnimatedSection,
  AnimatedCard,
  ParticleBackground,
  AnimatedGradientBackground,
} from "@/components/client-animations"
import {SnowBackground} from "@/components/ui/snow";
import {UnderwaterBackground} from "@/components/ui/underwater";
import Button2 from "@/components/ui/Button2"
import ArrowButton from "@/components/ArrowButton"
// import { MagneticFieldBackground } from "@/components/ui/magnetic-field"


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      {/*<SnowBackground/>*/}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />
      {/* exemple of to use shadcn component and create it manueally */}
      {/* <Button2 className="bg-teal-700" variant="primary" >Click Here</Button2> */}
      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Full-Stack Web Developer with strong experience in modern web technologies and DevOps practices.
                  I build scalable, cloud-ready applications from concept to deployment, combining solid frontend
                  craftsmanship with robust backend architectures.
                </p>
                <p className="text-lg text-muted-foreground">
                  Skilled in React.js, Spring Boot, Laravel, and Node.js, I design and deliver RESTful APIs,
                  containerized solutions using Docker, and CI/CD pipelines on Azure and AWS. My approach is
                  grounded in Agile methodologies and collaborative development workflows.
                </p>
                <p className="text-lg text-muted-foreground">
                  I am passionate about writing clean, maintainable code and continuously exploring emerging
                  tools to deliver high-impact solutions for startups and international companies alike.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-muted-foreground">
                      Full-Stack Web Application Development (React, Spring Boot, Laravel)
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-muted-foreground">RESTful API Design and GraphQL Integration</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-muted-foreground">
                      DevOps: Docker, CI/CD Pipelines, Azure, AWS
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-muted-foreground">
                      Database Architecture (MySQL, PostgreSQL, MongoDB, Firebase)
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-muted-foreground">
                      Workflow Automation (n8n, Webhooks, JSON transformation)
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
       {/* <SkillsSectionWithBackground /> */}
      {/* Skills Section */}
      <section id="skills" className="py-16 px-4   relative">
        {/* <div className="pointer-events-none absolute inset-0 -z-10">
          <UnderwaterBackground />
        </div> */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                      <span className="text-primary text-sm font-bold">FE</span>
                    </span>
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "React.js","Next.js", "Axios / AJAX"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">BE</span>
                    </span>
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {["PHP / Laravel", "Java / Spring Boot", "Node.js / Express", "Python / Django", "REST APIs", "GraphQL"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">DB</span>
                    </span>
                    Databases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Cassandra"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">OPS</span>
                    </span>
                    DevOps & Cloud
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {["Docker", "Azure", "AWS", "CI/CD Pipelines", "Git / GitHub", "GitLab"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Additional Skill Categories */}
          <AnimatedSection delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center">
                    <span className="w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center mr-2">
                      <span className="text-pink-600 dark:text-pink-300 text-xs font-bold">CMS</span>
                    </span>
                    CMS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["WordPress", "Elementor", "SuperBlank"].map((skill) => (
                      <Badge key={skill} variant="outline" className="px-3 py-1.5 text-sm bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center">
                    <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mr-2">
                      <span className="text-teal-600 dark:text-teal-300 text-xs font-bold">DS</span>
                    </span>
                    Data Science
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "NumPy", "Pandas", "SciPy", "Matplotlib", "Scikit-learn"].map((skill) => (
                      <Badge key={skill} variant="outline" className="px-3 py-1.5 text-sm bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center">
                    <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-2">
                      <span className="text-amber-600 dark:text-amber-300 text-xs font-bold">AT</span>
                    </span>
                    Automation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["n8n", "Webhooks", "JSON Transformation"].map((skill) => (
                      <Badge key={skill} variant="outline" className="px-3 py-1.5 text-sm bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Task Management */}
            <AnimatedCard delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Task Management Web App</CardTitle>
                  <CardDescription>Full-stack project management tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Built a comprehensive task management application with a React.js frontend and Spring Boot
                    backend. Features RESTful API architecture, Docker containerization with Docker Compose,
                    and persistent database storage for reliable team collaboration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Spring Boot", "REST API", "Docker", "Docker Compose"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://github.com/deselmaar" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            {/* Project 2: Food Delivery API */}
            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Food Delivery API</CardTitle>
                  <CardDescription>Enterprise-grade REST API</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Designed and developed a robust Food Delivery REST API with Laravel, implementing
                    role-based access control for users, restaurants, menus, and orders. Includes comprehensive
                    database schema design and secure authentication flows.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Laravel", "REST API", "RBAC", "MySQL", "Authentication"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://github.com/deselmaar" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            {/* Project 3: WordPress Websites */}
            <AnimatedCard delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>WordPress Websites</CardTitle>
                  <CardDescription>Custom CMS solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Delivered multiple professional WordPress websites using Elementor and SuperBlank,
                    featuring responsive designs, performance optimization, SEO-friendly structures, and
                    custom functionality tailored to client business needs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["WordPress", "Elementor", "SuperBlank", "Responsive Design", "SEO"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-green-100/50 dark:bg-green-900/50 hover:bg-green-200 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" disabled>
                    <Globe className="w-4 h-4 mr-2" />
                    Client Projects
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>
             <AnimatedCard delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Application de gestion d’événements avec inscription</CardTitle>
                  <CardDescription>Plateforme web full-stack pour organiser et gérer des événements</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Plateforme unique qui centralise tout le workflow d’un événement : création (infos, image, capacité), inscriptions automatisées, génération de billets électroniques (PDF/QR code), et notifications (email/SMS). Côté admin, l’application permet la modération et le suivi global ; côté organisateur, la gestion des participants, export et liste d’attente ; côté participant, inscription (gratuit/payant), consultation et gestion des participations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Laravel", "React.js", "MySQL", "REST API", "QR Code","PDF Tickets","Notifications","RBAC (Spatie)"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-green-100/50 dark:bg-green-900/50 hover:bg-green-200 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" disabled>
                    <Globe className="w-4 h-4 mr-2" />
                    Client Projects
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>
             <AnimatedCard delay={0.6}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Student Attendance & Timetable Management System</CardTitle>
                  <CardDescription>Full-stack academic management platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A complete web-based system designed to manage student attendance, class schedules, and academic resources. The platform provides secure authentication with Spring Security and JWT, role-based access control, and optimized database architecture with constraints and indexing. It includes timetable generation, conflict detection, absence tracking, and PDF export functionality, delivering a centralized and efficient solution for educational institutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Spring Boot", "Spring Security", "JWT", "React.js","MySQL","REST API","Role-Based Access Control","PDF Export","Database Optimization"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-green-100/50 dark:bg-green-900/50 hover:bg-green-200 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" disabled>
                    <Globe className="w-4 h-4 mr-2" />
                    Client Projects
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Education & Languages */}
      <section id="education" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Education & Languages</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary">
                  <h4 className="text-xl font-semibold">
                    {"Master's Degree in Digitalization and Information Systems Architecture"}
                  </h4>
                  <p className="text-primary mt-1 font-medium">
                    {"National School of Applied Sciences (ENSA) - Morocco"}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Globe className="w-6 h-6 text-primary" />
                  Languages
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { language: "Arabic", level: "Native", width: "100%" },
                    { language: "English", level: "Fluent", width: "90%" },
                    { language: "French", level: "Fluent", width: "90%" },
                    { language: "Spanish", level: "Intermediate", width: "55%" },
                  ].map((lang) => (
                    <div
                      key={lang.language}
                      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{lang.language}</span>
                        <Badge variant="secondary">{lang.level}</Badge>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: lang.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-800 relative">

        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <a
                      href="mailto:elmaarpro@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      elmaarpro@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-primary mr-3" />
                    <a
                      href="https://www.linkedin.com/in/abdessamad-el-maaroufi-6b18bb224/"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Github className="w-5 h-5 text-primary mr-3" />
                    <a
                      href="https://github.com/DESELMAAR"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      rel="noreferrer"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-muted-foreground">
                    {"I'm always open to discussing new projects, opportunities, or partnerships. Whether you need a scalable web application or DevOps expertise, feel free to reach out!"}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">ABDESSAMAD EL MAAROUFI</h2>
              <p className="text-gray-400">Full-Stack Web Developer | DevOps-Oriented</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/abdessamad-el-maaroufi-6b18bb224/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/DESELMAAR"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:elmaarpro@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>{"© "}{new Date().getFullYear()}{" ABDESSAMAD EL MAAROUFI. All rights reserved."}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
