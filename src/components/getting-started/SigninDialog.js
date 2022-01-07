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
          <DialogTitle>Access is only needed for enableOps init</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let us help you setup environment by giving us an access to list
              of your projects.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleDialogClose}>Disagree</Button>
            <Button onClick={this.props.handleAgree}>Agree</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
