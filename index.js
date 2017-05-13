const Button = React.createClass({
  render() {
    return React.createElement('button', {}, 'Click me!');
  }
});

ReactDOM.render(Button, document.getElementById('asdf'));