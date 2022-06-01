const cloudShellRepo =
  "https://source.developers.google.com/p/enableops-io/r/github_enableops_init";
const cloudShellTutorial = "enableops.md";
const cloudShellMotd = "enableops.motd";

const cloudShellUrl = (flavour) => {
  return (
    "https://ssh.cloud.google.com/cloudshell/editor?shellonly=true" +
    `&cloudshell_print=${encodeURI(cloudShellMotd)}` +
    `&cloudshell_git_repo=${encodeURI(cloudShellRepo)}` +
    `&cloudshell_tutorial=${encodeURI(cloudShellTutorial)}`
  );
};

module.exports = {
  settingsUrl: "/v1/auth/settings",
  profileUrl: "/v1/user/profile",
  projectsUrl: "/v1/user/gcloud_projects",
  deploymentsUrl: "/v1/user/projects/",
  cloudShellUrl: cloudShellUrl,
  cloudShellRepo: cloudShellRepo,
  cloudShellTutorial: cloudShellTutorial,
  cloudShellMotd: cloudShellMotd,
  logoutUrl: "/v1/auth/logout",
};
