"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Box2LineIcon,
} from "@/components/ui/accordion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
function ProjectsSection() {
  const [showMore, setShowMore] = useState(false);
  const [openItem, setOpenItem] = useState("project-1");
  const filteredProjects = showMore ? projects : projects.slice(0, 4);
  return (
    <section className=" border-x full-line-bottom relative">
      <h2 className="pl-4 text-3xl font-semibold relative full-line-bottom ">
        Projects{" "}
        <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
          ({projects.length})
        </sup>
      </h2>
      <div className="">
        {filteredProjects.map((project, index) => (
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            key={index}
          >
            <AccordionItem value={`project-${project.id}`}>
              <AccordionTrigger aria-label={project.createdAt}>
                <div className="flex items-center justify-between p-4 h-full w-fit ">
                  <div className="  size-6 shrink-0">
                    <Box2LineIcon />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center py-4 pl-4 border-l font-mono gap-1 h-full">
                  <h3 className="text-balance font-medium text-base leading-snug flex gap-2 items-center justify-center ">
                    {project.title}
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight className="size-4 text-muted-foreground hover:text-primary" />
                    </a>
                  </h3>
                  <span className="text-muted-foreground text-xs  ">
                    {project.createdAt}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 border-b">
                <div className="prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge">
                  <p>{project.description}</p>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.badge.map((badge, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-lg border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="mt-0 flex items-center gap-4 justify-start">
                    <a
                      href={project.href}
                      target="_blank"
                      className="mt-4 flex  hover:text-primary gap-2 items-center justify-center "
                    >
                      Github Repository{" "}
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="mt-4 flex  hover:text-primary gap-2  items-center justify-center "
                    >
                      Live demo{" "}
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      <div className="flex items-center py-2 justify-center">
        {showMore ? (
          <Button
            size={"sm"}
            onClick={() => setShowMore(false)}
            className="rounded-2xl flex items-center gap-2"
          >
            Show Less <ChevronUp />
          </Button>
        ) : (
          <Button
            size={"sm"}
            onClick={() => setShowMore(true)}
            className="rounded-2xl flex items-center gap-2"
          >
            Show More <ChevronDown />
          </Button>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
const projects = [
  {
    id: 1,
    title: "Galaria",
    href: "https://github.com/ronakmaheshwari/galaria",
    live: "https://galaria.10xdevs.me/",
    createdAt: "09-06-2025",
    description:
      "Galaria is a personal media vault built for speed, privacy, and seamless sharing. It allows users to upload, compress, and securely share photos and videos with email-based OTP login and modern cloud infrastructure.",
    features: [
      "OTP-based user authentication with Supabase + Resend (no passwords)",
      "Upload, compress, and store images/videos efficiently",
      "Image compression using Sharp; video encoding using FFmpeg",
      "Secure storage with Supabase or Cloudflare R2",
      "Email-based media sharing with Resend integration",
      "Modern, responsive UI built with React, Tailwind CSS, and Shadcn UI",
      "Backend powered by Express.js, Zod for validation, and Prisma ORM",
      "PostgreSQL database integration via Supabase + Prisma",
      "Organized folder structure for clean separation of concerns",
      "Deployable on Vercel (frontend) and Render/Fly.io (backend)",
    ],
    badge: [
      "Open source",
      "React",
      "Redis",
      "TypeScript",
      "Express.js",
      "Supabase",
      "Cloudflare R2",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma",
      "Zod",
      "FFmpeg",
      "Sharp",
      "Resend",
    ],
  },
  {
    id: 2,
    title: "10xdevs Editor",
    href: "https://github.com/ronakmaheshwari/editor", 
    live: "https://editor.10xdevs.me/", 
    createdAt: "02-06-2025", 
    description:
      "10xdevs Editor is a blazing-fast, browser-based code editor supporting multiple languages, real-time execution via Judge0 and Piston APIs, and a sleek Monaco-powered interface — ideal for developers, learners, and tinkerers alike.",
    features: [
      "Monaco-based in-browser code editor (like VS Code)",
      "Run code in real-time using Judge0 and Piston APIs",
      "Supports multiple languages including Python, C++, JavaScript, etc.",
      "User-defined input and menu-driven interactive programs",
      "Multiple editor themes like 'Noctis' and 'Shades of Purple'",
      "Automatic language detection for seamless execution",
      "Fully responsive and browser-based with zero setup",
      "Built with React + Vite for optimal performance",
      "Environment variable support for secure API usage",
      "Deployable on Vercel with full customization support",
    ],
    badge: [
      "Open source",
      "React",
      "TypeScript",
      "Monaco Editor",
      "Tailwind CSS",
      "Vite",
      "Judge0 API",
      "Piston API",
    ],
  },
  {
    id: 3,
    title: "Hirely",
    href: "https://github.com/ronakmaheshwari/hirely",
    live: "https://hirely.10xdevs.me/",
    createdAt: "10-05-2025",
    description:
      "Hirely is a modern job hiring platform designed to streamline the recruitment process with intuitive dashboards for candidates and recruiters, real-time updates, and built-in resume management.",
    features: [
      "Post, edit, and manage job listings with ease",
      "Candidate dashboard to track applications and upload resumes",
      "Recruiter dashboard for managing applicants and hiring pipelines",
      "Role-based access for Admins, Recruiters, and Candidates",
      "Advanced job/candidate search with filters and tags",
      "Built-in PDF resume viewer for recruiters",
      "Authentication using JWT with Zod validation",
      "Responsive UI built with React, Tailwind CSS, and TypeScript",
      "Backend built with Node.js, Express, and MongoDB",
      "Deployed with Vercel (frontend) and Render (backend)",
    ],
    badge: [
      "Open source",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Supabase",
      "JWT",
      "Tailwind CSS",
      "Zod",
    ],
  },
  {
    id: 4,
    title: "Second Brain",
    href: "https://github.com/ronakmaheshwari/second-brain", 
    live: "https://brain.10xdevs.me/", 
    createdAt: "12-05-2025", 
    description:
      "Second Brain is a personal knowledge management system that helps you capture, organize, and retrieve notes efficiently. With full-text search, markdown support, and seamless sync, it keeps your digital thoughts structured and always accessible.",
    features: [
      "Capture and organize notes, thoughts, and references",
      "Advanced full-text search for quick information retrieval",
      "Tag-based categorization and filtering of notes",
      "Write and edit notes in Markdown format",
      "Automatic sync and backup to prevent data loss",
      "Web and mobile-friendly responsive design",
      "User authentication using JWT and Zod",
      "Built with React, Tailwind CSS, and Supabase",
      "PostgreSQL database integration via Prisma and NeonDB",
      "Deployable via Vercel (frontend) and Render (backend)",
    ],
    badge: [
      "Open source",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "JWT",
      "Zod",
      "Express.js",
      "Markdown",
      "NeonDB",
    ],
  },
  {
    id: 5,
    title: "Craddle",
    href: "https://github.com/ronakmaheshwari/Craddle",
    live: "https://craddle.vercel.app/", 
    createdAt: "10-04-2025", 
    description:
      "Craddle is a minimalist web app built to help users enter a deep focus state by reducing digital distractions. With a clean, zen-inspired UI, it’s perfect for reading, writing, and coding without interruption.",
    features: [
      "Minimalist and distraction-free interface",
      "Helps users enter a state of deep work and focus",
      "Optimized for tasks like reading, journaling, or coding",
      "Zen-inspired dark and light themes",
      "Responsive design for mobile and desktop",
      "Built with Next.js and TypeScript for performance",
      "Modern UI powered by Tailwind CSS and Shadcn UI",
      "Instant setup, no account required to start focusing",
      "Lightweight and fast-loading experience",
    ],
    badge: [
      "Open source",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Minimal UI",
      "Zen design",
      "Distraction-free",
    ],
  },
  {
    id: 6,
    title: "Medium",
    href: "https://github.com/ronakmaheshwari/medium",
    live: "https://medium-ten-kappa.vercel.app/",
    createdAt: "22-04-2025",
    description:
      "A fully functional Medium-like blogging platform where users can create, edit, read, and manage blog posts. Built with Hono backend, modern authentication, and a polished React + Tailwind frontend for seamless writing and reading.",
    features: [
      "Create, edit, and publish blog posts with title and content",
      "Read published blogs in a clean and readable format",
      "Secure login and signup using JWT authentication",
      "Backend powered by Hono for fast, lightweight APIs",
      "Beautiful and modern UI built with React and Tailwind CSS",
      "PostgreSQL integration using Prisma ORM",
      "Markdown-friendly editing environment",
      "Full CRUD API for blog operations",
      "Deployed on Vercel (frontend) and Cloudflare Workers (backend)",
    ],
    badge: [
      "Open source",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Hono",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Zod",
      "Cloudflare Workers",
      "Vercel",
    ],
  },
  // {
  //   id: 7,
  //   title: "Friendz",
  //   href: "https://github.com/taqui-786/project-friendz",
  //   live: "https://friendz.vercel.app/",
  //   createdAt: "16-08-2023",
  //   description:
  //     "Friendz is a social media platform that allows users to connect with friends, share updates, and engage in discussions. It provides a user-friendly interface for managing friendships and interactions.",
  //   features: [
  //     "Connect with friends",
  //     "Share updates and posts",
  //     "Engage in discussions",
  //     "User-friendly interface",
  //     "Authentication powered by Next-Auth",
  //     "Built with Next.js 14 framework",
  //     "Modern UI components styled with shadcn-ui and Tailwind CSS",
  //   ],
  //   badge: [
  //     "Open source",
  //     "Next Auth",
  //     "Typescript",
  //     "Firebase image upload",
  //     "Editor.js",
  //     "Prisma ORM",
  //     "Redis cache",
  //     "Zod",
  //     "Lodash",
  //     "Tailwind CSS",
  //     "Shadcn UI",
  //   ],
  // },
  // {
  //   id: 8,
  //   title: "GitEstimate",
  //   href: "https://github.com/taqui-786/GitEstimate",
  //   live: "https://gitestimate.vercel.app/",
  //   createdAt: "09-12-2023",
  //   description:
  //     "GitEstimate is a FUN tool that helps developers estimate the time required to complete tasks based on their GitHub activity. It provides insights into productivity and helps in planning work effectively.",
  //   features: [
  //     "Estimate task completion time",
  //     "Analyze GitHub activity",
  //     "Get insights into productivity",
  //     "Plan work effectively",
  //     "User-friendly interface",
  //     "Built with Next.js 14 framework",
  //     "Modern UI components styled with shadcn-ui and Tailwind CSS",
  //   ],
  //   badge: [
  //     "Open source",
  //     "Next.js",
  //     "Typescript",
  //     "Html to Canvas",
  //     "github-canvas",

  //     "Tailwind CSS",
  //     "Shadcn UI",
  //   ],
  // },
  // {
  //   id: 9,
  //   title: "FormCraft",
  //   href: "https://github.com/taqui-786/formcraft",
  //   live: "https://formcraft-ti.vercel.app/",
  //   createdAt: "25-08-2024",
  //   description:
  //     "FormCraft is a powerful tool for developers to create forms in GUI and copy the code to use in their projects. It provides a drag-and-drop interface for building forms and managing submissions.",
  //   features: [
  //     "Drag-and-drop form builder",
  //     "Customizable form fields",
  //     "Copy and paste code for easy integration",
  //     "React Hook Form integration for form validation",
  //     "User-friendly interface",
  //     "Built with Next.js 14 framework",
  //     "Modern UI components styled with shadcn-ui and Tailwind CSS",
  //   ],
  //   badge: [
  //     "Open source",
  //     "Next.js",
  //     "Typescript",
  //     "React Hook Form",
  //     "Zod Validation",
  //     "Framer Motion",

  //     "Tailwind CSS",
  //     "Shadcn UI",
  //   ],
  // },
  // {
  //   id: 10,
  //   title: "Devzone",
  //   href: "https://github.com/taqui-786/Devzone",
  //   live: "https://devzone-ti.vercel.app/",
  //   createdAt: "03-11-2024",
  //   description:
  //     "DevZone is an innovative platform designed to connect developers, fostering collaboration and knowledge sharing within the tech community. It offers a space for developers to showcase their skills, share projects, and engage in discussions.",
  //   features: [
  //     "Developer Profiles: Create and customize your developer profile",
  //     "Project Showcase: Share your projects and get feedback from peers",
  //     "Collaborative Coding: Real-time code collaboration tools",
  //     "Community Forums: Engage in discussions on various tech topics",
  //     "Resource Sharing: Share and discover valuable developer resources",
  //     "Job Board: Find opportunities or hire talent within the community",
  //     "Built with Next.js 14 framework",
  //     "Modern UI components styled with shadcn-ui and Tailwind CSS",
  //   ],
  //   badge: [
  //     "Open source",
  //     "Next.js",
  //     "Typescript",
  //     "Zustand",
  //     "Realtime Messaging",
  //     "Supabase SSR",
  //     "React Hook Form",
  //     "Zod Validation",
  //     "Framer Motion",
  //     "Tanstack Query",
  //     "Tailwind CSS",
  //     "Shadcn UI",
  //   ],
  // },
];
