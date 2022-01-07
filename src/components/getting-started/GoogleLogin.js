import React from "react";
import fetch from "cross-fetch";
import GoogleLogin from "react-google-login";
import "@fontsource/roboto/500.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faUserPlus, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";
import FaceIcon from "@mui/icons-material/Face";
import Cookies from "universal-cookie";
import SigninDialog from "./SigninDialog";

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: null,
      showingDialog: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.getSettings();
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  getSettings = () => {
    fetch(this.props.apiAddress)
      .then(this.handleErrors)
      .then((response) => response.json())
      .then((settings) => {
        this.setState({ settings: settings });
      })
      .catch(console.log);
  };

  closeDialog = () => {
    this.setState({ showingDialog: false });
  };

  openDialog = () => {
    this.setState({ showingDialog: true });
  };

  onGoodGoogleResponse = (authData) => {
    let cookies = new Cookies();

    fetch(this.state.settings.token_url, {
      method: "POST",
      credentials: "include",
      body: new URLSearchParams({
        code: authData.code,
        redirect_uri: window.location.origin,
      }),
    })
      .then(this.handleErrors)
      .then((response) => response.json())
      .then((data) => {
        cookies.set("csfr_token", data.csrf_token, {
          path: "/",
          secure: true,
          httpOnly: false,
          sameSite: "strict",
        });
        fetch("http://127.0.0.1:8000/v1/users/me/profile", {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: "CSFR " + cookies.get("csfr_token"),
          },
        });
      })
      .catch(console.log);
  };

  onBadGoogleResponse = (data) => {
    console.log(data.error);
  };

  handleOpen = (onClick) => {
    return () => {
      this.closeDialog();
      onClick();
    };
  };

  renderButton = (renderProps) => {
    return (
      <div>
        <LoadingButton
          color="primary"
          variant="contained"
          disableElevation
          onClick={this.openDialog}
          loading={renderProps.disabled || this.state.loading}
          loadingPosition="end"
          endIcon={<FaceIcon />}
        >
          Register with Google account
        </LoadingButton>
        <SigninDialog
          open={this.state.showingDialog}
          handleDialogClose={this.closeDialog}
          handleAgree={this.handleOpen(renderProps.onClick)}
        />
      </div>
    );
  };

  googleLogin() {
    let settings = this.state.settings;

    return (
      <GoogleLogin
        buttonText="Login"
        responseType="code"
        render={this.renderButton}
        onSuccess={this.onGoodGoogleResponse}
        onFailure={this.onBadGoogleResponse}
        cookiePolicy={"single_host_origin"}
        clientId={settings.client_id}
        accessType={settings.access_type}
        prompt={settings.prompt}
        scope={settings.scope}
      />
    );
  }

  render() {
    return (
      <div>
        {this.state.settings ? this.googleLogin(this.state.settigs) : null}
      </div>
    );
  }
}
