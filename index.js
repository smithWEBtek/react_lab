
const Button = React.createClass({
  render() {
    return React.createElement('button', {}, 'Click me!');
  }
});

const ShoppingList = React.createClass({
  render() {
    return React.createElement('ul', {}, [
      React.createElement('li', {}, 'Bananas'),
      React.createElement('li', {}, 'Vanilla ice cream'),
      React.createElement('li', {}, 'Chocolate'),
    ]);
  }
});


ReactDOM.render(ShoppingList, document.getElementById('example'));