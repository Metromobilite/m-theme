const fs = require('fs-extra');

fs.copySync('./theme', './dist/@metromobilite/m-theme');
fs.copyFileSync('LICENSE', './dist/@metromobilite/m-theme/LICENSE');
