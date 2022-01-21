import React from "react";

import CodeBlock from "@theme/CodeBlock";

export default class CloudShellBlock extends React.Component {
  constructor(props) {
    super(props);

    this.controller = props.controller;
    this.cookies = this.controller.cookies;
    this.settings = this.controller.settings;
    this.controller.addCallback(this.updateSignInState);

    this.state = {
      singInState: {
        loginState: null,
        flavour: "ecommerce",
        selectedProjectId: "",
        configurationStatus: null,
      },
      projects: [],
    };
  }

  updateSignInState = (newState) => {
    this.setState({ singInState: newState });
  };

  render() {
    return (
      <CodeBlock className="language-shell">
        {`cloudshell_open \\
        --repo_url "${this.settings.cloudShellRepo}" \\
        --workspace "${this.state.singInState.flavour}" \\
        --print_file "${this.settings.cloudShellMotd}" \\
        --page "shell" \\
        --tutorial "${this.settings.cloudShellTutorial}" \\
        --force_new_clone`}
      </CodeBlock>
    );
  }
}
