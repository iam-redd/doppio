const   slides = document.querySelectorAll('.slide');
       

let index = 0;

const prepareCurrentSlide = ind =>{
    activeSlide(index);
}

const activeSlide = n => {
    console.log(n)
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active')
}

const nextSlide = () => {
    if (index == slides.length -1){
        index = 0;
        prepareCurrentSlide(index);
    }
    else {
        index++;
        prepareCurrentSlide(index);
        
    }
}

const prevSlide = () => {
    if (index == 0){
        index = slides.length -1;
        prepareCurrentSlide(index);
    }
    else {
        index--;
        prepareCurrentSlide(index);
        
    }
}

setInterval(nextSlide, 5000)