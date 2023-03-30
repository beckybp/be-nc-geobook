import server from "express";
import {
  getBooks,
  getBook,
  postBook,
  patchBook
} from "../controllers/books-controllers.js";

const booksRouter = server.Router();

booksRouter.route("/").get(getBooks).post(postBook);

//Get by Username Method
booksRouter.route("/:id").get(getBook).patch(patchBook);

export default booksRouter;
