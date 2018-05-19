class Slider {
    constructor(rootElement, slideTimeInterval = 4000) {
        this.rootElement = rootElement;
        this.slideTimeInterval = slideTimeInterval;

        this.prevElement = this.rootElement.querySelector('.slider-controls_prev');
        this.nextElement = this.rootElement.querySelector('.slider-controls_next');
        this.slideItems = this.rootElement.querySelectorAll('.slider-item');
        this.maxSlide = this.slideItems.length - 1;
        this.activeSlide = 0;

        this.createActiveSlide();
        this.handleEvents();
        this.start();
    }

    handleEvents() {
        this.prevElement.addEventListener('click', () => {
            this.prev();
        });

        this.nextElement.addEventListener('click', () => {
            this.next();
        });

        this.rootElement.addEventListener('mouseover', () => {
            this.stop();
        });

        this.rootElement.addEventListener('mouseleave', () => {
            this.start();
        });
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }

    start() {
        this.interval = setInterval(() => {
            this.next()
        }, this.slideTimeInterval);
    }

    createActiveSlide() {
        let slideElement = this.slideItems[this.activeSlide];
        slideElement.classList.add('active')
    }

    removeActiveSlide() {
        let slideElement = this.slideItems[this.activeSlide];
        slideElement.classList.remove('active');
    }

    prev() {
        this.removeActiveSlide();

        if (this.activeSlide === 0) {
            this.activeSlide = this.maxSlide;
        } else {
            this.activeSlide--;
        }

        this.createActiveSlide();
    }

    next() {
        this.removeActiveSlide();

        if (this.activeSlide === this.maxSlide) {
            this.activeSlide = 0;
        } else {
            this.activeSlide++;
        }

        this.createActiveSlide();
    }
}

export {Slider};
