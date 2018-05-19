import './index.scss';

import {Slider} from '../common/scripts/slider';
import {Blog} from "../common/scripts/blog";
import {Scrolling} from "../common/scripts/scroll";

new Slider(document.querySelector('#my-slider'));


new Scrolling(document.querySelector('#logo'), document.querySelector('#header').getBoundingClientRect().height);


new Blog(
    document.querySelector('#my-blog'),
    [
        {
            "image": "../assets/images/photo-07-big11-480x360.jpg",
            "title": "The Magic Wheel",
            "data": "July 28, 2014 // admin // Fun, Travel, Trends",
            "response": "1 Response",
            "text": "<p>It’s not it to understand them in the objects we’re playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there’s no other product useful.<a href=\"#\">(MORE…)</a></p>"
        },
        {
            "image": "../assets/images/photo-05-big11.jpg",
            "title": "The lonely road",
            "data": "July 28, 2014 // admin // Fun, Travel, Trends, Web Design",
            "response": "3 Response",
            "text": "<p>If you’ve studied design at all, you’ve probably encountered Lorem Ipsum placeholder text at some point. Anywhere there is text, but the meaning of that text isn’t particularly important, you might see Lorem Ipsum.<a href=\"#\">(MORE…)</a></p>"
        },
        {
            "image": "../assets/images/photo-04-big11.jpg",
            "title": "I love gasoline smell",
            "data": "July 28, 2014 // admin // Fun, Trends, Web Design",
            "response": "No Response",
            "text": "<p>It’s not it to understand them in the objects we’re playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there’s no other product useful.<a href=\"#\">(MORE…)</a></p>"
        },
        {
            "image": "../assets/images/photo-07-big11-480x360.jpg",
            "title": "The Magic Wheel",
            "data": "July 28, 2014 // admin // Fun, Travel, Trends",
            "response": "1 Response",
            "text": "<p>It’s not it to understand them in the objects we’re playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there’s no other product useful.<a href=\"#\">(MORE…)</a></p>"
        },
        {
            "image": "../assets/images/photo-04-big11.jpg",
            "title": "The lonely road",
            "data": "July 28, 2014 // admin // Fun, Travel, Trends, Web Design",
            "response": "3 Response",
            "text": "<p>If you’ve studied design at all, you’ve probably encountered Lorem Ipsum placeholder text at some point. Anywhere there is text, but the meaning of that text isn’t particularly important, you might see Lorem Ipsum.<a href=\"#\">(MORE…)</a></p>"
        },
        {
            "image": "../assets/images/photo-04-big11.jpg",
            "title": "I love gasoline smell",
            "data": "July 28, 2014 // admin // Fun, Trends, Web Design",
            "response": "No Response",
            "text": "<p>It’s not it to understand them in the objects we’re playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there’s no other product useful.<a href=\"#\">(MORE…)</a></p>"
        },
        {
            "image": "../assets/images/photo-04-big11.jpg",
            "title": "I love gasoline smell",
            "data": "July 28, 2014 // admin // Fun, Trends, Web Design",
            "response": "No Response",
            "text": "<p>It’s not it to understand them in the objects we’re playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there’s no other product useful.<a href=\"#\">(MORE…)</a></p>"
        }
    ],
    3
    );
