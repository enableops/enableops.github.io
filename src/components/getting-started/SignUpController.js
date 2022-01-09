import Cookies from "universal-cookie";

export default class SignUpController {
  constructor() {
    this.cookies = new Cookies();
    this.settings = require("./config");
    this.state = {
      loginState: null,
      selectedProjectId: "",
      configurationStatus: null,
    };

    this.handlers = [];
  }

  addCallback = (callback) => {
    this.handlers.push(callback);
  };

  broadcastNewState = (newState) => {
    this.handlers.forEach((fn) => fn(newState));
  };
}
