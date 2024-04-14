import { FiUser } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export const NAVBAR_LINKS = [
    {
        href: '#about',
        key: 'about',
        label: 'About',
    },
    {
        href: '#projects',
        key: 'projects',
        label: 'Projects',
    },
    {
        href: '/mertcv.pdf',
        key: 'resume',
        label: 'Resume',
    },
    {
        href: '#contact',
        key: 'contact',
        label: 'Contact',
    },
];

export const PROFILE_INFO = [
    {
        name: 'Mert Çetin',
        department: 'Front-End Developer',
        info: 'Since 2022, I am a self-motivated and enthusiastic software developer. I want to be a good player who pursues a common goal, makes the team great. I always strive to reach the highest possible standard.'
    },
]

export const PROFILE_LINKS = [
    {
        href: 'https://github.com/mertcetiin',
        key: 'github',
        label: 'Github',
        iconHover: 'customGray800',
    },
    {
        href: 'https://www.linkedin.com/in/mertcetin-dev/',
        key: 'linkedın',
        label: 'Linkedın',
        iconHover: 'customBlue600',
    },
    {
        href: 'https://twitter.com/merttcettin',
        key: 'twitter',
        label: 'Twitter',
        iconHover: 'customBlue500',
    },
    {
        href: 'https://www.instagram.com/mertt.cetiin/',
        key: 'instagram',
        label: 'Instagram',
        iconHover: 'customTeal500',
    },
]

export const PROJECTS_INFO = [
    {
        name: 'Algoo',
        href: 'https://www.algoo.de',
        content: 'In this project, I played a significant role in developing a modern and impressive website for Algoo.',
        skills: ['Next.js', ' TypeScript', ' TailwindCss', ' Framer Motion'],
    },
    {
        name: 'Chat App',
        href: 'https://github.com/mertcetiin/ChatApp',
        content: 'This project contains a simple chat application built using Next.js. Firebase is used for user authentication, and Firestore is used as the database.',
        skills: ['Next.js', ' Firebase'],
    },
    {
        name: 'Movie-WebSite',
        href: 'https://github.com/mertcetiin/Movie-WebSite',
        content: 'Movie is a web application developed using Next.js, offering users the opportunity to discover and review film information.',
        skills: ['React.tsx', 'Zustand'],
    },
    {
        name: 'Portfolio',
        href: 'https://github.com/mertcetiin/PortfolioV2',
        content: 'This project contains a React TSX application used to create my personal portfolio website.',
        skills: ['React.tsx', 'TailwindCss'],
    },
    {
        name: 'e-commerce',
        href: 'https://github.com/mertcetiin/e-commerce',
        content: 'This project contains an e-commerce application created using React and TypeScript and developed with Zustand, a state management library.',
        skills: ['React.tsx', 'TailwindCss'],
    },
    {
        name: 'TodoList',
        href: 'https://github.com/mertcetiin/React-TodoList',
        content: 'With this application, users can add new tasks, view and delete existing tasks.',
        skills: ['JavaScript', 'Bootstrap'],
    },
]

export const MOBIL_MENU = [
    {
        href: '#about',
        iconItem: <FiUser />,
        title: 'About',
    },
    {
        href: '#projects',
        iconItem: <GrProjects />,
        title: 'Projects',
    },
    {
        href: '',
        iconItem: <IoClose />,
        title: 'close',
    },
    {
        href: '/mertcv.pdf',
        iconItem: <FaFileDownload />,
        title: 'Resume',
    },
    {
        href: '#contact',
        iconItem: <IoIosSend />,
        title: 'Contact',
    },
]

export const FOOTER_LINKS = [
    {
        href: 'https://github.com/mertcetiin',
        iconItem: <FaGithub />,
    },
    {
        href: 'https://www.linkedin.com/in/mertcetin-dev/',
        iconItem: <FaLinkedin />,
    },
    {
        href: 'https://twitter.com/merttcettin',
        iconItem: <FaTwitter />,
    },
    {
        href: 'https://www.instagram.com/mertt.cetiin/',
        iconItem: <FaInstagram />,
    },
]