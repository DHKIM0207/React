const React = require('react'); //npm 에 설치된 모듈을 불러온다.
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay />, document.querySelector('#root'));