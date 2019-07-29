var React = require('react');

var SongBar = require('./songbar');

class SongList extends React.Component {
  render() {
    console.log("\nSonglist component Added")
    console.log(this.props.data)
    const one = this.props.data;

    let songs = this.props.data.map(songs=>{
        return <SongBar data = {songs}/>
    })
    return (
        <div class="list-group align-items-center h-100">
            {songs}
        </div>
    );
}
}

module.exports = SongList;