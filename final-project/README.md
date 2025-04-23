# FOP.help(new) Test Automation Project

This project contains end-to-end automated tests for the FOP.help(new) web application using Playwright. The tests cover various functionalities including login, navigation, income management.

## Project Overview

This test automation framework implements the Page Object Model (POM) design pattern and includes:

- Automated UI tests for core functionalities
- Test setup with authentication
- HTML and Allure reporting
- GitHub Actions integration for CI/CD

## Technology Stack

- [Playwright](https://playwright.dev/) - Modern web testing framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Allure Report](https://allurereport.org/) - Test reporting tool
- [GitHub Actions](https://github.com/features/actions) - CI/CD pipeline
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## Features Tested

- **Authentication**: Login functionality with valid and invalid credentials
- **Header Navigation**: Logo, home, profile and logout functionalities
- **Sidebar Navigation**: Menu navigation to different application sections
- **Income Management**: Adding and canceling income entries

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
### Running Tests

Run all tests:
```sh
npm run test
```

### Test Reports

After test execution, reports are generated in the following locations:

- **HTML Report**: 
  ```sh
  npx playwright show-report
  ```

- **Allure Report**:
  ```sh
  npx allure generate allure-results --clean
  npx allure open allure-report
  ```

## CI/CD Integration

The project is configured to run tests in GitHub