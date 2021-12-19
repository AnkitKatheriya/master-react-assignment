import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'

import { BookCard } from '../../component'
import * as thunks from '../../redux/thunks'
import './Home.css'

export default function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunks.bookListThunk())
    }, [])

    return (
        <section className='books-container'>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
        </section>
    )
}
