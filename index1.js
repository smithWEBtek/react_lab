const meInReact =
  React.createElement('div', { className: 'me'},
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, 'Who is learning React'),
    	React.createElement('ul', {},
      [
        React.createElement('li', {}, 'JavaScript'),
        React.createElement('li', {}, 'React'),
        React.createElement('li', {}, 'Movies'),
        React.createElement('li', {}, 'Ice cream'),
      ]
    ));
 
// ReactDOM.render(meInReact, document.getElementsByClassName('me'));
ReactDOM.render(meInReact, document.getElementById('main'));