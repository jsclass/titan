System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.13",
    "lodash": "npm:lodash@3.3.0",
    "ngComponent": "github:maseh87/ngComponent@master",
    "ui-router": "npm:angular-ui-router@0.2.13",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "github:maseh87/ngComponent@master": {
      "angular": "github:angular/bower-angular@1.3.13"
    },
    "npm:angular-ui-router@0.2.13": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@3.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
