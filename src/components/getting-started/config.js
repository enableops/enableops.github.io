const cloudShellRepo = {
  ecommerce: "https://source.developers.google.com/p/enableops-io/r/init",
  pythonpostgres: "https://source.developers.google.com/p/enableops-io/r/init",
  blockchain: "https://source.developers.google.com/p/enableops-io/r/init",
};

const cloudShellTutorial = "enableops.md";
const cloudShellMotd = "enableops.motd";

const cloudShellUrl = (flavour) => {
  return (
    "https://ssh.cloud.google.com/cloudshell/editor?shellonly=true" +
    `&cloudshell_print=${encodeURI(cloudShellMotd)}` +
    `&cloudshell_git_repo=${encodeURI(cloudShellRepo[flavour])}` +
    `&cloudshell_tutorial=${encodeURI(cloudShellTutorial)}`
  );
};

module.exports = {
  settingsUrl: "/v1/auth/settings",
  profileUrl: "/v1/users/me/profile",
  projectsUrl: "/v1/users/me/project_ids",
  deploymentsUrl: "/v1/users/me/deployments/",
  cloudShellUrl: cloudShellUrl,
  cloudShellRepo: cloudShellRepo,
  cloudShellTutorial: cloudShellTutorial,
  cloudShellMotd: cloudShellMotd,
  logoutUrl: "/v1/auth/logout",
  baseUrl: "https://api.enableops.io",
};
