
let openMenu = document.querySelector('.open')
let closeMenu = document.querySelector('.close')
let menuIco = document.querySelector('.filter-ico')
let burger = document.querySelector('.filter-burger')


let rebootButton = document.querySelector('.reboot');

let num = 0
const ctgList = document.querySelector('.categories-list')
const footerBtn = document.querySelector('.footer-btn')
let btnActive = document.querySelector('.btn-active')
footerBtn.addEventListener('click', () => {
    num++
    if (num % 2 !== 0) {
        ctgList.style.cssText = "bottom: 50px"
        btnActive.style.cssText = "transform: rotate(90deg) translateY(40%);"
    } else if (num % 2 == 0) {
        ctgList.style.cssText = "bottom: -100%"
        btnActive.style.cssText = "transform: rotate(-90deg) translateY(-40%);"
    }
})


let voiceNum = 0
function getButtonParent() {
    const button = event.target;
    const parent = button.parentNode;
    const textElement = parent.firstElementChild;
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance();
    var text = textElement.textContent.trim();
    utterance.text = text;
    utterance.lang = "ru";
    var voices = synth.getVoices();
    utterance.voice = voices.find(function (voice) { return voice.name === voice.name === voice.name === "Apple Tatyana"; });
    utterance.rate = 1.0;
    voiceNum++
    if (voiceNum % 2 !== 0) {
        synth.speak(utterance);
    } else if (voiceNum % 2 == 0) {
        window.speechSynthesis.cancel();
    }
}

function scrollY() {
    const lazyImages = document.querySelectorAll('img[data-src]')
    const windowHeight = document.documentElement.clientHeight;

    let lazyImagesPositions = []
    if (lazyImages.length > 0) {
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                lazyImagesPositions.push(img.getBoundingClientRect().top + window.pageYOffset)
                lazyScrollCheck()
            }
        })
    }
    window.addEventListener('scroll', lazyScroll)

    function lazyScroll() {
        if (document.querySelectorAll('img[data-src]').length > 0) {
            lazyScrollCheck()
        }
    }

    function lazyScrollCheck() {
        let imgIndex = lazyImagesPositions.findIndex(
            item => window.pageYOffset > item - windowHeight
        )
        if (imgIndex >= 0) {
            if (lazyImages[imgIndex].dataset.src) {
                lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
                lazyImages[imgIndex].removeAttribute('data-src');
            }
            delete lazyImagesPositions[imgIndex];
        }
    }
}

setTimeout(scrollY, 300);

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
