var React = require('react');

class SongBar extends React.Component {
  render() {
    console.log("\SongBar component Added")
    // console.log(this.props.data)

    const title = this.props.data.title;
    const album = this.props.data.album;
    const songSrc = this.props.data.preview_link;
    const artUrl = this.props.data.artwork;

    return (
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start text-dark border border-info rounded my-1">
            <div className="d-flex justify-content-between bg-white ">
                <div>
                    <img src={artUrl} alt={album} className="img-thumbnail"/>
                </div>
                <div>
                    <h5 class="mb-1">{title}</h5>
                </div>
                <audio controls>
                    <source src={songSrc} type="audio/mpeg"/>
                </audio>
            </div>
        </a>
    );
}
}

module.exports = SongBar;