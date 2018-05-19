class Scrolling {
    constructor(rootElement, scrollAfter) {
        this.rootElement = rootElement;
        this.scrollAfter = scrollAfter;

        this.handleEvents();
    }

    handleEvents() {
        document.addEventListener('scroll', () => {
            const coords = document.body.getBoundingClientRect();
            if (coords.top < this.scrollAfter) {
                this.rootElement.classList.add('scrolling');
            } else {
                this.rootElement.classList.remove('scrolling');
            }
        })
    }
}

export {Scrolling};
