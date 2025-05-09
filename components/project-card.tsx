import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  demoUrl?: string
}

export function ProjectCard({ title, description, image, tags, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="outline" size="sm" className="flex-1">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Code
          </Link>
        </Button>
        {demoUrl && (
          <Button asChild size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
