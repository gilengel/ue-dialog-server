/**
* dummy function to create an input model
*/
exports.getInput = function(req, res) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  res.json({ data : {id: req.params.inputId, x: 0, y: 0, type: 'input'} });
};

/**
* dummy function to inform ember that the input was successfully deleted from the
* model
*/
exports.deleteInput = function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  res.json({ data : {id: req.params.inputId, x: 0, y: 0, type: 'input'} });
};
