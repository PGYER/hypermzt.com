// 语言检测和切换功能
let currentLanguage = 'zh'; // 默认中文

// 检测浏览器语言
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.toLowerCase().split('-')[0];
    
    // 如果浏览器语言是英文，设置为英文
    if (langCode === 'en') {
        currentLanguage = 'en';
        return 'en';
    }
    
    // 默认返回中文
    return 'zh';
}

// 更新页面内容
function updatePageContent(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // 更新页面标题
    if (t.page && t.page.title) {
        document.title = t.page.title;
    }
    
    // 更新带有data-translate属性的元素
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const keys = key.split('.');
        let value = t;
        
        for (const k of keys) {
            value = value[k];
            if (!value) break;
        }
        
        if (value) {
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = value;
            } else {
                element.innerHTML = value;
            }
        }
    });
    
    // 更新图片alt属性
    document.querySelectorAll('[data-translate-alt]').forEach(element => {
        const key = element.getAttribute('data-translate-alt');
        const keys = key.split('.');
        let value = t;
        
        for (const k of keys) {
            value = value[k];
            if (!value) break;
        }
        
        if (value) {
            element.alt = value;
        }
    });
}

// 初始化语言
function initLanguage() {
    const detectedLang = detectBrowserLanguage();
    currentLanguage = detectedLang;
    updatePageContent(detectedLang);
    
    // 初始化语言切换按钮
    initLanguageToggle();
}

// 初始化语言切换按钮（使用HTML中已存在的按钮）
function initLanguageToggle() {
    // 更新桌面端语言切换按钮文本
    const desktopToggle = document.querySelector('#language-toggle');
    if (desktopToggle) {
        const currentLangSpan = desktopToggle.querySelector('#current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = currentLanguage === 'zh' ? 'EN' : '中文';
        }
    }
    
    // 更新移动端语言切换按钮文本
    const mobileToggle = document.querySelector('#mobile-current-lang');
    if (mobileToggle) {
        mobileToggle.textContent = currentLanguage === 'zh' ? 'English' : '中文';
    }
    
    // 语言切换事件
    document.addEventListener('click', function(e) {
        if (e.target.closest('#language-toggle') || e.target.closest('#mobile-language-toggle')) {
            const newLang = currentLanguage === 'zh' ? 'en' : 'zh';
            currentLanguage = newLang;
            updatePageContent(newLang);
            
            // 更新桌面端按钮文本
            const currentLangSpan = document.querySelector('#current-lang');
            if (currentLangSpan) {
                currentLangSpan.textContent = newLang === 'zh' ? 'EN' : '中文';
            }
            
            // 更新移动端按钮文本
            const mobileCurrentLang = document.querySelector('#mobile-current-lang');
            if (mobileCurrentLang) {
                mobileCurrentLang.textContent = newLang === 'zh' ? 'English' : '中文';
            }
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 截图轮换功能
function initScreenshotCarousel() {
    const carousels = document.querySelectorAll('.screenshot-carousel');
    
    carousels.forEach((carousel, carouselIndex) => {
        const slides = carousel.querySelectorAll('.screenshot-slide');
        let currentSlide = 0;
        const totalSlides = slides.length;

        // 如果没有找到图片，直接返回
        if (totalSlides === 0) {
            return;
        }

        // 预加载所有图片并处理加载错误
        let loadedImages = 0;
        slides.forEach((slide, index) => {
            const img = new Image();
            img.onload = function() {
                loadedImages++;
                // 如果所有图片都加载完成，确保第一张图片可见
                if (loadedImages === totalSlides && index === 0) {
                    slide.classList.add('active');
                    slide.classList.remove('inactive');
                }
            };
            img.onerror = function() {
                console.warn('图片加载失败:', slide.src);
                loadedImages++;
            };
            img.src = slide.src;
        });

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                    slide.classList.remove('inactive');
                } else {
                    slide.classList.add('inactive');
                    slide.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            // 使用更安全的切换方式
            const nextIndex = (currentSlide + 1) % totalSlides;
            
            // 同时处理当前图片和下一张图片的显示状态
            slides.forEach((slide, i) => {
                if (i === nextIndex) {
                    slide.classList.add('active');
                    slide.classList.remove('inactive');
                } else {
                    slide.classList.add('inactive');
                    slide.classList.remove('active');
                }
            });
            
            currentSlide = nextIndex;
        }

        // 确保至少有一张图片可见
        if (totalSlides > 0) {
            showSlide(0);
        }
        
        // 为每个轮播图设置独立的定时器，避免相互干扰
        setInterval(nextSlide, 3000);
    });
}

// 页面加载完成后初始化轮换功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化语言功能
    initLanguage();
    
    initScreenshotCarousel();
    
    // FAQ 交互功能
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');
            const icon = this.querySelector('.faq-icon');
            
            // 切换答案显示状态
            if (answer.classList.contains('hidden')) {
                // 展开答案
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
                faqItem.classList.add('active');
            } else {
                // 收起答案
                answer.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
                faqItem.classList.remove('active');
            }
        });
    });
    
    // 移动端菜单控制
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    
    // 打开菜单
    function openMobileMenu() {
        mobileMenu.classList.add('open');
        mobileMenuOverlay.classList.add('open');
        mobileMenuButton.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    
    // 关闭菜单
    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        mobileMenuOverlay.classList.remove('open');
        mobileMenuButton.classList.remove('open');
        document.body.style.overflow = '';
    }
    
    // 事件监听器
    mobileMenuButton.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    
    // 点击菜单项时关闭菜单
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', closeMobileMenu);
    });
    
    // ESC键关闭菜单
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            closeMobileMenu();
        }
    });
    
    // 窗口大小改变时，如果切换到桌面端则关闭移动端菜单
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && mobileMenu.classList.contains('open')) {
            closeMobileMenu();
        }
    });
});