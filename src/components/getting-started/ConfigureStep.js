import React from "react";

import Stack from "@mui/material/Stack";
import { LoadingButton } from "@mui/lab";
import LinearProgress from "@mui/material/LinearProgress";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";

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
        selectedProjectId: "",
        configurationStatus: null,
      },
      projects: [],
    };
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  updateProgress = (progress) => {
    let newSingInState = { ...this.state.singInState };
    newSingInState.configurationStatus = progress;

    this.setState({ singInState: newSingInState }, () => {
      this.controller.broadcastNewState({ ...this.state.singInState });
    });
  };

  fetchConfigurationStatus = () => {
    const deploymentsUrl = this.settings.baseUrl + this.settings.deploymentsUrl;
    fetch(deploymentsUrl, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: "CSFR " + this.cookies.get("csfr_token"),
      },
    })
      .then((response) => response.json())
      .then((receivedDeployments) => {
        let deployment = receivedDeployments.find(
          (deployment) =>
            deployment.project_id === this.state.singInState.selectedProjectId
        );
        let progress = null;
        if (deployment) {
          let status = deployment.status;

          progress = 0;
          if (status === "CREATED") {
            progress = 5;
          } else if (status === "DISPATCHED") {
            progress = 15;
          } else if (status === "ADDED") {
            progress = 45;
          } else if (status === "CONFIGURED") {
            progress = 100;
          }
          console.log(progress);
        }

        if ([null, 0, 100].includes(progress)) {
          clearInterval(this.interval);
        }

        this.updateProgress(progress);
      })
      .catch(console.log);
  };

  watchNewProject = () => {
    this.updateProgress(null);
    this.fetchConfigurationStatus();
    this.interval = setInterval(this.fetchConfigurationStatus, 5000);
  };

  updateSignInState = (newState) => {
    let newProjectSelected =
      newState.selectedProjectId != this.state.singInState.selectedProjectId;

    this.setState({ singInState: newState }, () => {
      if (newProjectSelected) {
        this.watchNewProject();
      }
    });
  };

  handleChange = (event) => {
    let newSingInState = { ...this.state.singInState };
    newSingInState.selectedProjectId = event.target.value;

    this.setState({ singInState: newSingInState }, () => {
      this.controller.broadcastNewState({ ...this.state.singInState });
    });
  };

  dispatchConfiguration = () => {
    const deploymentsUrl = this.settings.baseUrl + this.settings.deploymentsUrl;
    const data = { project_id: this.state.singInState.selectedProjectId };
    fetch(deploymentsUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: "CSFR " + this.cookies.get("csfr_token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => this.watchNewProject())
      .catch(console.log);
  };

  render() {
    return (
      <Stack direction="column" alignItems="flex-start" spacing={2}>
        <LoadingButton
          loading={
            this.state.singInState.configurationStatus != null &&
            this.state.singInState.configurationStatus != 100
          }
          disabled={
            !this.state.singInState.selectedProjectId ||
            this.state.singInState.configurationStatus === 100
          }
          loadingPosition={
            this.state.singInState.selectedProjectId ? "end" : null
          }
          onClick={this.dispatchConfiguration}
          endIcon={
            this.state.singInState.selectedProjectId ? (
              this.state.singInState.configurationStatus === 100 ? (
                <CheckIcon />
              ) : (
                <OutdoorGrillIcon />
              )
            ) : null
          }
          variant={
            this.state.singInState.selectedProjectId
              ? this.state.singInState.configurationStatus === 100
                ? "outlined"
                : "contained"
              : "text"
          }
          disableElevation
        >
          {this.state.singInState.selectedProjectId
            ? "Prepare configuration"
            : "NO Project selected"}
        </LoadingButton>
        {this.state.singInState.configurationStatus != null ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="determinate"
              value={this.state.singInState.configurationStatus}
              color={
                this.state.singInState.configurationStatus === 100
                  ? "success"
                  : this.state.singInState.configurationStatus === 0
                  ? "error"
                  : "primary"
              }
            />
          </Box>
        ) : null}
      </Stack>
    );
  }
}
