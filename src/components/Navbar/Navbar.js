import CartWidget from '../CartWidget/CartWidget'
import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(collectionRef).then(response => {

      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data}
      })

      setCategories(categoriesAdapted)
    })
  }, [])


  return (
    <nav className="NavBar" >
        <Link className='navLink' to='/'>
          <img className='imgLogo' src='https://firebasestorage.googleapis.com/v0/b/backend-incrostore.appspot.com/o/logoIncros-min.jpg?alt=media&token=339aa8de-eb16-489b-a736-c0332a1033c1'/>
          <h3 className='title'>INCROSTORE</h3>
        </Link>
        <div className="Categories">
            { categories.map(cat => (
                <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
            ))}
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar