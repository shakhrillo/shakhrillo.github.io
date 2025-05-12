import Link from "next/link"
import { ArrowRight, FileUserIcon, Github, Globe, Linkedin, Mail, MapPin, UserIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { MapHero } from "@/components/map-hero"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <FileUserIcon className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">
              Shakhrillo
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/shakhrillo" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shaxrillo" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://www.upwork.com/freelancers/~019b23c858765bbfb5" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost">
                <span>Upwork</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          <MapHero />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="container">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  GIS Specialist & Full-Stack Developer
                </h1>
                <p className="text-lg md:text-xl mb-6">
                  Transforming geospatial data into meaningful insights and interactive experiences
                </p>
                <div className="flex gap-4">
                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href="#projects">View Projects</Link>
                  </Button>
                  <Button asChild variant="outline" className="text-black border-white hover:bg-white/80">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-slate-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/shakhrillo.png"
                  alt="Shakhrillo"
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                />
              </div>
              <div>
                <p className="text-lg mb-4">
                  I'm a passionate GIS specialist with expertise in Esri technologies and geospatial development. With a
                  background in geographic information systems, I specialize in creating interactive maps, spatial analysis, and
                  developing custom GIS solutions.
                </p>
                <p className="text-lg mb-6">
                  My goal is to leverage geospatial technology to solve complex problems and help organizations make
                  data-driven decisions through effective visualization and analysis.
                </p>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/SHAKHRILLO.pdf" target="_blank">
                    Download Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 🔹ArcGIS Experience Builder
              🔹ArcGIS Instant Apps
              🔹ArcGIS Dashboards
              🔹ArcGIS StoryMaps */}
              <ProjectCard
                title="ArcGIS Experience Builder Custom Widget"
                description="Developed a custom widget for ArcGIS Experience Builder to enhance user interaction and data visualization."
                image="https://developers.arcgis.com/experience-builder/storybook/logo.png"
                tags={["ArcGIS Experience Builder", "JavaScript", "Web Development"]}
                githubUrl="https://github.com/shakhrillo/kdrm-widgets"
                demoUrl="https://www.loom.com/share/0781b579487f4c8b89ff2311d20214f7?sid=1f168a6f-9a99-427a-a52c-28479f65e6c9"
              />
              <ProjectCard
                title="ArcGIS Web AppBuilder Custom Widget"
                description="This widget allows you to zoom to a specific coordinate in the map where users need to quickly navigate to a specific location on the map."
                image="https://www.esrij.com/cgi-bin/wp/wp-content/uploads/2023/02/WebAppBuilder_main3.png"
                tags={["ArcGIS Web AppBuilder", "JavaScript", "Web Development"]}
                githubUrl="https://github.com/shakhrillo/zoom_arcgis_web_app_builder"
                demoUrl="https://www.loom.com/share/b4b6ff65aefa461985d261ad5e32fdff?sid=44607e3f-b22d-4063-b334-4da1d4e6b070"
              />
              <ProjectCard
                title="Google Maps Review Scraper – Automated Data Extraction with Selenium"
                description="Google Maps Review Scraper is a powerful and automated tool designed to extract customer reviews from Google Maps effortlessly."
                image="https://public-files.gumroad.com/xx87h4awm0e5ydy4rqk7yrf6uni6"
                tags={["Python", "Selenium", "Web Scraping"]}
                githubUrl="https://shakhrillo.gumroad.com/l/yxcwrz"
                demoUrl="https://shakhrillo.gumroad.com/l/yxcwrz"
              />
              {/* <ProjectCard
                title="Interactive Flood Risk Map"
                description="Developed a web-based interactive flood risk assessment tool using ArcGIS JavaScript API."
                image="/placeholder.svg?height=300&width=400"
                tags={["ArcGIS JS API", "Web Development", "Hydrology"]}
                githubUrl="https://github.com/yourusername/flood-risk-map"
                demoUrl="https://example.com/demo"
              />
              <ProjectCard
                title="Transportation Network Analysis"
                description="Created a network analysis solution for optimizing public transportation routes."
                image="/placeholder.svg?height=300&width=400"
                tags={["Network Analyst", "Python", "Transportation"]}
                githubUrl="https://github.com/yourusername/transport-network"
                demoUrl="https://example.com/demo"
              />
              <ProjectCard
                title="Land Use Classification"
                description="Automated land use classification using machine learning and satellite imagery."
                image="/placeholder.svg?height=300&width=400"
                tags={["Machine Learning", "Remote Sensing", "Python"]}
                githubUrl="https://github.com/yourusername/land-use-ml"
                demoUrl="https://example.com/demo"
              />
              <ProjectCard
                title="Environmental Monitoring Dashboard"
                description="Built a real-time dashboard for environmental monitoring using ArcGIS Dashboards and IoT sensors."
                image="/placeholder.svg?height=300&width=400"
                tags={["ArcGIS Dashboards", "IoT", "Real-time Data"]}
                githubUrl="https://github.com/yourusername/env-monitoring"
                demoUrl="https://example.com/demo"
              />
              <ProjectCard
                title="Geocoding Service API"
                description="Developed a custom geocoding service API for international addresses using ArcGIS Enterprise."
                image="/placeholder.svg?height=300&width=400"
                tags={["ArcGIS Enterprise", "API Development", "Geocoding"]}
                githubUrl="https://github.com/yourusername/geocoding-api"
                demoUrl="https://example.com/demo"
              /> */}
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 bg-slate-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-emerald-700">GIS Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="ArcGIS Pro" />
                  <SkillBadge name="ArcGIS Online" />
                  <SkillBadge name="ArcGIS Enterprise" />
                  <SkillBadge name="ArcGIS JavaScript API" />
                  <SkillBadge name="ArcPy" />
                  <SkillBadge name="ArcGIS Dashboards" />
                  {/* <SkillBadge name="ArcGIS Survey123" />
                  <SkillBadge name="ArcGIS StoryMaps" /> */}
                  <SkillBadge name="QGIS" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-emerald-700">Programming & Development</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Python" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="HTML/CSS" />
                  <SkillBadge name="Angular" />
                  <SkillBadge name="React" />
                  <SkillBadge name="SQL" />
                  <SkillBadge name="Git" />
                  <SkillBadge name="REST APIs" />
                  <SkillBadge name="Node.js" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-emerald-700">
                  Data Analysis & Visualization
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Data Analysis" />
                  <SkillBadge name="Spatial Analysis" />
                  <SkillBadge name="Data Visualization" />
                  <SkillBadge name="Machine Learning" />
                  <SkillBadge name="Remote Sensing" />
                  <SkillBadge name="Web Scraping" />
                  <SkillBadge name="Data Cleaning" />
                  <SkillBadge name="Data Mining" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-6">
                  I'm currently open to new opportunities in GIS development and analysis. Feel free to reach out if
                  you'd like to discuss potential projects or job opportunities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-emerald-600" />
                    <a href="mailto:mr.jhon1327@gmail.com" className="hover:text-emerald-600 transition-colors">
                      mr.jhon1327@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-emerald-600" />
                    <a
                      href="https://linkedin.com/in/shaxrillo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 transition-colors"
                    >
                      linkedin.com/in/shaxrillo
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-emerald-600" />
                    <a
                      href="https://github.com/shakhrillo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 transition-colors"
                    >
                      github.com/shakhrillo
                    </a>
                  </div>
                </div>
              </div>
              {/* <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
              </form> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-800 text-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <UserIcon className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold">
                Shakhrillo
              </span>
            </div>
            <div className="text-slate-300 text-sm">© {new Date().getFullYear()} Shakhrillo. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
