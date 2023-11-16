const format = require("string-template")

const locale = process.env.LOCALE || "id_ID"

const f = (text, data = {}) => {
    const template = require("../locales/" + locale + ".json")
    return format(template[text] || text, data)
}

module.exports = f
