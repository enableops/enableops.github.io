import React from "react";

import Cookies from "universal-cookie";
import "@fontsource/roboto/500.css";
import { LoadingButton } from "@mui/lab";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import GoogleLogin from "./GoogleLogin";
import UserInfo from "./UserInfo";


const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default class SigninStep extends React.Component {
  constructor(props) {
    super(props);

    this.cookies = new Cookies();
    this.settings = require("./config");

    this.state = {
      signStatus: "",
    };
  }

  updateSigninStatus = () => {
    this.setState({
      signStatus: this.cookies.get("csfr_token") ? "success" : "login",
    });
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

    return <Stack direction="row" spacing={2}><Div>Registration</Div>{currentState()}</Stack>;
  }
}
