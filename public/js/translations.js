// Multilingual Support System
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            greeting: "Hi, I'm",
            description: "Passionate Software Engineer specializing in full-stack development with modern technologies",
            contact: "Get In Touch",
            projects: "View My Work"
        },
        about: {
            title: "About Me",
            subtitle: "Get to know more about who I am",
            description1: "I'm a passionate Software Engineer with experience in full-stack development, specializing in modern web technologies and AI integration. Currently pursuing my Bachelor's degree in Computer Science at Can Tho University.",
            description2: "I enjoy creating innovative solutions that combine cutting-edge technology with user-centered design. My experience includes working with React, Node.js, Golang, and AI technologies to build scalable applications.",
            location: "Ho Chi Minh City, Vietnam",
            stats: {
                projects: "Featured Projects",
                experience: "Years Experience",
                toeic: "TOEIC Score",
                gpa: "GPA"
            }
        },
        skills: {
            title: "Skills & Technologies",
            subtitle: "My technical expertise",
            frontend: "Frontend",
            backend: "Backend",
            tools: "Tools & Others"
        },
        experience: {
            title: "Experience",
            subtitle: "My professional journey",
            teknix: {
                title: "Front-End Developer",
                company: "Teknix Corporation",
                desc1: "Contributed to real-world web app project utilizing Refine, Next.js, and TypeScript",
                desc2: "Integrated Refine with Directus to enhance backend setup and optimize content management",
                desc3: "Developed dynamic UI components integrated with RESTful APIs from Directus",
                desc4: "Applied Agile methodologies using Jira, Git to deliver features weekly"
            },
            fpt: {
                title: "Intern Front-End Developer",
                company: "FPT Software",
                desc1: "Modernized legacy finance module with ReactJS and Golang, enhancing load times significantly",
                desc2: "Developed expense management feature in COBOL for mainframe-based finance system",
                desc3: "Gained experience in enterprise-grade systems and Agile development methodologies"
            },
            education: {
                title: "Bachelor of Computer Science",
                company: "Can Tho University",
                desc1: "Major in Computer Science with GPA 3.47",
                desc2: "Thesis: \"SMARTFORUMCICT: An Intelligent Learning Support Forum for Students\"",
                desc3: "Grade: 9.4/10"
            }
        },
        projects: {
            title: "Featured Projects",
            subtitle: "Some of my recent work",
            smartforum: {
                title: "Smart Forum",
                tech: "ReactJS • Golang • MySQL • AI",
                desc: "Intelligent forum platform with semantic search, RAG-based chatbot, and automated content moderation using AI technologies."
            },
            blog: {
                title: "Katz Dev Blog",
                tech: "ReactJS • Node.js • MongoDB • WebRTC",
                desc: "Job search platform for students with smart filtering, real-time messaging, and video interview scheduling capabilities."
            },
            library: {
                title: "Library Management",
                tech: "ReactJS • MongoDB • Ant Design",
                desc: "Complete library management system with book cataloging, borrowing workflows, and responsive UI design."
            }
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Let's work together",
            email: {
                title: "Email"
            },
            phone: {
                title: "Phone"
            },
            location: {
                title: "Location",
                value: "Can Tho City, Vietnam"
            },
            form: {
                name: "Your Name",
                email: "Your Email",
                subject: "Subject",
                message: "Your Message",
                submit: "Send Message"
            }
        },
        footer: {
            rights: "All rights reserved.",
            made: "Made with ❤️ using modern web technologies"
        }
    },
    vi: {
        nav: {
            home: "Trang chủ",
            about: "Về tôi",
            skills: "Kỹ năng",
            experience: "Kinh nghiệm",
            projects: "Dự án",
            contact: "Liên hệ"
        },
        hero: {
            greeting: "Xin chào, tôi là",
            description: "Kỹ sư phần mềm đam mê chuyên về phát triển full-stack với các công nghệ hiện đại",
            contact: "Liên hệ",
            projects: "Xem dự án"
        },
        about: {
            title: "Về tôi",
            subtitle: "Tìm hiểu thêm về tôi",
            description1: "Tôi là một Kỹ sư Phần mềm đam mê với kinh nghiệm trong phát triển full-stack, chuyên về các công nghệ web hiện đại và tích hợp AI. Hiện đang theo học bằng Cử nhân Khoa học Máy tính tại Đại học Cần Thơ.",
            description2: "Tôi thích tạo ra các giải pháp sáng tạo kết hợp công nghệ tiên tiến với thiết kế lấy người dùng làm trung tâm. Kinh nghiệm của tôi bao gồm làm việc với ReactJS, Node.js, Golang và các công nghệ AI để xây dựng các ứng dụng có thể mở rộng.",
            location: "Thành phố Cần Thơ, Việt Nam",
            stats: {
                projects: "Dự án nổi bật",
                experience: "Năm kinh nghiệm",
                toeic: "Điểm TOEIC",
                gpa: "GPA"
            }
        },
        skills: {
            title: "Kỹ năng & Công nghệ",
            subtitle: "Chuyên môn kỹ thuật của tôi",
            frontend: "Frontend",
            backend: "Backend",
            tools: "Công cụ & Khác"
        },
        experience: {
            title: "Kinh nghiệm",
            subtitle: "Hành trình nghề nghiệp của tôi",
            teknix: {
                title: "Lập trình viên Front-End",
                company: "Tập đoàn Teknix",
                desc1: "Tham gia dự án ứng dụng web thực tế sử dụng Refine, Next.js và TypeScript",
                desc2: "Tích hợp Refine với Directus để cải thiện thiết lập backend và tối ưu hóa quản lý nội dung",
                desc3: "Phát triển các thành phần UI động tích hợp với RESTful APIs từ Directus",
                desc4: "Áp dụng phương pháp Agile sử dụng Lark, Git để cung cấp tính năng hàng tuần"
            },
            fpt: {
                title: "Thực tập sinh Lập trình viên Front-End",
                company: "FPT Software",
                desc1: "Hiện đại hóa module tài chính cũ với ReactJS và Golang, cải thiện đáng kể thời gian tải",
                desc2: "Phát triển tính năng quản lý chi phí bằng COBOL cho hệ thống tài chính dựa trên mainframe",
                desc3: "Có kinh nghiệm với các hệ thống cấp doanh nghiệp và phương pháp phát triển Agile"
            },
            education: {
                title: "Kỹ sư Khoa học Máy tính",
                company: "Đại học Cần Thơ",
                desc1: "Chuyên ngành Khoa học Máy tính với GPA 3.47",
                desc2: "Luận văn: \"SMARTFORUMCICT: Diễn đàn Hỗ trợ Học tập Thông minh cho Sinh viên\"",
                desc3: "Điểm: 9.4/10"
            }
        },
        projects: {
            title: "Dự án nổi bật",
            subtitle: "Một số công việc gần đây của tôi",
            smartforum: {
                title: "Diễn đàn thông minh",
                tech: "ReactJS • Golang • MySQL • AI",
                desc: "Nền tảng diễn đàn thông minh với tìm kiếm ngữ nghĩa, chatbot dựa trên RAG và kiểm duyệt nội dung tự động sử dụng công nghệ AI."
            },
            blog: {
                title: "Katz Dev Blog",
                tech: "ReactJS • Node.js • MongoDB • WebRTC",
                desc: "Nền tảng tìm việc cho sinh viên với bộ lọc thông minh, nhắn tin thời gian thực và khả năng lên lịch phỏng vấn video."
            },
            library: {
                title: "Quản lý thư viện",
                tech: "ReactJS • MongoDB • Ant Design",
                desc: "Hệ thống quản lý thư viện hoàn chỉnh với danh mục sách, quy trình mượn và thiết kế UI responsive."
            }
        },
        contact: {
            title: "Liên hệ",
            subtitle: "Hãy cùng làm việc",
            email: {
                title: "Email"
            },
            phone: {
                title: "Điện thoại"
            },
            location: {
                title: "Vị trí",
                value: "Thành phố Hồ Chí Minh, Việt Nam"
            },
            form: {
                name: "Tên của bạn",
                email: "Email của bạn",
                subject: "Chủ đề",
                message: "Tin nhắn của bạn",
                submit: "Gửi tin nhắn"
            }
        },
        footer: {
            rights: "Tất cả quyền được bảo lưu.",
            made: "Được tạo với ❤️ sử dụng các công nghệ web hiện đại"
        }
    }
};

// Language Management Class
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferred-language') || 'en';
        this.init();
    }

    init() {
        this.setupLanguageButtons();
        this.applyTranslations();
        this.updateActiveLanguageButton();
    }

    setupLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        if (lang && translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('preferred-language', lang);
            this.applyTranslations();
            this.updateActiveLanguageButton();
        }
    }

    applyTranslations() {
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        
        elementsToTranslate.forEach(element => {
            const key = element.dataset.translate;
            const translation = this.getNestedTranslation(key);
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    getNestedTranslation(key) {
        const keys = key.split('.');
        let translation = translations[this.currentLanguage];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                return null;
            }
        }
        
        return translation;
    }

    updateActiveLanguageButton() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === this.currentLanguage) {
                btn.classList.add('active');
            }
        });
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});