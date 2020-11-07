const texts = ["Live", "Laugh", "Love"];
let count = 0;
let index = 0;
let letter = 0;
let currentText = 0;

(function type(){
    if(index === texts.length){
        index = 0;
    }
    currentText = texts[index];
    letter = currentText.slice(0,++count);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        index++;
        count = 0;
    }
    setTimeout(type,600);
}())

