var Generator = require('yeoman-generator')
var mkdirp = require('mkdirp')

const DEFAULT_SRC_PATH = "src/components/";

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
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should this component be saved? ["src/components"]',
        validate: str => {
          return true
        }
      }
    ]).then(answers => {

      console.log("yoooo sup");
      if(answers.path.trim() == "") {
        answers.path = DEFAULT_SRC_PATH;
      } else if(answers.path.substring(-1) != "/") {
        answers.path += "/"
      }

      console.log(answers);

      this.answers = {
        name: answers.name,
        path: answers.path
      }
    })
  }

  writing() {
    const { name, path } = this.answers
    const componentName = name.charAt(0).toUpperCase() + name.slice(1)
    // create folder project
    mkdirp(`${path}${componentName}`)
    // copy component into the components folder
    this.fs.copyTpl(
      this.templatePath('_component.tsx'),
      this.destinationPath(
        `${path}${componentName}/${componentName}.tsx`
      ),
      {
        component: componentName
      }
    )
    // copy component types into the components folder
    this.fs.copyTpl(
      this.templatePath('_types.ts'),
      this.destinationPath(
        `${path}${componentName}/types.ts`
      ),
      {
        component: componentName
      }
    )
    // copy index.js
    this.fs.copyTpl(
      this.templatePath('_index.tsx'),
      this.destinationPath(
        `${path}${componentName}/index.tsx`
      ),
      {
        component: componentName
      }
    )
    // copy styles.scss
    // OD - skipping for now
    /*this.fs.copyTpl(
      this.templatePath('_styles.ts'),
      this.destinationPath(
        `${path}${componentName}/styles.ts`
      )
    )*/
    
    // copy unit test.js
    this.fs.copyTpl(
      this.templatePath('_test.tsx'),
      this.destinationPath(
        `${path}${componentName}/${componentName}.test.tsx`
      ),
      {
        component: componentName
      }
    )
  }
}
