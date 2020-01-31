const router = require("express").Router();

router.get("/", function(req, res, next) {
  res.send({
    Server: "Hi, I'm your Server.  Can I start you off with a drink?"
  });
});

module.exports = router;
