/* importing libraries */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* import manual package import*/
import Header from './component/header/Header'
import Footer from './component/footer/Footer'

/* CSS imports */
import './App.css'

/* Utility functions */
import routes from './routes'

const App = () => {
    return (
        <main className='application-wrapper'>
            <Router>
            <Header />
                <Routes>
                        {
                            routes.map(({ key, path, render}) => <Route key={key} path={path} element={render()} />)
                        }
                </Routes>
            <Footer />
            </Router>

        </main>
    )
}

export default App
