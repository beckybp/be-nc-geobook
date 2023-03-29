import bookModels from "../model/book.js";

export const getBooks = async (req, res, next) => {
  try {
    const bookData = await bookModels.find();
    return res.status(200).send({ books: bookData });
  } catch (error) {
    next(error);
  }
};

export const getBook = async (req, res, next) => {
  try {
    const bookData = await bookModels
      .findById(req.params.id);
    return res.status(200).send({ book: bookData })
  } catch (error) {
    next(error);
  }
}
