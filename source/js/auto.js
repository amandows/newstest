
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

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
