
import { Button } from 'flowbite-react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {Table,TableBody,TableCell,TableHead,TableHeadCell,TableRow} from "flowbite-react"
import { Card } from "flowbite-react";
import {decrementCart,emptyCart,incrementItem,removeItem} from '../Redux/Slices/cartSlice'


function Cart() {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cartReducer)
  console.log(cart)

  const handlecheckout=()=>{
    alert("order placed successfully...")
  }

  return (

    <div className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-900">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
          Shopping Cart
        </h1>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">

          <div className="overflow-x-auto">

            <Table>

              <TableHead>
                <TableRow>

                  <TableHeadCell className="px-6 py-4">
                    Product Name
                  </TableHeadCell>

                  <TableHeadCell className="px-6 py-4 text-center">
                    Image
                  </TableHeadCell>

                  <TableHeadCell className="px-6 py-4 text-center">
                    Quantity
                  </TableHeadCell>

                  <TableHeadCell className="px-6 py-4 text-center">
                    Price
                  </TableHeadCell>

                  <TableHeadCell className="px-6 py-4 text-center">
                    Total Price
                  </TableHeadCell>

                  <TableHeadCell className="px-6 py-4 text-center">
                    Action
                  </TableHeadCell>

                </TableRow>
              </TableHead>


              <TableBody className="divide-y">

                {
                  cart.length > 0
                    ? cart.map(item => (

                      <TableRow
                        key={item.id}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >

                        {/* Product Name */}
                        <TableCell className="whitespace-nowrap px-6 py-5 font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </TableCell>


                        {/* Image */}
                        <TableCell className="px-6 py-5">

                          <div className="flex justify-center">

                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="h-20 w-20 rounded-lg object-contain"
                            />

                          </div>

                        </TableCell>


                        {/* Quantity */}
                        <TableCell className="px-6 py-5">

                          <div className="flex items-center justify-center gap-3">

                            <Button
                              color="failure"
                              size="sm"
                              onClick={() =>
                                dispatch(decrementCart(item))
                              }
                            >
                              -
                            </Button>

                            <span className="min-w-[30px] text-center text-lg font-semibold text-gray-800 dark:text-white">
                              {item.quantity}
                            </span>

                            <Button
                              color="success"
                              size="sm"
                              onClick={() =>
                                dispatch(incrementItem(item))
                              }
                            >
                              +
                            </Button>

                          </div>

                        </TableCell>


                        {/* Price */}
                        <TableCell className="px-6 py-5 text-center font-semibold text-blue-600 dark:text-blue-400">
                          {item.price}
                        </TableCell>


                        {/* Total Price */}
                        <TableCell className="px-6 py-5 text-center font-bold text-green-600 dark:text-green-400">
                          {item.totalprice}
                        </TableCell>


                        {/* Remove */}
                        <TableCell className="px-6 py-5 text-center">

                          <Button
                            color="failure"
                            size="sm"
                            onClick={() =>
                              dispatch(removeItem(item.id))
                            }
                          >
                            Remove
                          </Button>

                        </TableCell>

                        <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Quantity:{item.quantity}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Total Price:{item.quantity*item.price}
      </p>
      <Button onClick={handlecheckout}>CheckOut</Button>
    </Card>

                      </TableRow>

                    ))
                    : ""
                }
                
              </TableBody>
<Button onClick={()=>dispatch(emptyCart())}>Emptycart</Button>

            </Table>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Cart
