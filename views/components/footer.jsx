var React = require('react');

class Footer extends React.Component {
  render() {
    console.log("<Footer> component Added")
    return (
        <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="footer-copyright text-center py-3">© 2019 Copyright:
                </div>
            </nav>
        </div>
     );
}
}

module.exports = Footer;