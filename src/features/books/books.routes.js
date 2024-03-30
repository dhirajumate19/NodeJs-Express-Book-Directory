import express from "express";
import {
  handleDeleteBooksById,
  handleGetBooks,
  handleGetBooksById,
  handlePostBooks,
  handleUpdateBooksById,
} from "./books.controller.js";
import {
  validateGetBookDirectory,
  validateBookData,
  validateGetBookDirectoryById,
} from "./books.validations.js";
const route = express.Router();
route.get("/getbooks", validateGetBookDirectory, handleGetBooks);

route.post("/add", validateBookData, handlePostBooks);

route.get("/getbooks/:id", validateGetBookDirectoryById, handleGetBooksById);

route.delete("/getbooks/:id", handleDeleteBooksById);

route.put("/getbooks/:id", handleUpdateBooksById);
export default route;
