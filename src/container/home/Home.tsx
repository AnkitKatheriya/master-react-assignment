import {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

import { BookCard } from '../../component'
import * as thunks from '../../redux/thunks'
import './Home.css'

interface IBook{
    author_name: string,
    description: string,
    id: number,
    image: string,
    isbn13: string,
    page_count: number,
    price: string,
    title: string,
}

export default function Home() {
    const dispatch = useAppDispatch()

    const { error, data: books } = useAppSelector((state) => state.booklist)

    useEffect(() => {
        dispatch<any>(thunks.bookListThunk())
    }, [])

    if(error){
        return <div>Error</div>
    }

    return (
        <section className='books-container'>
            {
                books.length > 0 && books.map((book: IBook) =>{
                    return <BookCard {...book} />
                } )
            }
        </section>
    )
}
