import { createSuccessResponse } from "./books.createresponses.js";
import { v4 as uuid } from "uuid";
export let books = [];
export const handleGetBooks = (req, res) => {
  const response = createSuccessResponse(
    { books, TotalBooksinDirectory: books.length },
    "Books directory"
  );
  res.status(200).json({ response });
};

export const handlePostBooks = (req, res) => {
  const { name, author, publication } = req.body;
  const timeStamp = new Date().toISOString();
  const newBooks = { id: uuid(), name, author, publication, timeStamp };
  books.push(newBooks);
  const response = createSuccessResponse(newBooks, "Book recorded succesfully");
  res.status(201).json({ response });
};

export const handleGetBooksById = (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === id);

  res
    .status(200)
    .json(createSuccessResponse(book, "We have found this book by given ID"));
};

export const handleDeleteBooksById = (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex((book) => book.id === id);
  console.log(bookIndex);
  if (bookIndex === -1) {
    res.status(404).json("not found");
  } else {
    books.slice(bookIndex);
    res
      .status(200)
      .json(
        createSuccessResponse(
          bookIndex,
          `Book Id${books.id} Deleted Succesfull`
        )
      );
  }
};

export const handleUpdateBooksById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { name, author, publication } = req.body;

  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    res.status(404).json("error");
  } else {
    books[index] = name;
    books[index] = author;
    books[index] = publication;

    res.status(200).json(createSuccessResponse(books[index], "update"));
  }
};
