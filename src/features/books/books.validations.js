import { books } from "./books.controller.js";
import { createErrorResponse } from "./books.createresponses.js";
export const validateBookData = (req, res, next) => {
  const { name, author, publication } = req.body;

  if (!name || name.trim() === 0) {
    return res
      .status(400)
      .json(
        createErrorResponse(
          400,
          "Empty name not consider please Enter Appropriate Name"
        )
      );
  }
  if (!author || author.trim() === 0) {
    return res
      .status(400)
      .json(
        createErrorResponse(
          400,
          "Empty author not consider please Enter Appropriate author releted book"
        )
      );
  }
  if (!publication || publication.trim() === 0) {
    return res
      .status(400)
      .json(
        createErrorResponse(
          400,
          "Empty publication not consider please Enter Appropriate publication releted book"
        )
      );
  }
  next();
};

export const validateGetBookDirectory = (req, res, next) => {
  if (books.length === 0) {
    return res
      .status(400)
      .json(createErrorResponse(400, "Book Directory is empty"));
  }
  next();
};

export const validateGetBookDirectoryById = (req, res, next) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === id);
  if (!book) {
    res
      .status(404)
      .json(createErrorResponse(404, "Book not found with given ID"));
  }
  next();
};
