import React from "react";
import fetch from "cross-fetch";
import GoogleLogin from "react-google-login";
import { LoadingButton } from "@mui/lab";
import FaceIcon from "@mui/icons-material/Face";
import SigninDialog from "./SigninDialog";

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authSettings: null,
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
    const settingsUrl =
      this.props.settings.baseUrl + this.props.settings.settingsUrl;

    fetch(settingsUrl)
      .then(this.handleErrors)
      .then((response) => response.json())
      .then((settingsResponse) => {
        this.setState({ authSettings: settingsResponse });
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
    this.closeDialog();
    fetch(this.state.authSettings.token_url, {
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
        this.props.cookiesController.set("csfr_token", data.csrf_token, {
          path: "/",
          secure: true,
          httpOnly: false,
          sameSite: "strict",
        });
        this.props.updateStatus();
      })
      .catch(console.log);
  };

  onBadGoogleResponse = (data) => {
    this.closeDialog();
    console.log(data.error);
  };

  handleOpen = (onClick) => {
    return () => {
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
          Sign in with google
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
    let settings = this.state.authSettings;

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
        {this.state.authSettings ? this.googleLogin(this.state.settigs) : null}
      </div>
    );
  }
}
