var React = require('react');

var ArtistCard = require('./artistcard');
var AlbumCard = require('./albumcard');

class CardDeck extends React.Component {
  render() {
    console.log("\nCardDeck component Added")
    console.log(this.props.data)
    const reqType = this.props.data.requestType

    let content ;

    switch (reqType) {
        case 'artists':
            let artistCards = this.props.data.artists.map(artist=>{
                return <ArtistCard data = {artist}/>
            })
            content = artistCards;
        break;
        case 'albums':
        let albumCards = this.props.data.albums.map(album=>{
            return  <AlbumCard data = {album}/>
        })
        content = albumCards;
        break;

        default:
        text = "";
    }


    return (
     <div className="card-group flex-wrap">
        {content}
     </div>
     );
}
}

module.exports = CardDeck;