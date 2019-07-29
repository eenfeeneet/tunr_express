var React = require('react');

var CardDeck = require('./carddeck');
var SongList = require('./songlist');
var IndividCard = require('./individualcard')
var NewForm = require('./newform');

var Deleted = require('./delete');

class Main extends React.Component {
  render() {
    console.log("\n<Main> Added")

    const reqType = this.props.data.requestType
    let content;
    let colSize;
    console.log("request type: " + reqType)

    switch (reqType) {
        case 'artists':
            content = <CardDeck data = {this.props.data}/>;
            colSize = "col"
        break;
        case 'songs':
            content = <SongList data = {this.props.data.songs}/>;
            colSize = "col-10"
        break;
        case 'albums':
            content = <CardDeck data = {this.props.data}/>;
            colSize = "col"
        break;
        case 'artist':
            content = <IndividCard data = {this.props.data.artist}/>;
            colSize = "col-8"
        break;
        case 5:
            content = <Deleted data={this.props.data}/>;
            colSize = "col"
        break;
        default:
        text = "";
    }

    return (
        <div className={colSize} >
            {content}
        </div>
    );
  }
}

module.exports = Main;