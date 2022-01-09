import React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";

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

  fetchProjects = () => {
    const projectsUrl = this.settings.baseUrl + this.settings.projectsUrl;
    fetch(projectsUrl, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: "CSFR " + this.cookies.get("csfr_token"),
      },
    })
      .then((response) => response.json())
      .then((receivedProjects) => this.setState({ projects: receivedProjects }))
      .catch(console.log);
  };

  updateSignInState = (newState) => {
    if (
      newState.loginState === "in" &&
      this.state.singInState.loginState != "in"
    ) {
      this.fetchProjects();
    }

    this.setState({ singInState: newState });
  };

  handleChange = (event) => {
    let newSingInState = { ...this.state.singInState };
    newSingInState.selectedProjectId = event.target.value;

    this.setState({ singInState: newSingInState }, () => {
      this.controller.broadcastNewState({ ...this.state.singInState });
    });
  };

  render() {
    return (
      <Box sx={{ minWidth: 120, maxWidth: 400 }}>
        <FormControl
          disabled={this.state.singInState.loginState != "in"}
          fullWidth
        >
          <InputLabel id="project-select-label">
            Select Cloud Project
          </InputLabel>
          <Select
            labelId="project-select-label"
            id="project-select"
            value={this.state.singInState.selectedProjectId}
            label="Select Cloud Project"
            onChange={this.handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            {this.state.projects.map((project) => (
              <MenuItem key={project.id} value={project.id}>
                {project.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {this.state.singInState.loginState === "in"
              ? " "
              : "Please sign in first"}
          </FormHelperText>
        </FormControl>
      </Box>
    );
  }
}
