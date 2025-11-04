function CartWidget() {
  return (
    <div style={styles.cart}>
      🛒
      <span style={styles.count}>3</span>
    </div>
  )
}

const styles = {
  cart: {
    position: 'relative',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  count: {
    position: 'absolute',
    top: '-8px',
    right: '-10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    fontSize: '0.8rem',
    padding: '2px 6px',
  }
}

export default CartWidget
