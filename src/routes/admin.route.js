const {Router} = require("express");
const { admin_create, chesk_admin } = require("../controllers/admin.controller");

const router = Router();

router.post("/newAdmin", admin_create);
router.post("/admin", chesk_admin)

module.exports = router;