'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const upperCamelCase = require('uppercamelcase');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fine ' + chalk.red('generator-typescript-boilerplate') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }, {
      type: 'input',
      name: 'description',
      message: 'Your project description',
      default: ''
    }, {
      type: 'input',
      name: 'scope',
      message: 'Scope (leave blank for public scope)',
      default: ''
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const name = upperCamelCase(this.props.name);
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        scope: this.props.scope || false,
        description: this.props.description
      }
    );
    this.fs.copy(
      this.templatePath('_tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );
    this.fs.copy(
      this.templatePath('_npmignore'),
      this.destinationPath('.npmignore')
    );
    this.fs.copyTpl(
      this.templatePath('_thing.spec.ts'),
      this.destinationPath('src/' + name + '.spec.ts'), {
        name: name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_thing.ts'),
      this.destinationPath('src/' + name + '.ts'), {
        name: name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'), {
        name: this.props.name,
        scope: this.props.scope || false,
        description: this.props.description
      }
    );
    this.fs.copyTpl(
      this.templatePath('_index.ts'),
      this.destinationPath('src/index.ts'), {
        name: name
      }
    );
  }

  install() {
    this.installDependencies();
  }
};
