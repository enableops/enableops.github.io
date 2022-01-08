import React from "react";

import "@fontsource/roboto/500.css";
import { LoadingButton } from "@mui/lab";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default class SelectStep extends React.Component {
  constructor(props) {
    super(props);

    this.statusUpdater = props.statusUpdater;
    this.cookies = this.statusUpdater.cookies;
    this.settings = this.statusUpdater.settings;
    this.statusUpdater.addCallback(this.getNewStatus);

    this.state = {
      signStatus: null,
    };
  }

  getNewStatus = (newStatus) => {
    this.setState({ signStatus: newStatus });
  };

  render() {
    const currentState = () => {
      switch (this.state.signStatus) {
        case "success":
          return <h1>YYEEEAAAAAH</h1>;
        default:
          return (
            <LoadingButton loading variant="text">
              Loading
            </LoadingButton>
          );
      }
    };

    return currentState();
  }
}
