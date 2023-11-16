const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

router.keyword("*", [BotController, "introduction"]);


module.exports = router;