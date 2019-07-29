var React = require('react');



class AlbumCard extends React.Component {
  render() {

    console.log("\nCard component Added")


    const id = this.props.data.id;
    const name = this.props.data.name;
    const album = this.props.data.album;
    const imgUrl = this.props.data.artwork;
    const individUrl ="/artist/"+id;

    return (
        <div className="col-md-4">
            <div className="card text-center bg-light mb-3 ">
                <a href={individUrl}>
                <img className="card-img-top" src={imgUrl} alt={album}/>
                </a>
                <div class="card-footer">
                    <h5 className="card-title">{album}</h5>
                    <p class="card-text">{name}</p>
                </div>
            </div>
        </div>
     );
}
}

module.exports = AlbumCard;