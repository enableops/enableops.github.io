import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class SigninDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.handleDialogClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>Profile information and list of GCP Projects</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            We need this data only for the configuration and deployment process, we won't store any of your personal information on our servers. Feel free to <a href="https://myaccount.google.com/permissions" target="__blank">clear us out from permissions</a> after setup.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleDialogClose}>Cancel setup</Button>
            <Button onClick={this.props.handleAgree}>Proceed</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
