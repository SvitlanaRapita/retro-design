class Blog {
    constructor(rootElement, items = [], itemsLimit = 3) {
        this.rootElement = rootElement;
        this.items = items;
        this.renderedItems = [];
        this.itemsLimit = itemsLimit;

        this.renderGlobal();
        this.renderItems();
        this.renderButton();
        this.handleEvents();
    }

    renderGlobal() {
        this.blogUl = document.createElement('ul');
        this.blogUl.classList.add('blog-list');
        this.blogUl.classList.add('grid');
        this.blogUl.classList.add('row-wrapper');

        this.rootElement.appendChild(this.blogUl);
    }

    renderItems() {
        this.items.some((item, index) => {
            let blogLi = document.createElement('li');
            blogLi.classList.add('blog-list_item');
            blogLi.classList.add('grid');

            let blogLiImg = document.createElement('div');
            blogLiImg.classList.add('blog-list_image');

            let blogImg = document.createElement('img');
            blogImg.setAttribute('src', item.image);

            blogLiImg.appendChild(blogImg);

            let blogLiCont = document.createElement('div');
            blogLiCont.classList.add('blog-list_content');

            let blogContTitle = document.createElement('div');
            blogContTitle.classList.add('blog-list_content__title');
            blogContTitle.textContent = item.title;

            let blogContSubtitle = document.createElement('div');
            blogContSubtitle.classList.add('blog-list_content__subtitle');
            blogContSubtitle.classList.add('grid');

            let blogContData = document.createElement('span');
            blogContData.textContent = item.data;

            let blogContResponse = document.createElement('span');
            blogContResponse.textContent = item.response;

            blogContSubtitle.appendChild(blogContData);
            blogContSubtitle.appendChild(blogContResponse);

            let hr = document.createElement('hr');

            let blogContText = document.createElement('div');
            blogContText.classList.add('blog-list_content__text');
            blogContText.innerHTML = item.text;

            blogLiCont.appendChild(blogContTitle);
            blogLiCont.appendChild(blogContSubtitle);
            blogLiCont.appendChild(hr);
            blogLiCont.appendChild(blogContText);

            blogLi.appendChild(blogLiImg);
            blogLi.appendChild(blogLiCont);

            this.blogUl.appendChild(blogLi);

            this.renderedItems.push(item);
            delete this.items[index];

            return (this.renderedItems.length % this.itemsLimit) === 0;
        })
    }

    renderButton() {
        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add('more-posts');

        let buttonHr = document.createElement('hr');

        this.buttonText = document.createElement('button');
        this.buttonText.textContent = 'Show all posts';

        buttonContainer.appendChild(buttonHr);
        buttonContainer.appendChild(this.buttonText);

        this.rootElement.appendChild(buttonContainer);
    }

    handleEvents() {
        this.buttonText.addEventListener('click', () => {
            this.renderItems();
        })
    }
}


export {Blog};