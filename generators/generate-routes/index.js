var Generator = require('yeoman-generator')
var mkdirp = require('mkdirp')

module.exports = class extends Generator {
  writing() {
    mkdirp(`src/App/Routes`)
    // copy index.js
    this.fs.copyTpl(
      this.templatePath('_index.tsx'),
      this.destinationPath(`src/App/Routes/index.tsx`)
    )
    // copy component into the Routes folder
    this.fs.copyTpl(
      this.templatePath('_routes.tsx'),
      this.destinationPath(`src/App/Routes/Routes.tsx`)
    )
  }
}
