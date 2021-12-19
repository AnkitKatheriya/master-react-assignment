import SiteName from './SiteName'
import Menu from '../menu/Menu'
import './Header.css'

const Header = () => {
    return (
        <header className='application-header'>
            <SiteName sitename="eCommerce Site"/>
            <Menu />
        </header>
    )
}

export default Header