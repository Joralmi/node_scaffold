# Node JS Scaffold

## How to run

* With docker (Uses Nginx proxy)
    * ./setup.sh -- to run development mode
    * ./setup.sh -p -- to run production (If tests fail the process stops)
    * docker-compose up -- to run as development in interactive mode

* Without docker
    * npm run start -- Normal mode
    * npm run dev -- Development mode (Listening to changes)

* Run development tools
    * npm run test -- for jest tests
    * npm run analyze -- for sonarqube analysis 

## Configuration

Use a .env file

* ENV_VAR=SOMETHING

Example:

    # Configuration
    NODE_ENV=development
    PORT=3000
    IP=0.0.0.0
    MAX_PAYLOAD=500kb
    # Sonar-scanner
    SONAR_URL=http://localhost:9000
    SONAR_TOKEN=3a374b5b274aef90fdb5c4b5950d8dbeeefa37af
    SONAR_PROJECT_NAME=<ADD_YOUR_PROJECT_NAME>
    SONAR_SOURCES=src
    SONAR_INCLUSIONS=**
    SONAR_TESTS=src/_test
    SONAR_TEST_FILE_PATH=./coverage/test-reporter.xml
    SONAR_COVERAGE_FILE_PATH=./coverage/lcov.info

Load into app using process.env.ENV_VAR and the npm package dotenv.

## Includes

* Testing
* Security features
* Reverse Proxy
* Docker configuration
* Built-in CI
* Utils (Logger, request, id gen ...)
* Sonarqube scanner