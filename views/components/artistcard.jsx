var React = require('react');



class ArtistCard extends React.Component {
  render() {

    console.log("\nCard component Added")

    const id = this.props.data.id
    const name = this.props.data.name
    const imgUrl = this.props.data.photo_url

    const individUrl ="/artist/"+id





    return (
        <div className="col-md-4">
            <div className="card text-center bg-light mb-3 ">
                <a href={individUrl}>
                <img className="card-img-top" src={imgUrl} alt={name}/>
                </a>
                <div class="card-footer">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
     );
}
}

module.exports = ArtistCard;