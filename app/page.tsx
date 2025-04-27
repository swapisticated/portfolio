"use client"
import { motion } from "framer-motion"
import { XIcon } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight-new"
import { Magnetic } from "@/components/ui/magnetic"
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog"
import Link from "next/link"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { PROJECTS, WORK_EXPERIENCE, BLOG_POSTS, EMAIL, SOCIAL_LINKS, SKILLS } from "./data"
import { CursorTypeContext } from "@/components/ui/smooth-cursor"
import { IconBrandGithub } from "@tabler/icons-react"
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video src={src} autoPlay loop muted className="aspect-video w-full cursor-zoom-in rounded-xl" />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
          <MorphingDialogContent className="relative aspect-video w-full max-w-4xl lg:max-w-5xl rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 flex items-center justify-center">
            <video src={src} autoPlay loop muted className="w-full aspect-video max-h-[70vh] md:max-h-[90vh] lg:max-h-[95vh] rounded-xl" />
          </MorphingDialogContent>
          <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <XIcon className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </div>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        target="_blank" rel="noopener noreferrer"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

import React from "react"
import { useState, useCallback } from "react"

// Utility to render job.details with structure
function RenderJobDetails({ details }: { details: string }) {
  if (!details) return null;
  const lines = details.split(/\r?\n/).filter(Boolean);
  const elements = [];
  let listItems: React.ReactNode[] = [];
  lines.forEach((line, idx) => {
    if (line.startsWith('- ')) {
      listItems.push(
        <li key={`li-${idx}`} className="mb-1">{line.replace(/^- /, '')}</li>
      );
    } else {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${idx}`} className="list-disc ml-6 mb-3">{listItems}</ul>
        );
        listItems = [];
      }
      // Section headers
      if (/^(Responsibilities|Key Highlights)$/i.test(line.trim())) {
        elements.push(
          <div key={`h4-${idx}`} className="font-semibold mt-6 mb-2 text-zinc-800 dark:text-zinc-100">{line.trim()}</div>
        );
      } else if (line.trim() !== '') {
        elements.push(
          <p key={`p-${idx}`} className="mb-3">{line.trim()}</p>
        );
      }
    }
  });
  if (listItems.length > 0) {
    elements.push(
      <ul key={`ul-end`} className="list-disc ml-6 mb-3">{listItems}</ul>
    );
  }
  return <div>{elements}</div>;
}

export default function Personal() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null)
  const toggleJob = useCallback((jobId: string) => {
    setExpandedJobId((current) => (current === jobId ? null : jobId))
  }, [])
  const setCursorType = React.useContext(CursorTypeContext)

  return (
    <>
      <motion.main className="space-y-20" variants={VARIANTS_CONTAINER} initial="hidden" animate="visible">
        {/* Skills Section */}
     

        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
          <div className="flex-1">
            <p className="text-zinc-600 dark:text-zinc-400">
              Full-stack developer specializing in Next.js, React Native, and Node.js with practical experience in web and
              mobile applications.{" "}
            </p>
          </div>
        </motion.section>

        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
          <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
          <a> <div className="flex flex-col space-y-2">
            {WORK_EXPERIENCE.map((job) => {
              const isExpanded = expandedJobId === job.id
              return (
                <div
                  key={job.id}
                  className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30 transition-transform duration-300 hover:scale-[1.025]"
                  onClick={() => job.details && toggleJob(job.id)}
                  onMouseEnter={() => job.details && setCursorType && setCursorType('pointer')}
                  onMouseLeave={() => setCursorType && setCursorType('default')}
                >
                  
                  <div className="relative w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                    <div className="relative flex w-full flex-row justify-between items-center">
                      <div>
                        <h4 className="font-normal dark:text-zinc-100">{job.title}</h4>
                        <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
                      </div>
                      <div className="flex flex-col items-end justify-center min-w-[68px]">
                        <div className="flex flex-col items-end">
                          <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-tight">{job.start} - {job.end}</span>
                          {job.details && (
                            <svg
                              className={`mt-2 h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''} text-zinc-600 dark:text-zinc-400 md:hidden`}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>

                    {job.details && (
                      <div
                      className="mt-4 text-zinc-700 dark:text-zinc-300 text-sm  transition-all duration-300 ease-in-out"
                        style={{
                          maxHeight: isExpanded ? "500px" : "0",
                          opacity: isExpanded ? 1 : 0,
                          marginTop: isExpanded ? "1rem" : "0",
                        }}
                      >
                        <RenderJobDetails details={job.details} />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div></a>
         
        </motion.section>


        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
          <h3 className="mb-5 text-lg font-medium">Check out my latest work</h3>
          <h6 className="mb-5 text-md font-light text-zinc-900 dark:text-zinc-50">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</h6>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProjectVideo src={project.video} />
                </div>
                <div className="pr-4 flex items-center justify-between gap-2">
                  <span className="font-base font-[450] text-zinc-900 dark:text-zinc-50">{project.name}</span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                      className="inline-flex items-center text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                    >
                      <IconBrandGithub size={20} />
                    </a>
                  )}
                </div>
                <p className="text-base text-zinc-600 dark:text-zinc-400">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div>
          <section className="mb-12">
          <h2 className="mb-5 text-lg font-medium text-zinc-50">Skills</h2>
          <div className="flex  flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill.id}
                className="bg-zinc-50 text-zinc-900 px-4 py-1 rounded-lg font-light text-sm inline-block shadow-sm dark:bg-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
        </motion.div>

        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
          <h3 className="mb-3 text-lg font-medium">Publications</h3>
          <div className="flex flex-col space-y-0">
            <AnimatedBackground
              enableHover
              className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.2,
              }}
            >
              {BLOG_POSTS.map((post) => (
                <Link key={post.uid} className="-mx-3 rounded-xl px-3 py-3" href={post.link} data-id={post.uid} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col space-y-1">
                    <h4 className="font-normal dark:text-zinc-100">{post.title}</h4>
                    <div className="flex items-center space-x-1">
                      <p className="text-zinc-500 dark:text-zinc-400">{post.description}</p>
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 text-zinc-400 inline" />
                    </div>
                  </div>
                </Link>
              ))}
            </AnimatedBackground>
          </div>
        </motion.section>

        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
          <h3 className="mb-5 text-lg font-medium">Connect</h3>
          <p className="mb-5 text-zinc-600 dark:text-zinc-400">
            Feel free to contact me at{" "}
            <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer">
              {EMAIL}
            </a>
          </p>
          <div className="flex items-center justify-start space-x-3">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </>
  )
}
