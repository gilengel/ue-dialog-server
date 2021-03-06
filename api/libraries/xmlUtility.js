var Promise = require("bluebird"),
    xml2js = Promise.promisifyAll(require('xml2js')),
    fileUtil = require('../libraries/fileUtility.js');

exports.parseStringFromFile = function(string){
  return xml2js.parseStringAsync(string);
}

exports.buildFileFromObject = function(object, file){
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(object);

  writeFile(file, xml, function(xml){
    success(xml);
  }, function(err){
    error(err);
  });
}

exports.parseFile = function(file){
  return fileUtil.readFile(file)
}
