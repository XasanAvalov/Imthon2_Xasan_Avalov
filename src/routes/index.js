const adminRouter = require("./admin.route");
const servicesRouter = require("./services.route");
const feedbackRouter = require("./feedback.routes");
const contactRouter = require("./contact.route")

module.exports = [
    adminRouter,
    servicesRouter,
    feedbackRouter,
    contactRouter,
]