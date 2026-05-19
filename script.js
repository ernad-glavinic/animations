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