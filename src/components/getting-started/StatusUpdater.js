import Cookies from "universal-cookie";

export default class LoginState {
  constructor() {
    this.cookies = new Cookies();
    this.settings = require("./config");
    this.handlers = [];
  }

  addCallback = (callback) => {
    this.handlers.push(callback);
  };

  updateStatus = (newStatus) => {
    this.handlers.forEach((fn) => fn(newStatus));
  };
}
