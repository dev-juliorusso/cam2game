const pop = document.querySelector('.pop');
const bg = document.querySelector('.bg');
const press = document.querySelector('.press');

const jump = () => {
    pop.classList.add('jump');

    setTimeout(() => {

        pop.classList.remove('jump');

    }, 800);
}

const loop = setInterval(() => {

    const bgPosition = bg.offsetLeft;
    const popPosition = +window.getComputedStyle(pop).bottom.replace('px','');

    console.log(bgPosition);
    
    if(bgPosition < -580 && popPosition < 135 && bgPosition > -705) {

        bg.style.animation = 'none'
        bg.style.left = `${bgPosition}px`

        pop.style.animation = 'none'
        pop.style.bottom = `${popPosition}px`

        pop.src = './IMAGE/Dead.png'
        press.src = './IMAGE/pressF530.gif'


        
    }
    
    if(bgPosition < -1200 && popPosition < 135 && bgPosition > -1330) {

        bg.style.animation = 'none'
        bg.style.left = `${bgPosition}px`

        pop.style.animation = 'none'
        pop.style.bottom = `${popPosition}px`

        pop.src = './IMAGE/Dead.png'
        press.src = './IMAGE/pressF530.gif'

    }
    
    if(bgPosition < -1730 && popPosition < 135 && bgPosition > -1860) {

        bg.style.animation = 'none'
        bg.style.left = `${bgPosition}px`

        pop.style.animation = 'none'
        pop.style.bottom = `${popPosition}px`

        pop.src = './IMAGE/Dead.png'
        press.src = './IMAGE/pressF530.gif'

    }
    
    if(bgPosition < -2150 && popPosition < 135 && bgPosition > -2320) {

        bg.style.animation = 'none'
        bg.style.left = `${bgPosition}px`

        pop.style.animation = 'none'
        pop.style.bottom = `${popPosition}px`

        pop.src = './IMAGE/Dead.png'
        press.src = './IMAGE/pressF530.gif'

    }
    
    if(bgPosition < -2575 && popPosition < 135 && bgPosition > -2705) {

        bg.style.animation = 'none'
        bg.style.left = `${bgPosition}px`

        pop.style.animation = 'none'
        pop.style.bottom = `${popPosition}px`

        pop.src = './IMAGE/Dead.png'
        press.src = './IMAGE/pressF530.gif'

    }

},10);


document.addEventListener('keydown', jump);