# cautious-giggle

## Project Title: Tech Blog

<a href="https://choosealicense.com/licenses/mit" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" /></a>

## Table of Contents:

1. [Description](#description)
1. [Technologies](#technologies)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Video](#video)
1. [Contributing](#contributing)
1. [License](#license)
1. [Questions](#questions)

## Description

A CMS-style blog site that allows developers to publish and comment on blog posts. More specifically, this app follows the MVC (model, view, controller) paradigm for the architectural structure, Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. To view the final app deployed on Heroku, please click on the following [link](https://powerful-everglades-74449.herokuapp.com/).

## Technologies

1. [Node.js](https://www.npmjs.com/package/inquirer) Packages

   e. [bcrypt](https://www.npmjs.com/package/bcrypt)

   e. [connection-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)

   e. [dotenv](https://www.npmjs.com/package/dotenv)

   d. [express](https://www.npmjs.com/package/express)

   d. [express-handlebars](https://www.npmjs.com/package/express-handlebars)

   d. [express-session](https://www.npmjs.com/package/express-session)

   d. [morgan](https://www.npmjs.com/package/morgan)

   b. [mysql2](https://www.npmjs.com/package/mysql2)

   d. [nodemon](https://www.npmjs.com/package/nodemon)

   c. [sequelize](https://www.npmjs.com/package/sequelize)

2. CSS Framework

   a. [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

   b. [Ion Icons](https://ionic.io/ionicons)

3. Deployment

   a. [Heroku](https://devcenter.heroku.com/)

## Installation

- Before cloning the repository, please ensure you have node.js installed as this is a command line application. If you do not have node.js installed, start with steps 1 and 2. If you have node.js installed and confirmed, you can skip steps 1 and 2 and begin on step 3.

  1.  [Node.js Download Page](https://nodejs.org/en/download/)

  2.  After install, check with command line to ensure setup is correct.

      a. Open your terminal

      b. Type the below command. If you see a version it means you have installed node.js correctly.

      ```bash
      node -v
      ```

  3.  Clone repository and open in VS Code.

  4.  Open Terminal in VS Code

      a. Shortcut = CTRL + `

  5.  Install all the dependencies by typing the below command.

      ```bash
      npm install
      ```

  6.  Once you hit enter, the correct dependencies for allowing you to use this application will be automatically installed.

  7.  The final step is to update the .env.EXAMPLE file with your MySQL password and user info. Please ensure you also remove the ".EXAMPLE" from the file path.

  ## Usage

- Once you've completed the installation section guidelines, you'll need to first create the database in MySQL before running the application. Follow the below steps and use the image at the end of this section for guidance.

  1.  Open Terminal in VS Code

      a. Shortcut = CTRL + `

  2.  Navigate to the folder called 'db'.

  3.  Log into your MySQL and type the below command.

      ```bash
      source schema.sql
      ```

  4.  When you've received confirmation that the database has been created, exit MySQL so that you can run the application. Type the below command to exit MySQL.

      ```bash
      quit
      ```

  - If you would like to use the example tech blog database, I've placed a json file in the seeds folder and you can save the data to MySQL by running the below command. If not, go to step 5.

    ```bash
      npm run seeds
    ```

  5.  To run the application, you'll need to navigate back to the main folder where the file `server.js` is saved and type the below command.

      ```bash
      node server.js
      ```

### Steps To Create Database In MySQL

![alt text](./img/mysql-database-creation.png)

## Video

[Link To GIF ](https://github.com/mmehr1988/cautious-giggle/blob/main/gif/tech-blog.gif)

![alt text](./gif/tech-blog.gif)

## Contributing

Please open a Github issues request and I’ll review and respond as soon as I can. See below image for where to find the Issue page.

![alt text](./img/contribute-img.png)

## License

<a href="https://choosealicense.com/licenses/mit" target="_blank">MIT License</a>

## Questions

Github Portfolio Link: [Mehdi Mehrabani](https://github.com/mmehr1988)<br>
Email Contact: tatash.my@gmail.com
