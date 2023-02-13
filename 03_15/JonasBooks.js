class Books {
  constructor(title, genere, pages, currentPage, ISBN, pubYear, readStatus) {
    this.name = title;
    this.type = genere;
    this.pages = pages;
    this.currentPage = currentPage;
    this.ISBN = ISBN;
    this.pubYear = pubYear;
    this.readStatus = readStatus;
  }
  uppdateCurrentPage(newCurrentPage) {
    this.currentPage = newCurrentPage;
  }
  uppdateReadStatus(newReadStatus) {
    this.readStatus = newReadStatus;
  }
}

export default Books;
