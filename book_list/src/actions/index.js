export function selectBook(book) {
  // selectbook is an action creator, it needs to return an action,
  // an object with a type property and sometimes a payload.
  // console.log('A has been selected: ', book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}