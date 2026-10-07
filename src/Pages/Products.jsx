
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Slices/productSlice'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

export default function Products() {

  const { loading, allProducts, error } = useSelector(
    state => state.productReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
        padding: "30px"
      }}
    >

      {allProducts.map(item => (

        <div
          style={{
            width: "400px",
            padding: "15px",
            border: "2px solid black",
            margin: "10px",
            boxSizing: "border-box"
          }}
        >

          <img
            src={item.thumbnail}
            alt=""
            style={{
              width: "100%",
              height: "250px",
              objectFit: "contain"
            }}
          />

          <p
            style={{
              fontSize: "20px",
              padding: "10px",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            {item.title}
          </p>

          <p>{item.description}</p>

          <p>{item.category}</p>

          <p>price:{item.price}</p>

          <Link to={`/view/${item.id}`}>
            <Button className="bg-purple-700">
              view details
            </Button>
          </Link>

        </div>

      ))}

    </div>
  )
}

