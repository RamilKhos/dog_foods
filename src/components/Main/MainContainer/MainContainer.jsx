/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react'
import { api } from '../../../API'
import { MainCard } from './MainCard/MainCard'

export function MainContainer() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.showAllProduct()
      .then(
        (serverData) => {
          if (serverData) {
            setProducts(serverData.products)
          }
        },
      )
  }, [])

  return (
    <div className="container m-20px pt-3">
      <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
        {products.map((el) => (
          <MainCard
            key={el._id}
            name={el.name}
            price={el.price}
            pictures={el.pictures}
            stock={el.stock}
          />
        ))}

      </div>
    </div>
  )
}
