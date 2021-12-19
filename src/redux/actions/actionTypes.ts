interface IBook {
    id: number,
    title: string,
    description: string,
    isbn13: string,
    price: string,
    image: string,
    author_name: string,
    page_count: number,
}

const actionTypes = {
    "FETCH_BOOK_LIST": "FETCH_BOOK_LIST",
    "FETCH_BOOK_LIST_SUCESS": "FETCH_BOOK_LIST_SUCESS",
    "FETCH_BOOK_LIST_ERROR": "FETCH_BOOK_LIST_ERROR",
}

const loadBooklist = () => ({
    type: actionTypes.FETCH_BOOK_LIST,
})

const loadBooklistSuccess = (data: Array<IBook>) => ({
    type: actionTypes.FETCH_BOOK_LIST,
    data: data
})

const loadBooklistFail = (error: Error) => ({
    type: actionTypes.FETCH_BOOK_LIST,
    error: error,
})

export {
    actionTypes,
    loadBooklist,
    loadBooklistSuccess,
    loadBooklistFail
}