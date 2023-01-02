import { useContext } from 'react';
import { useCartDetails } from '../../context/useCartDetails';

import imgSmallCart  from '@/assets/images/image-product-1-thumbnail.jpg'
import DeleteIcon from "@/components/icons/DeleteIcon";


export default () => {
  const { cartProducts, deleteCartProducts } = useContext(useCartDetails)
    return(
        <>
        <section className="absolute  top-[15%] w-full left-0 z-10 md:max-w-md md:-translate-x-full md:left-full">
          <div className="mx-4 rounded-md bg-white drop-shadow-xl">
            <h4 className="px-6 py-8 font-bold text-lg">Cart</h4>
            <hr/>
            {
              cartProducts.length === 0 && (<p className='py-16 text-center  text-gray-500 font-bold'>Your cart is empty.</p>)
            }
            {
              cartProducts.map((item) => (
                <article key={item.id} className="grid grid-cols-[1fr_4fr_1fr] px-6 py-4">
                  <img src={imgSmallCart} className="rounded-md" alt="" />
                  <div className="ml-4">
                    <h6 >{item.title}</h6>
                    <p>
                      <span>${item.finalPrice} x {item.quantity}</span>{"  "}<span className="font-bold">${(item.finalPrice * item.quantity).toFixed(2)}</span>
                    </p>
                  </div>
                  <button className="ml-auto">
                    <DeleteIcon onClick={()=>deleteCartProducts(item.id)} fill="#828282" className="hover:fill-orange-500" />
                  </button>
                </article> 
              ))
            }
            {
              cartProducts.length !== 0 && (<div className="px-6 pb-6">
              <button className="py-2 w-full  bg-orange-500 rounded-md text-white hover:bg-orange-700 transition-all">Checkout</button>

                </div>)
            }
                  

          </div>
        </section>
        </>
    )
}