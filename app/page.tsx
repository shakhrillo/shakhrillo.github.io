import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react"

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
            <MapPin className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">GIS Portfolio</span>
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
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">GIS Specialist & Developer</h1>
                <p className="text-lg md:text-xl mb-6">
                  Transforming geospatial data into meaningful insights and interactive experiences
                </p>
                <div className="flex gap-4">
                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href="#projects">View Projects</Link>
                  </Button>
                  <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
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
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                />
              </div>
              <div>
                <p className="text-lg mb-4">
                  I'm a passionate GIS specialist with expertise in Esri technologies and geospatial development. With a
                  background in [your background], I specialize in creating interactive maps, spatial analysis, and
                  developing custom GIS solutions.
                </p>
                <p className="text-lg mb-6">
                  My goal is to leverage geospatial technology to solve complex problems and help organizations make
                  data-driven decisions through effective visualization and analysis.
                </p>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/resume.pdf" target="_blank">
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
              <ProjectCard
                title="Urban Growth Analysis"
                description="Analyzed 10-year urban expansion patterns using Esri ArcGIS Pro and remote sensing data."
                image="/placeholder.svg?height=300&width=400"
                tags={["ArcGIS Pro", "Remote Sensing", "Spatial Analysis"]}
                githubUrl="https://github.com/yourusername/urban-growth"
                demoUrl="https://example.com/demo"
              />
              <ProjectCard
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
              />
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
                  <SkillBadge name="ArcGIS Survey123" />
                  <SkillBadge name="ArcGIS StoryMaps" />
                  <SkillBadge name="QGIS" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-emerald-700">Programming & Development</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Python" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="HTML/CSS" />
                  <SkillBadge name="React" />
                  <SkillBadge name="SQL" />
                  <SkillBadge name="R" />
                  <SkillBadge name="Git" />
                  <SkillBadge name="REST APIs" />
                  <SkillBadge name="Node.js" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-emerald-700">Analysis & Techniques</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Spatial Analysis" />
                  <SkillBadge name="Remote Sensing" />
                  <SkillBadge name="Geostatistics" />
                  <SkillBadge name="Network Analysis" />
                  <SkillBadge name="Geocoding" />
                  <SkillBadge name="Cartography" />
                  <SkillBadge name="3D Modeling" />
                  <SkillBadge name="Geodatabase Design" />
                  <SkillBadge name="Data Visualization" />
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
                    <a href="mailto:your.email@example.com" className="hover:text-emerald-600 transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-emerald-600" />
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 transition-colors"
                    >
                      linkedin.com/in/yourusername
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-emerald-600" />
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 transition-colors"
                    >
                      github.com/yourusername
                    </a>
                  </div>
                </div>
              </div>
              <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
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
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-800 text-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <MapPin className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold">GIS Portfolio</span>
            </div>
            <div className="text-slate-300 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
