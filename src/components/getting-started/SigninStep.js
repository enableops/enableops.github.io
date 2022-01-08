import React from "react";

import Cookies from "universal-cookie";
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

export default class SigninStep extends React.Component {
  constructor(props) {
    super(props);

    this.statusUpdater = props.statusUpdater;
    this.cookies = this.statusUpdater.cookies;
    this.settings = this.statusUpdater.settings;
    this.statusUpdater.addCallback(this.getNewStatus)

    this.state = {
      signStatus: "",
    };
  }

  getNewStatus = (status) => {
    
  }

  updateSigninStatus = () => {
    const signStatus = this.cookies.get("csfr_token") ? "success" : "login"

    this.setState({
      signStatus: signStatus,
    });
    this.statusUpdater.updateStatus(signStatus)
  };

  componentDidMount() {
    this.updateSigninStatus();
  }

  render() {
    const currentState = () => {
      switch (this.state.signStatus) {
        case "login":
          return (
            <GoogleLogin
              cookiesController={this.cookies}
              updateStatus={this.updateSigninStatus}
              settings={this.settings}
            />
          );
        case "success":
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
