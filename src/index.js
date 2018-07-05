import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';

const authors = [
    {
        name: "Mark Twain",
        imageUrl: "images/authors/marktwain.jpg",
        imageSource: "Wikimedia Commons",
        books: ['The Adventures of Huckleberry Finn',
                'Life on the Mississippi',
                'Roughing It'
                ]
    }
];

const state = {
    turnData: {
        author: authors[0],
        books: authors[0].books
    }
};

// Spread Operator Syntax - to extend the state object out into its properties
ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));
registerServiceWorker();
