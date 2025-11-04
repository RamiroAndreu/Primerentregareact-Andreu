import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>MateArte</h1>
      <ul style={styles.links}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f4e1b3',
    padding: '1rem 2rem',
    borderBottom: '2px solid #b28c45',
  },
  logo: {
    fontSize: '1.5rem',
    color: '#3e2723',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none',
  }
}

export default NavBar
