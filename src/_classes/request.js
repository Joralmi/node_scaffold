// Global packages
const Log = require('./logger');
const request = require('request-promise');
const config = require('../_configuration/configuration');


/*
External API request service
When invoked requires 3 obligatory parameters:
url - String - Addreses the right external service -- http://.../
      The url will also point to the right header to be included in the request
endpoint - String - Endpoint where the request must be addressed
method - String - POST, GET, PUT, DELETE
payload - Object - Contains payload and may be an empty object  if not required {}
headers - i.e. Vicinity x-access-token. The default headers are preconfigured
destination - Allows choosing the urls defined in connections
*/

module.exports = class Request {
  constructor(){
    this.timeout = config.timeout || 5000;
    this.method = "GET";
    this.headers =  {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept' : 'application/json',
        'simple': false
      };
  }

  // Methods

  setOptions(options) {
    if (options) {
      this.options = options;
    }
  }

  setBody(body){
    if(body && this.method !== "GET"){
      this.body = JSON.stringify(body);
    }
  }

  setUri(endpoint, url){
      this.uri = url + endpoint;
  }

  setMethod(method){
    this.method = method;
  }

  addHeader(key, value){
      this.headers[key] = value;
  }

  _validate(){
    if(!this.uri){ throw new Error("Missing URI"); }
  }

  async send(){
    var logger = new Log();
    try{
      // validate all parameters are ready
      this._validate();
      logger.debug("Calling... " + this.uri, "REQUEST");
      let response = await request(this);
      return Promise.resolve(response);
    } catch(err) {
      logger.error(err, "REQUEST");
      return Promise.reject('Missing URI');
    }
  }

};



