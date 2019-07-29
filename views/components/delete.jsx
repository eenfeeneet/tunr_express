var React = require('react');



class Deleted extends React.Component {
  render() {
    console.log("\nDelete Msg incoming")

    return (

        <div className="jumbotron">
            <h1 className="display-3">Youve just DELETED that recipe!</h1>
            <p className="lead">Please add more </p>
            <hr className="my-4"/>
            <p></p>
            <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
     );
}
}

module.exports = Deleted;