import React from "react";

import { Button } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";

export default class SelectStep extends React.Component {
  constructor(props) {
    super(props);

    this.controller = props.controller;
    this.cookies = this.controller.cookies;
    this.settings = this.controller.settings;
    this.controller.addCallback(this.updateSignInState);

    this.state = {
      singInState: {
        loginState: null,
        flavour: "ecommerce",
        selectedProjectId: "",
        configurationStatus: null,
      },
      projects: [],
    };
  }

  updateSignInState = (newState) => {
    this.setState({ singInState: newState });
  };

  render() {
    return (
      <Button
        target="_blank"
        color="success"
        variant={
          this.state.singInState.configurationStatus === 100
            ? "contained"
            : "outlined"
        }
        disableElevation
        disabled={this.state.singInState.configurationStatus != 100}
        endIcon={
          this.state.singInState.configurationStatus === 100 ? (
            <TerminalIcon />
          ) : null
        }
        href={this.settings.cloudShellUrl(this.state.singInState.flavour)}
      >
        {this.state.singInState.configurationStatus === 100
          ? "Start deployment"
          : "Waiting for configuration"}
      </Button>
    );
  }
}
