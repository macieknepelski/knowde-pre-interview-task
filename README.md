1. Clone the repository
2. Install Node to your OS (If not already installed. See: https://docs.cypress.io/guides/getting-started/installing-cypress#Node-js)
3. Inside the project folder, execute command `npm install`
4. Tests can be run either in headed or headless mode.
  4.1. Headed mode
  - Open Cypress using command `npx cypress open`
  - In the Cypress window, select `E2E testing`
  - Select target browser
  - Click `Start E2E testing in <browser_name>`
  - In the browser window, open one of existing specs. 
    In order to execute test cases [TC01], [TC02], [TC03], [TC04], select `Saucedemo.cy.ts`
    In order to execute test cases [TC05], select `Catfact.cy.ts`
  4.2 Headless mode
  - In order to run test specs in headless mode, execute command: `npm run test:headless`
  - Tests will be run in Electron browser (default)
  - In case of failure, artifacts are produced in `cypress/screenshots` and `cypress/videos` directories. 
  - Report from each test file execution will be saved in `cypress/results` directory