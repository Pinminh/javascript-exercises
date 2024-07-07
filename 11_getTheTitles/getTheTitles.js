const getTheTitles = function (books) {
  return books.reduce((titles, book) => {
    return titles.concat(book.title);
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
