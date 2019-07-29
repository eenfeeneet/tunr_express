var React = require("react");

class Home extends React.Component {
  render() {
    console.log("yeeee")
    console.log(this.props.artist)
    return (
      <html>
        <head />
        <body>
          <h1>Welcome!</h1>
          <div>{this.props.artist}</div>
        </body>
      </html>
    );
  }
}

module.exports = Home;