const router = require("express").Router();
const registerUser = require("../controller/registerUser");
const userLogin = require("../controller/userLogin");
const getAllUsers = require("../controller/getAllUsers");
const authMiddleware = require("../middleware/auth");
const editUser = require("../controller/editUser");
const createUser = require("../controller/createuser");
//register the user

router.post("/register", registerUser);

//post for login user is legit or not

router.post("/login", userLogin);

//get all user
router.get("/getAll", getAllUsers);

// logout user

router.get("/logout",userLogout);
//getting post

router
  .route("/posts")
  .get(authMiddleware, getAllUsers)
  .post(authMiddleware, createUser);

//update and delete  user
router
  .route("/posts/:id")
  .put(authMiddleware, editUser);

module.exports = router;
