var React = require('react');

var Head = require('./components/head');
var NavBar = require('./components/navbar');
var NavSide = require('./components/navside');

var Main = require('./components/main');
var Footer = require('./components/footer');




class Home extends React.Component {
  render() {
    console.log("\nStarto")
    var reqType = this.props.requestType;
    console.log(reqType)



    return (
      <html>
      <Head/>
      <body className="bg-dark">
        <div className="container-fluid ">
          <div className="row justify-content-center my-md-2">
            <NavBar/>
          </div>
          <div className="row justify-content-center my-md-4">
            <Main className="h-100 d-inline-block" data = {this.props}/>
          </div>
          <div className="row">
            <Footer/>
          </div>
        </div>
      </body>
      </html>
      );
  }
}



module.exports = Home;