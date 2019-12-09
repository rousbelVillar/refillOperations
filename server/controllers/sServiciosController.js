var models = require("../models/index");
// var common = require("../common/common");
var exports = (module.exports = {});

exports.getServiceParent = function (req, res) { 
  return models.sequelize.query(`select * from dbo.servicios where isparent = true `, {
    type: models.sequelize.QueryTypes.select,
  }).then((result) => {
    if (result != null) {
      res.send(result[0]);
    }
  }).catch((error) => {
    res.send(error.message);
  });
};

exports.getService1 = function (req, res) { 
    return models.sequelize.query(`select * from dbo.servicios where isparent = false and parent_id = 1`, {
      type: models.sequelize.QueryTypes.select,
    }).then((result) => {
      if (result != null) {
        res.send(result[0]);
      }
    }).catch((error) => {
      res.send(error.message);
    });
  };

  exports.getService2 = function (req, res) { 
    return models.sequelize.query(`select * from dbo.servicios where isparent = false and parent_id = 2`, {
      type: models.sequelize.QueryTypes.select,
    }).then((result) => {
      if (result != null) {
        res.send(result[0]);
      }
    }).catch((error) => {
      res.send(error.message);
    });
  };

  exports.getService3 = function (req, res) { 
    return models.sequelize.query(`select * from dbo.servicios where isparent = false and parent_id = 3`, {
      type: models.sequelize.QueryTypes.select,
    }).then((result) => {
      if (result != null) {
        res.send(result[0]);
      }
    }).catch((error) => {
      res.send(error.message);
    });
  };