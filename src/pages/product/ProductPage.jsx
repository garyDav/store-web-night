import { Navbar } from '../../components'

function ProductPage() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="text-center">Store App</h1>

        <div className="card" style={{ width: '18rem' }}>
          <img
            className="card-img-top"
            src="https://placehold.co/286x180"
            alt="Product Image"
          />
        </div>
      </div>
    </>
  )
}

export default ProductPage
