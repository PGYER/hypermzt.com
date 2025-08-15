// 多语言翻译配置
const translations = {
    zh: {
        // 页面标题
        page: {
            title: "Hyper MZT - AI智能硬件通信中枢 | 同声传译·音视频通话·会议记录·多设备集成"
        },
        
        // 移动端菜单
        mobile: {
            description: "专业的AI智能音视频翻译应用"
        },
        
        // 导航栏
        nav: {
            features: "功能特性",
            products: "产品页面",
            scenarios: "使用场景", 
            advantages: "产品优势",
            faq: "常见问题",
            download: "立即下载"
        },
        
        // 产品页面翻译
        products: {
            coreProducts: "核心产品",
            businessSolutions: "商务解决方案",
            specializedSolutions: "专业解决方案",
            aiTranslation: "AI翻译",
            realTimeTranslation: "实时翻译",
            voiceTranslator: "即时语音翻译器",
            voiceTranslationSoftware: "语音翻译软件",
            smartGlasses: "智能眼镜翻译器",
            meetingTranslation: "会议翻译",
            businessTranslation: "商务翻译软件",
            travelTranslator: "旅行翻译应用",
            languageLearning: "AI语言学习",
            education: "教育翻译平台",
            healthcare: "医疗翻译器",
            legal: "法律翻译AI",
            customerService: "客服翻译",
            tourism: "旅游翻译解决方案",
            professional: "专业版",
            aiCommunicationHub: "AI沟通中心",
            iotTranslation: "物联网翻译平台", 
            wearableTranslator: "可穿戴设备翻译器",
            crossCultural: "跨文化沟通",
            teamCollaboration: "国际团队协作",
            remoteWork: "远程工作翻译器",
            conferenceInterpretation: "会议同声传译",
            globalCustomerSupport: "全球客户支持",
            airportTranslation: "机场翻译助手",
            hotelCommunication: "酒店客户沟通",
            restaurantMenu: "餐厅翻译菜单",
            emergencyTranslation: "紧急翻译服务"
        },
        
        // 英雄区域
        hero: {
            title: "让智能设备更聪明<br>是我们想做的事",
            description: "Hyper MZT 是专为智能设备设计的AI通信中枢应用，具备同声传译、音视频通话、会议记录总结及多应用集成等功能，可提供跨语言、跨平台的高效沟通体验，蓝牙耳机、智能眼镜等多种硬件设备均可接入使用。",
            downloadButton: "立即下载",
            tags: {
                smartTranslation: "智能翻译",
                simultaneous: "同声传译", 
                callTranslation: "通话翻译",
                recordingSummary: "录音总结"
            }
        },
        
        // 功能特性
        features: {
            title: "强大功能，智能体验",
            subtitle: "全方位的AI智能功能，让您的沟通无障碍，工作更高效",
            aiAssistant: {
                title: "AI助手",
                description: "智能AI助手为您提供实时翻译、语音识别、智能对话等功能，让沟通更加便捷高效。"
            },
            meetingRecording: {
                title: "会议录音",
                description: "高质量会议录音功能，支持实时转写和翻译，让您不错过任何重要信息。"
            },
            simultaneous: {
                title: "同声传译",
                description: "实时同声传译技术，支持100+语言，让跨语言沟通变得简单自然。"
            },
            videoChat: {
                title: "视频聊天",
                description: "高清视频聊天功能，支持实时翻译字幕，让面对面交流无障碍。"
            },
            bidirectional: {
                title: "双向模式",
                description: "智能双向翻译模式，支持语音和文字的双向转换，满足不同场景需求。"
            },
            freeTrial: {
                title: "免费畅享",
                description: "免费试用，无限制使用核心功能，让每个人都能享受AI翻译的便利。"
            }
        },
        
        // 同声传译
        simultaneousSection: {
            title: "同声传译",
            description: "让语言不再成为障碍。Hyper MZT支持100+种语言的实时语音翻译，双语字幕自动呈现，适配多场景通话与面对面交流。即使在嘈杂环境中，也能稳定识别并高效呈现双语对话，帮助你跨语种轻松沟通。",
            imageAlt: "同声传译功能截图",
            tags: {
                languages: "100+语言支持",
                realtime: "实时翻译",
                subtitles: "双语字幕",
                noiseReduction: "降噪识别"
            }
        },
        
        // 音视频翻译
        videoTranslation: {
            title: "音视频翻译",
            subtitle: "边通话，边翻译，边显示",
            description: "无论是语音还是视频通话，Hyper MZT 都能实时进行双向翻译，自动显示字幕。无需安装App也可通过网页接入，电脑端点击链接即可加入通话，实现灵活沟通、快速连接。",
            imageAlt: "音视频翻译功能截图",
            tags: {
                bidirectional: "双向翻译",
                autoSubtitles: "自动字幕",
                webAccess: "网页接入",
                quickConnect: "快速连接"
            }
        },
        
        // AI会议记录
        aiMeeting: {
            title: "AI 会议记录",
            subtitle: "一键录音，自动生成内容结构",
            summary: "摘要：抓取重点，快速回顾",
            outline: "大纲：分段整理，逻辑清晰", 
            mindmap: "思维导图：结构清晰，便于汇报",
            description: "适合远程协作、头脑风暴、团队总结等多种场景。",
            tags: {
                smartSummary: "智能摘要",
                structure: "结构整理",
                mindmap: "思维导图",
                multiScene: "多场景适用"
            }
        },
        
        // 双向模式
        bidirectionalMode: {
            title: "双向模式",
            description: "支持「智能设备＋手机」协同翻译：一人佩戴耳机或眼镜，另一人对着手机说话。双方谈话内容均会被翻译为对方的语言，从各自的设备中低延迟播放支持100+语言互译、多语种切换，适用于旅游、教学、商谈等场景等场景。",
            imageAlt: "双向模式功能截图",
            features: [
                "智能设备与手机协同工作",
                "低延迟实时翻译播放",
                "100+语言互译支持",
                "多语种快速切换"
            ],
            tags: {
                deviceSync: "设备协同",
                lowLatency: "低延迟",
                multiLanguage: "多语言",
                richScenes: "场景丰富"
            }
        },
        
        // 智能硬件
        smartHardware: {
            title: "让智能硬件更智能",
            description: "Hyper MZT专为智能硬件设备设计，通过简单的连接配对，即可为您的蓝牙耳机、智能眼镜、智能手表等设备赋予强大的AI能力，让普通设备瞬间升级为智能AI设备。",
            devices: ["蓝牙耳机", "智能眼镜", "智能手表", "智能音箱", "智能手环"]
        },
        
        // 使用场景
        scenarios: {
            title: "使用场景",
            subtitle: "适用于各种生活和工作场景，让您的智能设备发挥更大价值",
            business: {
                title: "商务会议",
                description: "佩戴智能眼镜或耳机参加国际会议，实时获得翻译字幕和语音，轻松理解外籍同事发言，提升会议效率。",
                devices: ["智能眼镜", "蓝牙耳机"]
            },
            travel: {
                title: "国际旅行",
                description: "出国旅游时，通过智能手表快速启动翻译，与当地人无障碍交流，询问路线、点餐购物更加便捷。",
                devices: ["智能手表", "智能眼镜"]
            },
            education: {
                title: "在线教育",
                description: "学习外语课程时，智能音箱提供实时翻译和发音指导，智能眼镜显示字幕，让学习更加高效。",
                devices: ["智能音箱", "智能眼镜"]
            },
            medical: {
                title: "医疗咨询",
                description: "在国外就医时，通过智能设备实时翻译医患对话，确保病情描述准确，治疗方案理解无误。",
                devices: ["蓝牙耳机", "智能眼镜"]
            },
            customerService: {
                title: "客户服务",
                description: "客服人员佩戴智能设备，实时翻译客户需求，提供多语言服务支持，提升客户满意度。",
                devices: ["蓝牙耳机", "智能手表"]
            },
            family: {
                title: "家庭生活",
                description: "家庭成员使用不同语言时，智能音箱提供实时翻译，让跨语言家庭沟通更加和谐温馨。",
                devices: ["智能音箱", "蓝牙耳机"]
            }
        },
        
        // 产品优势
        advantages: {
            title: "为什么选择 Hyper MZT",
            subtitle: "专业的AI技术，贴心的用户体验，让您的沟通更加智能高效",
            freeTrial: {
                title: "免费试用",
                description: "无需付费即可体验所有核心功能，让您充分了解产品价值后再做决定。"
            },
            languages: {
                title: "100+语言畅聊全球",
                description: "支持全球100多种语言的实时翻译，让您与世界各地的朋友无障碍沟通。"
            },
            coverage: {
                title: "生活商务场景全覆盖",
                description: "无论是日常交流还是商务会议，Hyper MZT都能为您提供专业的翻译服务。"
            }
        },
        
        // FAQ
        faq: {
            title: "常见问题",
            subtitle: "关于 Hyper MZT 的常见问题解答",
            questions: [
                {
                    question: "Hyper MZT 支持哪些语言？",
                    answer: "Hyper MZT 支持全球100多种语言的实时翻译，包括中文、英文、日文、韩文、法文、德文、西班牙文、俄文等主流语言，以及许多小语种。我们持续更新语言库，确保覆盖更多地区用户的需求。"
                },
                {
                    question: "如何连接蓝牙耳机或智能眼镜？",
                    answer: "在应用设置中找到\"设备连接\"选项，选择您的蓝牙耳机或智能眼镜进行配对。支持MZT全系列设备，如智能眼镜、智能耳机、智能音箱、智能手表等，连接成功后即可享受实时翻译功能。"
                },
                {
                    question: "翻译的准确度如何？",
                    answer: "我们采用先进的AI翻译技术，结合深度学习和神经网络，翻译准确度达到95%以上。对于日常对话、商务交流等场景，翻译质量非常可靠。同时支持专业术语识别，在特定领域也能提供准确的翻译服务。"
                },
                {
                    question: "是否需要网络连接？",
                    answer: "是的，实时翻译功能需要网络连接。我们建议使用WiFi或4G/5G网络以获得最佳体验。部分基础功能支持离线使用，但完整功能需要联网。我们也在开发离线翻译包，未来将支持更多离线功能。"
                },
                {
                    question: "会议录音功能如何工作？",
                    answer: "点击录音按钮开始录制会议内容，系统会实时转写语音为文字，并自动生成摘要、大纲和思维导图。录音结束后，您可以查看完整的会议记录，编辑内容，或分享给团队成员。支持多种导出格式。"
                },
                {
                    question: "如何保护隐私和数据安全？",
                    answer: "我们高度重视用户隐私和数据安全。所有语音和文字数据都经过加密传输和存储，不会泄露给第三方。您可以随时删除录音和聊天记录，我们也提供自动清理功能。符合GDPR等国际隐私保护标准。"
                },
                {
                    question: "遇到问题如何获得帮助？",
                    answer: "您可以通过以下方式获得帮助：1) 应用内的\"帮助中心\"查看详细教程；2) 发送邮件至 service@hypermzt.com；3) 在应用内提交反馈；4) 查看我们的在线文档和视频教程。我们的客服团队会在24小时内回复您的问题。"
                }
            ]
        },
        
        // 下载区域
        download: {
            title: "立即下载，开启智能翻译",
            subtitle: "扫描二维码或点击下载按钮，立即体验Hyper MZT的强大功能",
            qrAlt: "下载二维码"
        },
        
        // 页脚
        footer: {
            description: "专业的AI智能硬件通信中枢，让智能设备更智能。",
            features: "功能特性",
            featuresList: ["AI助手", "同声传译", "视频聊天", "会议录音"],
            contact: "联系我们",
            contactDesc: "如有问题或建议，欢迎联系我们",
            email: "客服邮箱：",
            copyright: "© 2025 Hyper MZT. 保留所有权利。"
        },
        
        // 截图映射
        screenshots: {
            'screenshot-4a.png': 'screenshot-4a.png',
            'screenshot-4b.png': 'screenshot-4b.png',
            'screenshot-4c.png': 'screenshot-4c.png'
        }
    },
    
    en: {
        // Page title
        page: {
            title: "Hyper MZT - AI Smart Hardware Communication Hub | Simultaneous Interpretation · Audio/Video Calls · Meeting Recording · Multi-device Integration"
        },
        
        // Mobile menu
        mobile: {
            description: "Professional AI smart audio/video translation application"
        },
        
        // Navigation
        nav: {
            features: "Features",
            products: "Products",
            scenarios: "Use Cases", 
            advantages: "Advantages",
            faq: "FAQ",
            download: "Download"
        },
        
        // Product pages translation
        products: {
            coreProducts: "Core Products",
            businessSolutions: "Business Solutions",
            specializedSolutions: "Specialized Solutions",
            aiTranslation: "AI Translation",
            realTimeTranslation: "Real-Time Translation",
            voiceTranslator: "Instant Voice Translator",
            voiceTranslationSoftware: "Voice Translation Software",
            smartGlasses: "Smart Glasses Translator",
            meetingTranslation: "Meeting Translation",
            businessTranslation: "Business Translation Software",
            travelTranslator: "Travel Translator App",
            languageLearning: "AI Language Learning",
            education: "Education Translation Platform",
            healthcare: "Healthcare Translator",
            legal: "Legal Translation AI",
            customerService: "Customer Service Translation",
            tourism: "Tourism Translation Solution",
            professional: "Professional Version",
            aiCommunicationHub: "AI Communication Hub",
            iotTranslation: "IoT Translation Platform",
            wearableTranslator: "Wearable Device Translator", 
            crossCultural: "Cross-Cultural Communication",
            teamCollaboration: "International Team Collaboration",
            remoteWork: "Remote Work Translator",
            conferenceInterpretation: "Conference Simultaneous Interpretation",
            globalCustomerSupport: "Global Customer Support",
            airportTranslation: "Airport Translation Assistant",
            hotelCommunication: "Hotel Guest Communication",
            restaurantMenu: "Restaurant Translation Menu",
            emergencyTranslation: "Emergency Translation Service"
        },
        
        // Hero Section
        hero: {
            title: "We Make Smart Devices Smarter",
            description: "Hyper MZT is an AI communication hub for smart devices, offering simultaneous interpretation, audio/video calls, meeting recording, and multi-app integration. Enjoy efficient cross-language communication on devices like Bluetooth headphones and smart glasses.",
            downloadButton: "Download Now",
            tags: {
                smartTranslation: "Smart Translation",
                simultaneous: "Simultaneous", 
                callTranslation: "Call Translation",
                recordingSummary: "Recording Summary"
            }
        },
        
        // Features
        features: {
            title: "Powerful Features, Smart Experience",
            subtitle: "Comprehensive AI intelligent features for barrier-free communication and efficient work",
            aiAssistant: {
                title: "AI Assistant",
                description: "Intelligent AI assistant provides real-time translation, speech recognition, and smart dialogue functions for convenient and efficient communication."
            },
            meetingRecording: {
                title: "Meeting Recording",
                description: "High-quality meeting recording with real-time transcription and translation, ensuring you never miss important information."
            },
            simultaneous: {
                title: "Simultaneous Interpretation",
                description: "Real-time simultaneous interpretation technology supporting 100+ languages, making cross-language communication simple and natural."
            },
            videoChat: {
                title: "Video Chat",
                description: "HD video chat with real-time translation subtitles for barrier-free face-to-face communication."
            },
            bidirectional: {
                title: "Bidirectional Mode",
                description: "Smart bidirectional translation mode supporting voice and text conversion, meeting various scenario needs."
            },
            freeTrial: {
                title: "Free Trial",
                description: "Free trial with unlimited access to core features, allowing everyone to enjoy the convenience of AI translation."
            }
        },
        
        // Simultaneous Interpretation
        simultaneousSection: {
            title: "Simultaneous Interpretation",
            description: "Let language no longer be a barrier. Hyper MZT supports real-time voice translation in 100+ languages with automatic bilingual subtitles, adapting to multi-scenario calls and face-to-face communication. Even in noisy environments, it can stably recognize and efficiently present bilingual dialogue, helping you communicate easily across languages.",
            imageAlt: "Simultaneous interpretation feature screenshot",
            tags: {
                languages: "100+ Languages",
                realtime: "Real-time Translation",
                subtitles: "Bilingual Subtitles",
                noiseReduction: "Noise Reduction"
            }
        },
        
        // Video Translation
        videoTranslation: {
            title: "Audio/Video Translation",
            subtitle: "Translate while calling, display while translating",
            description: "Whether voice or video calls, Hyper MZT can perform real-time bidirectional translation with automatic subtitle display. No app installation required - web access available, click the link on desktop to join calls for flexible communication and quick connection.",
            imageAlt: "Audio/video translation feature screenshot",
            tags: {
                bidirectional: "Bidirectional Translation",
                autoSubtitles: "Auto Subtitles",
                webAccess: "Web Access",
                quickConnect: "Quick Connect"
            }
        },
        
        // AI Meeting Recording
        aiMeeting: {
            title: "AI Meeting Recording",
            subtitle: "One-click recording, automatic content structure generation",
            summary: "Summary: Capture key points, quick review",
            outline: "Outline: Organized sections, clear logic", 
            mindmap: "Mind Map: Clear structure, easy reporting",
            description: "Suitable for remote collaboration, brainstorming, team summaries and various other scenarios.",
            tags: {
                smartSummary: "Smart Summary",
                structure: "Structure Organization",
                mindmap: "Mind Map",
                multiScene: "Multi-scenario"
            }
        },
        
        // Bidirectional Mode
        bidirectionalMode: {
            title: "Bidirectional Mode",
            description: "Supports 'Smart Device + Phone' collaborative translation: one person wears headphones or glasses, another speaks to the phone. Both parties' conversation content will be translated into each other's language and played with low latency from their respective devices. Supports 100+ language mutual translation and multi-language switching, suitable for travel, teaching, business negotiations and other scenarios.",
            imageAlt: "Bidirectional mode feature screenshot",
            features: [
                "Smart device and phone collaborative work",
                "Low latency real-time translation playback",
                "100+ language mutual translation support",
                "Multi-language quick switching"
            ],
            tags: {
                deviceSync: "Device Sync",
                lowLatency: "Low Latency",
                multiLanguage: "Multi-language",
                richScenes: "Rich Scenarios"
            }
        },
        
        // Smart Hardware
        smartHardware: {
            title: "Making Smart Hardware Smarter",
            description: "Hyper MZT is designed for smart hardware devices. Through simple connection pairing, it can endow your Bluetooth headphones, smart glasses, smart watches and other devices with powerful AI capabilities, instantly upgrading ordinary devices to smart AI devices.",
            devices: ["Bluetooth Headphones", "Smart Glasses", "Smart Watches", "Smart Speakers", "Smart Bracelets"]
        },
        
        // Use Cases
        scenarios: {
            title: "Use Cases",
            subtitle: "Applicable to various life and work scenarios, maximizing the value of your smart devices",
            business: {
                title: "Business Meetings",
                description: "Wear smart glasses or headphones to attend international meetings, receive real-time translation subtitles and voice, easily understand foreign colleagues' speeches, and improve meeting efficiency.",
                devices: ["Smart Glasses", "Bluetooth Headphones"]
            },
            travel: {
                title: "International Travel",
                description: "When traveling abroad, quickly activate translation through smart watches for barrier-free communication with locals, making it easier to ask for directions, order food and shop.",
                devices: ["Smart Watches", "Smart Glasses"]
            },
            education: {
                title: "Online Education",
                description: "When learning foreign language courses, smart speakers provide real-time translation and pronunciation guidance, smart glasses display subtitles, making learning more efficient.",
                devices: ["Smart Speakers", "Smart Glasses"]
            },
            medical: {
                title: "Medical Consultation",
                description: "When seeking medical treatment abroad, use smart devices for real-time translation of doctor-patient dialogue, ensuring accurate condition description and correct understanding of treatment plans.",
                devices: ["Bluetooth Headphones", "Smart Glasses"]
            },
            customerService: {
                title: "Customer Service",
                description: "Customer service staff wear smart devices for real-time translation of customer needs, providing multi-language service support and improving customer satisfaction.",
                devices: ["Bluetooth Headphones", "Smart Watches"]
            },
            family: {
                title: "Family Life",
                description: "When family members use different languages, smart speakers provide real-time translation, making cross-language family communication more harmonious and warm.",
                devices: ["Smart Speakers", "Bluetooth Headphones"]
            }
        },
        
        // Advantages
        advantages: {
            title: "Why Choose Hyper MZT",
            subtitle: "Professional AI technology and thoughtful user experience for smarter and more efficient communication",
            freeTrial: {
                title: "Free Trial, Worry-Free Experience",
                description: "Experience all core features without payment, allowing you to fully understand the product value before making a decision."
            },
            languages: {
                title: "100+ Languages, Global Communication",
                description: "Supports real-time translation in over 100 languages worldwide, enabling barrier-free communication with friends around the world."
            },
            coverage: {
                title: "Full Coverage, Life & Business",
                description: "Whether daily communication or business meetings, Hyper MZT can provide professional translation services."
            }
        },
        
        // FAQ
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Common questions about Hyper MZT",
            questions: [
                {
                    question: "What languages does Hyper MZT support?",
                    answer: "Hyper MZT supports real-time translation in over 100 languages worldwide, including mainstream languages such as Chinese, English, Japanese, Korean, French, German, Spanish, Russian, and many minority languages. We continuously update our language library to ensure coverage for users in more regions."
                },
                {
                    question: "How to connect Bluetooth headphones or smart glasses?",
                    answer: "In the app settings, find the 'Device Connection' option and select your Bluetooth headphones or smart glasses for pairing. Supports MZT full series devices such as smart glasses, smart headphones, smart speakers, smart watches, etc. Once connected successfully, you can enjoy real-time translation features."
                },
                {
                    question: "How accurate is the translation?",
                    answer: "We use advanced AI translation technology combined with deep learning and neural networks, achieving over 95% translation accuracy. For daily conversations, business communication and other scenarios, the translation quality is very reliable. We also support professional terminology recognition, providing accurate translation services in specific fields."
                },
                {
                    question: "Is internet connection required?",
                    answer: "Yes, real-time translation features require internet connection. We recommend using WiFi or 4G/5G networks for the best experience. Some basic features support offline use, but full functionality requires internet connection. We are also developing offline translation packages for more offline features in the future."
                },
                {
                    question: "How does the meeting recording feature work?",
                    answer: "Click the record button to start recording meeting content. The system will transcribe speech to text in real-time and automatically generate summaries, outlines and mind maps. After recording ends, you can view complete meeting records, edit content, or share with team members. Supports multiple export formats."
                },
                {
                    question: "How to protect privacy and data security?",
                    answer: "We highly value user privacy and data security. All voice and text data is encrypted during transmission and storage, and will not be leaked to third parties. You can delete recordings and chat history at any time, and we also provide automatic cleanup features. Complies with international privacy protection standards such as GDPR."
                },
                {
                    question: "How to get help when encountering problems?",
                    answer: "You can get help through the following ways: 1) Check detailed tutorials in the 'Help Center' within the app; 2) Send email to service@hypermzt.com; 3) Submit feedback within the app; 4) Check our online documentation and video tutorials. Our customer service team will respond to your questions within 24 hours."
                }
            ]
        },
        
        // Download Section
        download: {
            title: "Download Now, Start Smart Translation",
            subtitle: "Scan QR code or click download button to immediately experience Hyper MZT's powerful features",
            qrAlt: "Download QR Code"
        },
        
        // Footer
        footer: {
            description: "Professional AI smart hardware communication hub, making smart devices smarter.",
            features: "Features",
            featuresList: ["AI Assistant", "Simultaneous Interpretation", "Video Chat", "Meeting Recording"],
            contact: "Contact Us",
            contactDesc: "Feel free to contact us",
            email: "Customer Service Email: ",
            copyright: "© 2025 Hyper MZT. All rights reserved."
        },
        
        // Screenshot mapping
        screenshots: {
            'screenshot-4a.png': 'screenshot-4a-en.png',
            'screenshot-4b.png': 'screenshot-4b-en.png',
            'screenshot-4c.png': 'screenshot-4c-en.png'
        }
    }
};