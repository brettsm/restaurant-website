import ItalyBg from './italy-bg.jpg';

const buildHomePage = function () {
    const contentDiv = document.getElementById('body');
    
    const myBg = new Image();
    myBg.src = ItalyBg;

    contentDiv.style.backgroundImage = myBg;

};

export { buildHomePage };