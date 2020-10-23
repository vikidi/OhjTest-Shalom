# OhjTest-Shalom
[![Build Status](https://travis-ci.com/vikidi/OhjTest-Shalom.svg?branch=main)](https://travis-ci.com/vikidi/OhjTest-Shalom)
[![Coverage Status](https://coveralls.io/repos/github/vikidi/OhjTest-Shalom/badge.svg?branch=main)](https://coveralls.io/github/vikidi/OhjTest-Shalom?branch=main)

Testing repository for course Ohjelmistojen Testaus 2020.
## Get Started
Clone the repository
```
git clone https://github.com/vikidi/OhjTest-Shalom
cd OhjTest-Shalom
```
Next install dependencies
```
npm install
```
## Testing
Testable library is in src/ folder. Inside that is .internal/ folder, which is not included in tests or coverage reports. Also LICENSE file in src/ folder is excluded from tests.

To run test normally use
```
npm test
```
To run tests with coverage report use
```
npm run test:coverage
```
## Pipeline
This repository uses Travis CI pipeline. It runs test and generates test reports to https://travis-ci.com/github/vikidi/OhjTest-Shalom. It also uses Coveralls to generate coverage reports to https://coveralls.io/github/vikidi/OhjTest-Shalom.

Travis CI runs tests using command
```
npm run test:coveralls
```
Lastly Travis CI uploads the test and coverage reports to AWS S3 bucket https://s3.console.aws.amazon.com/s3/buckets/ohj-test-shalom/
## Contributors
Contributors to the tests (not to the library) are:

Tommi Ilmonen  
Ville Saarinen
