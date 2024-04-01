import { createSuccessResponse } from "./books.createresponses.js";
import { v4 as uuid } from "uuid";
export let books = [
  {
    id: "29cd6208-0394-4333-8c00-f27cf0db8abf",
    name: "javaScript",
    author: "anurag",
    publication: "uiubj",
    timeStamp: "2024-03-31T08:26:55.500Z",
  },
];
let counter = 0;
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

  const newBooks = {
    id: uuid(),
    name,
    author,
    publication,
    timeStamp,
  };
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
  const filterArray = books.filter((book) => book.id !== id);
  console.log("filter array", filterArray, id);

  books.length = 0;
  books = filterArray;
  console.log("book array", books);
  res
    .status(200)
    .json(createSuccessResponse(books, `Book Id${id} Deleted Succesfull`));
};

export const handleUpdateBooksById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { name, author, publication } = req.body;

  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    res.status(404).json("error");
  } else {
    const bookToUpdate = books[index];
    if (name) {
      bookToUpdate.name = name;
    }
    if (author) {
      bookToUpdate.author = author;
    }
    if (publication) {
      bookToUpdate.publication = publication;
    }
    books[index] = bookToUpdate;

    res.status(200).json(createSuccessResponse(books[index], "update"));
  }
};
