type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  github?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  details?: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Skill = {
  name: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Virtual AI Inventory',
    description:
      'Collaborative inventory management platform.',
    link: 'https://github.com/swapisticated/exp-inventory',
    video: '/VAI.mp4',
    id: 'project1',
    github: 'https://github.com/swapisticated/exp-inventory',
  },
  {
    name: 'Employee Management System',
    description:
      'Role-based HRMS.',
    link: 'https://github.com/swapisticated/HMS',
    video: '/HMS.mp4',
    id: 'project2',
    github: 'https://github.com/swapisticated/HMS',
  },
  // {
  //   name: 'Adaptive Water Management System',
  //   description:
  //     'Full-stack IoT system for real-time ESP32 device control and analytics via MQTT. React Native app and Next.js dashboard. Tech: React Native, Next.js, Fastify, Firestore, MQTT.',
  //   link: '',
  //   video: '',
  //   id: 'project3',
  //   github: '',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Skyroot Marktech',
    title: 'Mobile App Developer Intern',
    start: 'Feb 2025',
    end: 'Present',
    link: 'https://www.skyrootmarktech.com/ ',
    id: 'work1',
    details: `Built a cross-platform school management app in an Agile team, using React Native and Redux. Focused on streamlining school operations.

Responsibilities
- Developed secure authentication, session handling, and integrated dynamic APIs.
- Built reusable UI components, optimized performance, and implemented OneSignal push notifications.
- Participated in Agile ceremonies including sprint planning, daily standups, and code reviews.


Key Highlights

- Seamless authentication and session flows improved user experience.
- Debounced search reduced API load and boosted performance.
- Event-driven push notifications enabled real-time updates.`
  },
  {
    company: 'Experimind Labs',
    title: 'Full Stack Developer Intern',
    start: 'Jun 2024',
    end: 'Feb 2025',
    link: '',
    id: 'work2',
    details: `Built full-stack web and mobile applications using Next.js, Node.js, and React Native, focused on delivering real-time education and control platforms.
    
    Responsibilities
- Developed scalable web dashboards with Next.js and backend APIs using Node.js.
- Built cross-platform mobile apps in React Native, integrating REST APIs for dynamic data handling.
- Deployed and managed backend services using Docker and Nginx.
    
    
    Key Highlights
    
- Delivered responsive, production-grade web and mobile applications.
- Integrated real-time data pipelines for device control and content management.
- Automated deployment workflows, improving system reliability and release cycles.`
  },
]

export const SKILLS: Skill[] = [
  {
    name: 'Next.js',
    id: 'skill1',
  },
  {
    name: 'React Native',
    id: 'skill2',
  },
  {
    name: 'Node.js',
    id: 'skill3',
  },
  {
    name: 'Express.js',
    id: 'skill4',
  },
  {
    name: 'PostgreSQL',
    id: 'skill5',
  },
  {
    name: 'Git',
    id: 'skill6',
  },
  {
    name: 'Prisma ORM',
    id: 'skill7',
  },
  {
    name: 'Firebase',
    id: 'skill8',
  },
  {
    name: 'REST APIs',
    id: 'skill9',
  },
  {
    name: 'Docker',
    id: 'skill10'
  },
  {
    name: 'Postman',
    id: 'skill11'
  },
  {
    name: 'Docker',
    id: 'skill12',
  }


]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Secured Homomorphic Encryption and Authentication for Healthcare',
    description: 'Presented at ICRASET 2024, IEEE Xplore.',
    link: 'https://ieeexplore.ieee.org/document/10895758',
    uid: 'pub-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/swapisticated',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/swapisticated',
  },
]

export const EMAIL = 'swapnilsharma806@gmail.com'
