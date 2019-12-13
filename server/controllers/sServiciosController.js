var models = require("../models/index");
// var common = require("../common/common");
var exports = (module.exports = {});

exports.getServiceChild = function (req, res) { 
  return models.sequelize.query(`select servicio_id, nombre, codigo from dbo.servicios where isparent = false order by servicio_id;`, {
    type: models.sequelize.QueryTypes.select,
  }).then((result) => {
    if (result != null) {
      res.send(result[0]);
    }
  }).catch((error) => {
    res.send(error.message);
  });
};

  exports.getCompletedRequests = function (req, res) { 
    return models.sequelize.query(`select * from dbo.uspgetcompletedrequestbyuser('${req.query.usuario}');`, {
      type: models.sequelize.QueryTypes.select,
    }).then((result) => {
      if (result != null) {
        res.send(result[0]);
      }
    }).catch((error) => {
      res.send(error.message);
    });
  };

  exports.getInProgressRequests = function (req, res) { 
    return models.sequelize.query(`select * from dbo.uspgetpendingrequestbyuser('${req.query.usuario}');`, {
      type: models.sequelize.QueryTypes.select,
    }).then((result) => {
      if (result != null) {
        res.send(result[0]);
      }
    }).catch((error) => {
      res.send(error.message);
    });
  };