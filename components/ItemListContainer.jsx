function ItemListContainer({ greeting }) {
  return (
    <section style={styles.container}>
      <h2>{greeting}</h2>
    </section>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '1.2rem',
  }
}

export default ItemListContainer
