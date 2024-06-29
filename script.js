//variable de botones Encriptar y Desencriptar.
let btnEncrypt = document.querySelector('#btn-encrypt');
let btnDecrypt = document.querySelector('#btn-decrypt');
let btnCopy = document.querySelector('#btn-copy');

//Etiquetas que recibe una cadena de caracteres y donde se alojara la cadena ingresada.
let textarea = document.querySelector('#textarea');
let otherText = document.querySelector('#other-text');

//Etiquetas que se eliminaran en la parte derecha de la página (img, p).
let textEncryption = document.querySelector('#encryption-text');
let imgWaiting = document.querySelector('#waiting-image');

let containerCopy = document.querySelector('#copy-container');
//variable que guardara el valor de textarea.
let textUser; 
let newText;
let wordsList = [];


function putScroll () {
    if (otherText.offsetHeight >= 346){
        otherText.style.overflowX = 'hidden';
        otherText.style.overflowY = 'scroll';
    }
}

function doScroll() {
    if (window.innerWidth <= 1023){
        containerCopy.scrollIntoView({ behavior: 'smooth' });
    }
}

function encryptTextUser(){
    wordsList = [];
    textUser = textarea.value;

    for (let word of textUser) {
        if(word == 'a'){
            wordsList.push('ai');
        }else if(word == 'e'){
            wordsList.push('enter');
        }else if(word == 'i'){
            wordsList.push('imes');
        }else if(word == 'o'){
            wordsList.push('ober');
        }else if(word == 'u'){
            wordsList.push('ufat');
        }else {
            wordsList.push(word);
        }
    }
    
    newText = wordsList.join('');
    deletAndChangeText(newText);
    doScroll();
}

function decryptTextUser(){
    wordsList = [];
    textUser = textarea.value;

    for (let i = 0; i < textUser.length; i++) {
        if(textUser[i] == 'a'){
            if (textUser[i] + textUser[i+1] == 'ai'){
                wordsList.push('a');
                i++
            } else {
                wordsList.push(textUser[i]);
            }
        }else if(textUser[i] == 'e'){
            if (textUser[i] + textUser[i+1] + textUser[i+2] + textUser[i+3] + textUser[i+4] == 'enter'){
                wordsList.push('e');
                i += 4;
            } else {
                wordsList.push(textUser[i]);
            }
        }else if(textUser[i] == 'i'){
            if (textUser[i] + textUser[i+1] + textUser[i+2] + textUser[i+3] == 'imes'){
                wordsList.push('i');
                i += 3;
            } else {
                wordsList.push(textUser[i]);
            }
        }else if(textUser[i] == 'o'){
            if (textUser[i] + textUser[i+1] + textUser[i+2] + textUser[i+3] == 'ober'){
                wordsList.push('o');
                i += 3;
            } else {
                wordsList.push(textUser[i]);
            }
        }else if(textUser[i] == 'u'){
            if (textUser[i] + textUser[i+1] + textUser[i+2] + textUser[i+3] == 'ufat'){
                wordsList.push('u');
                i += 3;
            } else {
                wordsList.push(textUser[i]);
            }
        }else {
            wordsList.push(textUser[i]);
        }
    }

    newText = wordsList.join('');
    deletAndChangeText(newText);
    doScroll();
}

function deletAndChangeText (text){
    textEncryption.style.display = 'none';
    imgWaiting.style.display = 'none';
    otherText.innerHTML = text;
    otherText.style.height = '80%';
    containerCopy.style.display = 'inline';

    putScroll();
}

btnEncrypt.addEventListener('click', encryptTextUser);
btnDecrypt.addEventListener('click', decryptTextUser);

btnCopy.addEventListener('click', function() {
    navigator.clipboard.writeText(newText);
});