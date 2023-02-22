
let openMenu = document.querySelector('.open')
let closeMenu = document.querySelector('.close')
let menuIco = document.querySelector('.filter-ico')
let burger = document.querySelector('.filter-burger')
let num = 0;
menuIco.addEventListener('click', () => {
    num++
    console.log(num)
    if (num % 2 !== 0) {
        openMenu.style.cssText = "display: none;"
        closeMenu.style.cssText = "display: block;"
        burger.style.cssText = "top: 49px; left: 0;"
    }
    else if (num % 2 == 0) {
        closeMenu.style.cssText = "display: none;"
        openMenu.style.cssText = "display: block;"
        burger.style.cssText = "top: 49px; left: -100%;"
    }
})



let rebootButton = document.querySelector('.reboot');

rebootButton.addEventListener('click', function () {
    location.reload();
});


let sportCheck = document.querySelector('.chekbox-sport')
let policyCheck = document.querySelector('.chekbox-policy')
let foodCheck = document.querySelector('.chekbox-food')
let tehnologyCheck = document.querySelector('.chekbox-tehnology')
let scienceCheck = document.querySelector('.chekbox-science')
let fashionCheck = document.querySelector('.chekbox-fashion')
let itCheck = document.querySelector('.chekbox-it')
let allCheck = document.querySelector('.chekbox-all')
let applyFilter = document.querySelector('.apply-filter')


const newsUrl = 'https://raw.githubusercontent.com/amandows/Gitpush/05b3a814a3ab75db06ecdbe973b655063e2abe47/allNews2.json';
const newsContainer = document.querySelector('.news-container');

function showNews(news) {
  const newsHtml = news.map(item => `
    <div class="news">
        <div class="news-img">
            <img data-src="${item.image}" src="source/images/10px.png" alt="">
        </div>
        <div class="news-title">
            <h3>${item.title}</h3>
        </div>
        <div class="news-description">
            <p>${item.description}</p>
            <button onclick="getButtonParent()" class="play-text"></button>
        </div>
        <div class="news-original-link">
            <a href="${item.link}">original link</a>
        </div>
    </div>
  `).join('');
  newsContainer.innerHTML = newsHtml;
}

fetch(newsUrl)
  .then(response => response.json())
  .then(data => showNews(data));





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

