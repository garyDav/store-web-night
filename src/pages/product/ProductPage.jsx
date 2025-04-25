import { useEffect } from 'react'

import { Navbar, FabAddNew, ProductModal, ProductCard } from '../../components'
import { useProductStore } from '../../hooks'

function ProductPage() {
  const { products } = useProductStore()

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <>
      <Navbar />

      <section className="container">
        <h1 className="text-center">Store App</h1>

        <article className="d-flex gap-4 mt-4 flex-wrap justify-content-center">
          {products.map(
            ({ _id, name, expiration_date, price, stock, tags }) => (
              <ProductCard
                key={_id}
                name={name}
                expiration_date={expiration_date}
                price={price}
                stock={stock}
                tags={tags}
                img={'https://placehold.co/286x180'}
              />
            ),
          )}
        </article>
      </section>

      <ProductModal />
      <FabAddNew />
    </>
  )
}

export default ProductPage
