var React = require('react');

class NavBar extends React.Component {
  render() {
    console.log("<NavBar> Added")
    let num = this.props.num
    return (
        <div className="col">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="#">Tunr'</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">

                <li className="nav-item">
                <a className="nav-link" href="/artists/">Artist</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/songs/">Songs</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/albums/">Albums</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/playlist/">Playlist</a>
                </li>


                </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>
        </div>

    );
  }
}

module.exports = NavBar;