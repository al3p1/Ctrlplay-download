// Language translation object
const translations = {
    en: {
        title: "CTRLPLAY STEAM MANAGER",
        subtitle: "Securely manage all your Steam accounts in one place with our easy-to-use solution",
        download: "DOWNLOAD NOW",
        feature1_title: "Instant Switching",
        feature1_desc: "Change between accounts with a single click and get back to gaming faster",
        faq_title: "Frequently Asked Questions",
        faq1_question: "Why should I use CTRLPLAY Steam Manager?",
        faq1_answer: "If you've purchased from CTRLPLAY, you can easily add your Steam account and start playing without any setup issues. Our software integrates seamlessly with our store purchases.",
        faq2_question: "Is it safe to use?",
        faq2_answer: "Absolutely. We use industry-leading encryption and security protocols. Your credentials are stored locally on your device and never sent to our servers.",
        faq3_question: "How do I get support?",
        faq3_answer: "Contact us through our support email. We're currently developing additional contact methods to serve you better in the future.",
        about_title: "About CTRLPLAY",
        about_desc: "CTRLPLAY is a premier game store specializing in digital game distribution. We provide gamers with the latest titles and essential tools to enhance their gaming experience.",
        contact_email: "Coming soon",
        contact_phone: "Phone support coming soon",
        contact_store: "Online store coming soon",
        copyright: "© 2025 CTRLPLAY. All rights reserved. Steam is a registered trademark of Valve Corporation.",
        home: "HOME",
        faq_link: "FAQ",
        back: "BACK TO HOME"
    },
    ar: {
        title: "مدير حسابات ستيم من كنترول بلاي",
        subtitle: "أدر جميع حساباتك على ستيم في مكان واحد بشكل آمن وسهل مع حلولنا البسيطة",
        download: "تحميل الآن",
        feature1_title: "تبديل فوري",
        feature1_desc: "التغيير بين الحسابات بنقرة واحدة والعودة إلى اللعب بشكل أسرع",
        faq_title: "الأسئلة الشائعة",
        faq1_question: "لماذا يجب أن أستخدم مدير ستيم من كنترول بلاي؟",
        faq1_answer: "إذا كنت قد اشتريت من كنترول بلاي، يمكنك بسهولة إضافة حسابك على ستيم والبدء في اللعب بدون أي مشاكل في الإعداد. برنامجنا يتكامل بسلاسة مع مشتريات متجرنا.",
        faq2_question: "هل هو آمن للاستخدام؟",
        faq2_answer: "بالتأكيد. نستخدم بروتوكولات التشفير والأمان الرائدة في المجال. بيانات الاعتماد الخاصة بك مخزنة محليًا على جهازك ولا يتم إرسالها إلى خوادمنا.",
        faq3_question: "كيف أحصل على الدعم؟",
        faq3_answer: "اتصل بنا عبر البريد الإلكتروني للدعم. نحن نطور حاليًا طرق اتصال إضافية لخدمتك بشكل أفضل في المستقبل.",
        about_title: "عن كنترول بلاي",
        about_desc: "كنترول بلاي هو متجر ألعاب رائد متخصص في توزيع الألعاب الرقمية. نزود اللاعبين بأحدث العناوين والأدوات الأساسية لتعزيز تجربة اللعب الخاصة بهم.",
        contact_email: "قريباً",
        contact_phone: "دعم الهاتف قريبًا",
        contact_store: "المتجر الإلكتروني قريبًا",
        copyright: "© 2025 كنترول بلاي. جميع الحقوق محفوظة. ستيم علامة تجارية مسجلة لشركة فالف.",
        home: "الرئيسية",
        faq_link: "الأسئلة الشائعة",
        back: "العودة للرئيسية"
    }
};

// Page navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const translateElements = document.querySelectorAll('[data-translate]');
    const homeLink = document.getElementById('home-link');
    const faqLink = document.getElementById('faq-link');
    const backBtn = document.getElementById('back-btn');
    const mainContent = document.getElementById('main-content');
    const faqContent = document.getElementById('faq-content');
    
    // Set initial language
    setLanguage('en');
    
    // Language switcher
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Change language
            setLanguage(lang);
            
            // Update direction
            document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
            document.body.className = lang === 'ar' ? 'rtl' : '';
        });
    });
    
    // Page navigation
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        showMainPage();
    });
    
    faqLink.addEventListener('click', function(e) {
        e.preventDefault();
        showFaqPage();
    });
    
    backBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showMainPage();
    });
    
    function showMainPage() {
        // Animate fade out FAQ
        faqContent.style.opacity = '0';
        setTimeout(() => {
            faqContent.style.display = 'none';
            // Show and fade in main content
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 10);
        }, 300);
    }
    
    function showFaqPage() {
        // Animate fade out main content
        mainContent.style.opacity = '0';
        setTimeout(() => {
            mainContent.style.display = 'none';
            // Show and fade in FAQ
            faqContent.style.display = 'block';
            setTimeout(() => {
                faqContent.style.opacity = '1';
            }, 10);
        }, 300);
    }
    
    function setLanguage(lang) {
        translateElements.forEach(element => {
            const key = element.dataset.translate;
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }
    
    // Download button animation
    const downloadBtn = document.querySelector('.download-btn');
    
    downloadBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 0 35px rgba(0, 238, 255, 0.7)';
    });
    
    downloadBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 0 25px rgba(0, 238, 255, 0.5)';
    });
    
    downloadBtn.addEventListener('click', function() {
        const lang = document.querySelector('.lang-btn.active').dataset.lang;
        const downloadText = lang === 'ar' ? 'جارٍ التحميل...' : 'Downloading...';
        const completeText = lang === 'ar' ? 'اكتمل التحميل!' : 'Download Complete!';
        
        this.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${downloadText}`;
        setTimeout(() => {
            this.innerHTML = `<i class="fas fa-check"></i> ${completeText}`;
            this.style.background = 'linear-gradient(135deg, #00cc00, #00aa00)';
        }, 1500);
    });
});
