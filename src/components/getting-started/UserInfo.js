import React from "react";

import "@fontsource/roboto/500.css";
import { Button, Avatar, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: null,
    };
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

  fetchUserInfo = () => {
    const profileUrl =
      this.props.settings.baseUrl + this.props.settings.profileUrl;

    fetch(profileUrl, {
      credentials: "include",
      headers: {
        Authorization: "CSFR " + this.props.cookiesController.get("csfr_token"),
      },
    })
      .then(this.handleErrors)
      .then((response) => response.json())
      .then((profileData) => {
        this.setState({ profile: profileData });
      })
      .catch((error) => {
        console.log(error);
        this.logout();
      });
  };

  componentDidMount() {
    this.fetchUserInfo();
  }

  render() {
    return (
      <Stack direction="row" spacing={2}>
        <Stack direction="row">
          {this.state.profile ? (
            <Avatar
              alt={this.state.profile.given_name ?? "User"}
              src={this.state.profile.picture ?? ""}
            />
          ) : null}
          {this.state.profile ? <Div>{this.state.profile.email}</Div> : null}
        </Stack>
        {this.state.profile ? (
          <Button onClick={this.logout} variant="outlined">
            Log out
          </Button>
        ) : (
          <LoadingButton loading variant="text">
            Loading
          </LoadingButton>
        )}
      </Stack>
    );
  }
}
