const {Router} = require("express");

const isAdmin = require("../middlewares/isAdmin.middleware");
const { contact_created, contact_korish } = require("../controllers/contact.controller");

const router = Router();

router.post("/contact/created", contact_created);
router.get("/contact/korish/:id", isAdmin, contact_korish);

module.exports = router;