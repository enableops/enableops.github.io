import React from "react";
import * as AsciinemaPlayer from 'asciinema-player';


export default class TerminalBanner extends React.Component {
  constructor(props) {
    super(props);
    this.player_id = "terminal_banner";
    this.cast = props.cast;
  }

  spawnAsciinemaPlayer = () => {
    AsciinemaPlayer.create(this.cast, document.getElementById(this.player_id));
  };

  componentDidMount() {
    this.spawnAsciinemaPlayer();
  }

  render() {
    return (
      <div id={this.player_id}></div>
    );
  }
}