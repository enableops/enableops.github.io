import React from "react";

import "@fontsource/roboto/500.css";
import { LoadingButton } from "@mui/lab";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import GoogleLogin from "./GoogleLogin";
import UserInfo from "./UserInfo";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default class LoginStep extends React.Component {
  constructor(props) {
    super(props);

    this.controller = props.controller;
    this.cookies = this.controller.cookies;
    this.settings = this.controller.settings;

    this.state = {
      signStatus: "",
    };
  }

  updateSigninStatus = () => {
    const signStatus = this.cookies.get("csfr_token") ? "in" : "out";

    this.setState({
      signStatus: signStatus,
    });

    let newState = { ...this.controller.state };
    newState.loginState = signStatus;

    this.controller.broadcastNewState(newState);
  };

  componentDidMount() {
    this.updateSigninStatus();
  }

  render() {
    const currentState = () => {
      switch (this.state.signStatus) {
        case "out":
          return (
            <GoogleLogin
              cookiesController={this.cookies}
              updateStatus={this.updateSigninStatus}
              settings={this.settings}
            />
          );
        case "in":
          return (
            <UserInfo
              cookiesController={this.cookies}
              updateStatus={this.updateSigninStatus}
              settings={this.settings}
            />
          );
        default:
          return (
            <LoadingButton loading variant="text">
              Loading
            </LoadingButton>
          );
      }
    };

    return (
      <Stack direction="row" spacing={2}>
        <Div>Sign in:</Div>
        {currentState()}
      </Stack>
    );
  }
}
