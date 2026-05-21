import { Outlet } from 'react-router-dom'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

const AppLayout = () => {
  return (
    <>
        <Banner />
        <Navbar />
        <main className='min-h-screen'>
            <Outlet></Outlet>
        </main>
        <footer>footer</footer>
        <p>cartsidebar</p>
    </>
  )
}

export default AppLayout