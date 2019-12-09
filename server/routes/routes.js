var express = require("express");
var router = express.Router();
var sservicios = require("../controllers/sServiciosController");

  router.get("/getserviceparent", function(req, res, next) {
    sservicios.getServiceParent(req, res).then(response => {
        return res.send(response);
      })
      .catch(err => {
        return res.send(err);
      });
  });

  router.get("/getservice1", function(req, res, next) {
    sservicios.getService1(req, res).then(response => {
        return res.send(response);
      })
      .catch(err => {
        return res.send(err);
      });
  });

  router.get("/getservice2", function(req, res, next) {
    sservicios.getService2(req, res).then(response => {
        return res.send(response);
      })
      .catch(err => {
        return res.send(err);
      });
  });

  router.get("/getservice3", function(req, res, next) {
    sservicios.getService3(req, res).then(response => {
        return res.send(response);
      })
      .catch(err => {
        return res.send(err);
      });
  });
  module.exports = router;