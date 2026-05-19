// HERO-TEXT ANIMATION
let textTag = document.querySelector('.section1 h1');
let text = textTag.textContent;

let splittedText = text.split('');

textTag.innerHTML = '';

for(let i = 0; i < splittedText.length; i++){
    if(splittedText[i] == " ") splittedText[i] = "&nbsp;";

    textTag.innerHTML += `<span>${splittedText[i]}</span>`
}

let spans = textTag.querySelectorAll('span');
let k = 0;
let animateLetter = setInterval(() => {
    let singleSpan = spans[k];

    singleSpan.className = 'fadeMove';
    k++;

    if(k === spans.length) clearInterval(animateLetter);
}, 70);


// PROGRESS-BAR ANIMATION
let border = document.querySelector('.border-line');
let borderWidth = 0;

window.onscroll = () => {

    if(this.oldScroll > this.scrollY){
        borderWidth -= 1.5;
    }else{
        borderWidth += 1.5;
    }

    if(borderWidth <= 0){
        borderWidth = 0;
    }
    
    if(borderWidth >= 100){
        borderWidth = 100;
    }
    
   
    border.style.width = borderWidth + '%';

    this.oldScroll = this.scrollY;
}