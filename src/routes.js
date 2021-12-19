import { Home, MyOrders, Cart, BookDetails } from './container'

const routes = [
    {
        key: 'home',
        render: () => <Home /> ,
        path: '/'
    },
    {
        key: 'cart',
        render: () => <Cart />,
        path: '/cart'
    },
    {
        key: 'myorders',
        render: () => <MyOrders />,
        path: '/my-orders'
    },
    {
        key: 'overview',
        render: () => <BookDetails />,
        path: '/overview'
    }
]

export default routes