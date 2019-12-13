var express = require("express");
var router = express.Router();
var sservicios = require("../controllers/sServiciosController");

  router.get("/getservicechild", function(req, res, next) {
    sservicios.getServiceChild(req, res).then(response => {
        return res.send(response);
      })
      .catch(err => {
        return res.send(err);
      });
  });


  module.exports = router;