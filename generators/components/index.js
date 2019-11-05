var Generator = require('yeoman-generator')
var mkdirp = require('mkdirp')

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
        validate: str => {
          if (str.trim().length > 0) {
            return true
          }
          return 'Please add a name for your new page'
        }
      }
    ]).then(answers => {
      this.answers = {
        name: answers.name
      }
    })
  }

  writing() {
    const { name } = this.answers
    const componentName = name.charAt(0).toUpperCase() + name.slice(1)
    // create folder project
    mkdirp(`src/App/SharedComponents/${componentName}`)
    // copy component into the components folder
    this.fs.copyTpl(
      this.templatePath('_component.tsx'),
      this.destinationPath(
        `src/App/SharedComponents/${componentName}/${componentName}.tsx`
      ),
      {
        component: componentName
      }
    )
    // copy component types into the components folder
    this.fs.copyTpl(
      this.templatePath('_types.ts'),
      this.destinationPath(
        `src/App/SharedComponents/${componentName}/types.ts`
      ),
      {
        component: componentName
      }
    )
    // copy index.js
    this.fs.copyTpl(
      this.templatePath('_index.tsx'),
      this.destinationPath(
        `src/App/SharedComponents/${componentName}/index.tsx`
      ),
      {
        component: componentName
      }
    )
    // copy styles.scss
    this.fs.copyTpl(
      this.templatePath('_styles.ts'),
      this.destinationPath(
        `src/App/SharedComponents/${componentName}/styles.ts`
      )
    )
    // copy unit test.js
    this.fs.copyTpl(
      this.templatePath('_test.tsx'),
      this.destinationPath(
        `src/App/SharedComponents/${componentName}/${componentName}.test.tsx`
      ),
      {
        component: componentName
      }
    )
  }
}
