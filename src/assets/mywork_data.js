import project1_img from '../assets/ChattingApp.png';
import project2_img from '../assets/aisoftcompanywebsite.png';
import project3_img from '../assets/movieapp.png';
import project4_img from '../assets/netflxbanner.png';
import project5_img from '../assets/project_5.png';

import fitfab_gym from '../assets/fitfab_gym.png';
import fitfab_programs from '../assets/fitfab_programs.png';
import fitfab_schedule from '../assets/fitfab_schedule.png';

import android_chat_screen from '../assets/android_chat_screen.png';
import android_native_app from '../assets/android_native_app.png';
import chat_screen from '../assets/chat_screen.png';
import login_screen from '../assets/login_screen.png';
import members_modal from '../assets/members_modal.png';
import emulator_screen from '../assets/emulator_screen.png';

const mywork_data = [
    {
        w_no: 1,
        w_name: "PulseChat - Real-Time Android App",
        w_category: "android",
        w_badge: "Featured Android App",
        w_desc: "High-performance real-time messaging app for Android & Web with instant Socket.io delivery, SQLite chat persistence, typing indicators, active members modal, and modern mobile UI.",
        w_img: android_chat_screen,
        w_screenshots: [
            android_chat_screen,
            chat_screen,
            login_screen,
            members_modal,
            android_native_app,
            emulator_screen
        ],
        w_tags: ["Android", "React Native", "Socket.io", "SQLite", "Node.js", "Expo", "REST API"],
        w_link: "https://github.com/Ritikjain91/BasicChatapp",
        w_live: "",
        w_apk: process.env.PUBLIC_URL + "/downloads/PulseChat.zip",
        w_apk_name: "PulseChat.zip (contains PulseChat.apk)",
        w_highlights: [
            "Real-time bidirectional messaging via Socket.io with delivery & read receipts",
            "Offline-first chat history persisted in local SQLite database",
            "Animated typing indicators, user presence badges & member drawer",
            "Complete Android APK build ready for mobile installation"
        ]
    },
    {
        w_no: 2,
        w_name: "OneClick Android App",
        w_category: "android",
        w_badge: "Android Mobile App",
        w_desc: "Fast and lightweight mobile utility application built with React Native and Expo, featuring smooth navigation transitions, clean component architecture, and responsive mobile layouts.",
        w_img: android_native_app,
        w_screenshots: [
            android_native_app,
            android_chat_screen,
            emulator_screen
        ],
        w_tags: ["Android", "React Native", "Expo", "Mobile UI", "JavaScript"],
        w_link: "https://github.com/Ritikjain91",
        w_live: "",
        w_apk: "",
        w_highlights: [
            "Modular React Native components with responsive layout engine",
            "Optimized asset loading and lightweight bundle size",
            "Native gesture navigation and touch feedback"
        ]
    },
    {
        w_no: 3,
        w_name: "ComposeFlow - Native Android Architecture",
        w_category: "android",
        w_badge: "Native Kotlin & Compose",
        w_desc: "Modern native Android app showcase built with Kotlin, Jetpack Compose, Material 3, MVVM Clean Architecture, Coroutines, StateFlow, and Room Database persistence.",
        w_img: emulator_screen,
        w_screenshots: [
            emulator_screen,
            android_chat_screen,
            chat_screen
        ],
        w_tags: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines", "Room DB", "Material 3"],
        w_link: "https://github.com/Ritikjain91",
        w_live: "",
        w_apk: "",
        w_highlights: [
            "Declarative UI built with Jetpack Compose & Material You theming",
            "Single-source-of-truth architecture using Room Database & StateFlow",
            "Repository pattern with separation of concerns and clean MVVM"
        ]
    },
    {
        w_no: 4,
        w_name: "FIT&FAB PRO - Gym & Biomechanics Sanctuary",
        w_category: "web",
        w_badge: "Featured Web Platform",
        w_desc: "High-performance fitness & athletic sanctuary web application featuring an interactive real-time biomechanics simulator, movable 3D athlete lab, dynamic class scheduling, master trainers, and responsive dark/light UI.",
        w_img: fitfab_gym,
        w_screenshots: [
            fitfab_gym,
            fitfab_programs,
            fitfab_schedule
        ],
        w_tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Biomechanics Lab", "Lucide Icons"],
        w_link: "https://github.com/Ritikjain91/Gymwebsite",
        w_live: "https://gymwebsite-gamma-sepia.vercel.app/",
        w_highlights: [
            "Interactive real-time biomechanics simulator with dumbbell curl motion & power telemetry",
            "Filterable masterclass training timetable across 7 days and multiple disciplines",
            "Sleek athletic dark mode aesthetic with custom Volt Green accents and animations",
            "Documented athlete transformations, coach rosters, and membership reservation flows"
        ]
    },
    {
        w_no: 5,
        w_name: "Chatting Application (Web)",
        w_category: "web",
        w_badge: "Full Stack Web",
        w_desc: "Real-time web chat platform with instant room messaging, user presence, audio alerts, and responsive multi-device design.",
        w_img: project1_img,
        w_screenshots: [project1_img],
        w_tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
        w_link: "https://github.com/Ritikjain91/OndealChatApp",
        w_live: "https://ondeal-chat-app.vercel.app/"
    },
    {
        w_no: 6,
        w_name: "AI Software Company Website",
        w_category: "web",
        w_badge: "Enterprise Web",
        w_desc: "High-conversion enterprise landing platform showcasing AI solutions with modern interactive design, glassmorphism, and performance optimization.",
        w_img: project2_img,
        w_screenshots: [project2_img],
        w_tags: ["React", "Modern CSS", "Glassmorphism", "Responsive UI"],
        w_link: "https://github.com/Ritikjain91/AiSoftSoftware-Solution",
        w_live: "https://profound-douhua-2992fc.netlify.app/"
    },
    {
        w_no: 7,
        w_name: "Movie Discovery App",
        w_category: "web",
        w_badge: "React & REST API",
        w_desc: "Dynamic entertainment browser with live TMDB API search, trending media feeds, movie trailers, and detailed reviews.",
        w_img: project3_img,
        w_screenshots: [project3_img],
        w_tags: ["React", "TMDB API", "JavaScript", "Tailwind CSS"],
        w_link: "https://github.com/Ritikjain91/movie-discovery-app",
        w_live: "https://movie-discovery-app-hazel.vercel.app/"
    },
    {
        w_no: 8,
        w_name: "Netflix Clone",
        w_category: "web",
        w_badge: "Streaming Clone",
        w_desc: "Media streaming clone featuring movie trailers, content category rows, responsive hero billboard, and smooth carousel UI.",
        w_img: project4_img,
        w_screenshots: [project4_img],
        w_tags: ["React", "REST API", "CSS Grid", "Firebase"],
        w_link: "https://github.com/Ritikjain91/Netflix-Clone",
        w_live: "https://669a316e28818db0ae4f9f2e--cute-cascaron-e7c739.netlify.app/"
    },
    {
        w_no: 9,
        w_name: "Global Seller Platform",
        w_category: "web",
        w_badge: "E-Commerce",
        w_desc: "E-commerce vendor hub with inventory tracking, order management, revenue analytics dashboard, and secure transaction workflows.",
        w_img: project5_img,
        w_screenshots: [project5_img],
        w_tags: ["MERN Stack", "Express", "Redux", "SQL / NoSQL"],
        w_link: "https://github.com/Ritikjain91/global-seller-platform",
        w_live: "https://global-seller-platform.vercel.app/"
    }
];

export default mywork_data;