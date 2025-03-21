// ヘッダースクロールアニメーション
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

// スクロールアニメーション
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 監視対象の要素
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-up').forEach(el => {
    observer.observe(el);
});

// コンタクトフォームのアニメーション
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const contactObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactForm.classList.add('active');
                contactObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    contactObserver.observe(contactForm);
}

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // モバイルメニューを閉じる
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            }
        }
    });
});

// GSAPアニメーション
document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // サービスカードのアニメーション
        gsap.utils.toArray('.service-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.2
            });
        });
    }
});

// js/main.js での確認
// 要素がビューポートに入ったときのアニメーション
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // デバッグ用コンソール追加
            console.log('Element activated:', entry.target);
            // 必要に応じてobserverを解除
            //observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// すべての対象要素を確実に監視
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-up, .services, .service-card').forEach(el => {
        observer.observe(el);
        console.log('Observing element:', el);
    });
});
