import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import markdown from 'markdown';

window.markdown = markdown.markdown;
ReactDOM.render(<App />, document.getElementById('app'));
