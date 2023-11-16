const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {

    async introduction(request) {
      return this.reply("Halo")
    }

}