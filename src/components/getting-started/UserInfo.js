import React from "react";

import "@fontsource/roboto/500.css";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  logout = () => {
    const logoutUrl =
      this.props.settings.baseUrl + this.props.settings.logoutUrl;

    fetch(logoutUrl, { credentials: "include" })
      .then(this.handleErrors)
      .then(() => {
        this.props.cookiesController.remove("csfr_token", { path: "/" });
        this.props.updateStatus();
      })
      .catch(console.log);
  };

  render() {
    return (
      <Button onClick={this.logout} variant="outlined">
        Log out
      </Button>
    );
  }
}
