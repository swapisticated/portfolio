type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
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

export const PROJECTS: Project[] = [
  {
    name: 'Virtual AI Inventory',
    description:
      'Collaborative inventory management platform.',
    link: 'https://github.com/swapisticated/exp-inventory',
    video: '/VAI.mp4',
    id: 'project1',
  },
  {
    name: 'Employee Management System',
    description:
      'Role-based HRMS.',
    link: 'https://github.com/swapisticated/HMS',
    video: '/HMS.mp4',
    id: 'project2',
  },
  // {
  //   name: 'Adaptive Water Management System',
  //   description:
  //     'Full-stack IoT system for real-time ESP32 device control and analytics via MQTT. React Native app and Next.js dashboard. Tech: React Native, Next.js, Fastify, Firestore, MQTT.',
  //   link: '',
  //   video: '',
  //   id: 'project3',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Skyroot Marktech',
    title: 'Mobile App Developer Intern',
    start: 'Mar 2025',
    end: 'Present',
    link: 'https://www.skyrootmarktech.com/ ',
    id: 'work1',
    details: 'Worked on developing a cross-platform mobile app using React Native for inventory tracking. Implemented features for real-time data sync, push notifications, and user authentication.'
  },
  {
    company: 'Experimind Labs',
    title: 'Full Stack Developer Intern',
    start: 'Jun 2024',
    end: 'Feb 2025',
    link: '',
    id: 'work2',
    details: 'Built and maintained web applications using Next.js and Node.js. Collaborated with the design team to deliver responsive UI and integrated REST APIs for data management.'
  },
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
