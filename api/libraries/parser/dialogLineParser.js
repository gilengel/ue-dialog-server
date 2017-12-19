var emberParser = require("./emberDataParser.js");
var connectionParser = require("./connectionParser.js");

var Promise = require("bluebird");

var eventEmitter = undefined;


exports.lines = new Map();

var self = this;

/**
*
*/
var pendingRelationships = new Map();

exports.registerEventEmitter = function(emitter){
  eventEmitter = emitter;
}

/**
 * addDialogLine - TODO add functionality to add parsed dialog line elements
 *
 * @param  {type} id description
 * @return {type}    description
 */
addDialogLine = function(dialogLine){
  self.lines.set(dialogLine.data.id, dialogLine);
  eventEmitter.emit('addDialogLine', dialogLine);
}


/**
 * exports - description
 *
 * @param  {type} element description
 * @return {type}         description
 */
exports.parse = function(element){

  return new Promise(function(resolve, reject){
  let id = element.$.id;

  var attributes = new Map();
  var relationships = new Map();

  let x = element.$.x;
  if(x !== undefined){
    attributes.set('x', x);
  }

  let y = element.$.y;
  if(y !== undefined){
    attributes.set('y', y);
  }

  let alreadySaid = element.$.alreadySaid;
  if(alreadySaid !== undefined){
    attributes.set('alreadySaid', already);
  }

  attributes.set('message', element.text);

  var inputs = undefined;
  if(element.$.inputs !== undefined){
    inputs = element.$.inputs.split(',');
  }

  var outputs = undefined;
  if(element.$.outputs !== undefined){
    outputs = element.$.outputs.split(',');
  }

  if(inputs !== undefined){
    inputs = inputs.map(connection => {
      return emberParser.createEmberObject("input", "line" + id + "input" + connection).data;
    })

    relationships.set("inputs", inputs);
  }

  if(outputs !== undefined){
    outpus = outputs.map(connection => {
      return emberParser.createEmberObject("output", "line" + id + "output" + connection).data;
    })

    relationships.set("outputs", outputs);
  }




    // finally create the ember data object

    // inform the parser that a dialog line was parsed. This is needed to inform
    // other dialog lines pointing to the parsed dialog line by a relationship
    // like following / previous line




  let emberObject = emberParser.createEmberObject("dialog-line", id, attributes, relationships);

    addDialogLine(emberObject);
  resolve(emberObject);
  });
}

exports.informAboutParsedChildren = function(children){
}