import { Button, Card } from 'flowbite-react';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteItem } from '../Redux/Slices/wishlistSlice';


export default function Whishlist() {
  const dispatch=useDispatch()
  console.log(dispatch);
  
  const wishlist=useSelector(state=>state.wishlistReducer)
  console.log(wishlist);
  
  return (
    <div className="min-h-screen p-6">

  <h1 className="text-3xl font-bold text-white mb-8">
    My Wishlist 
  </h1>

  {
    wishlist.length > 0 ? (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {
          wishlist.map((item) => (

            <Card
              key={item.id}
              className="max-w-sm bg-gray-900 border-gray-700"
              imgAlt={item.title}
              imgSrc={item.thumbnail}
            >

              <h5 className="text-xl font-semibold tracking-tight text-white">
                {item.title}
              </h5>

              <p className="font-normal text-gray-400 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between">

                <span className="text-2xl font-bold text-white">
                  ${item.price}
                </span>
        
              </div>
              <Button>Add To Cart</Button>
             <Button onClick={()=>dispatch(deleteItem(item.id))}>Remove</Button>
            </Card>

          ))
        }

      </div>

    ) : (

      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-white">
          Cart is Empty 
        </h1>

        {/* <p className="text-gray-400 mt-3">
          Add products to your wishlist.
        </p> */}
      </div>

    )
  }

</div>
  )
}
