import CartIcon from "@/components/icons/CartIcon"
import { useCartDetails } from '@/context/useCartDetails'
import { useState } from "react"
import { useContext } from "react"

export default ({objectProduct}) => {
    //Hoock - Destructuring declaration
    const {addCartProducts} = useContext(useCartDetails)
    const [count, setCount] = useState(0)

    const decrementArticle = () => {
        if(count === 0) return
        setCount(count - 1)
    }

    const handleModifyCart = () => {
            addCartProducts(
            {img: objectProduct.imagesSmall[0], 
            id: objectProduct.id,
            title: objectProduct.title,
            finalPrice: (objectProduct.price * (1-objectProduct.discount)).toFixed(2),
            quantity: count || 1
            })
            setCount(0)
    }

    return (
        <section className="container mx-auto pt-0 p-8 md:px-0">
            <p className="text-orange-primary font-bold py-8 tracking-wide">{objectProduct.subtitle.toUpperCase()}</p>
            <h2 className="font-bold text-3xl md:text-5xl mb-5">{objectProduct.title}</h2>
            <p className="text-dark-grayish-blue mb-5">{objectProduct.description}
            </p>

            <div className="grid grid-cols-3 md:grid-cols-[1fr_3fr] grid-gap-4 font-bold items-center mb-5 md:gap-0">
                <span className="text-2xl md:text-3xl">${(objectProduct.price * (1-objectProduct.discount)).toFixed(2) }</span>
                <span className="bg-pale-orange rounded-md mr-auto py-1 px-2 text-orange-primary">{objectProduct.discount * 100 + "%"}</span>
                <span className="text-right text-grayish-blue line-through text-lg md:col-span-3 md:text-left">$ { objectProduct.price.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.5fr]">
                <div className="col-span-3 flex items-baseline justify-around bg-gray-100 pb-3 py-1 rounded-md mb-5 md:col-span-1 md:mb-0">
                    <button className="text-3xl text-orange-primary" onClick={decrementArticle}>-</button>
                    <span className="text-lg">{count}</span>
                    <button className="text-3xl text-orange-primary" onClick={() => setCount(count+1)}>+</button>
                </div>
                <button 
                    onClick={handleModifyCart} 
                    className="md:col-span-1 col-span-3 flex items-center justify-center gap-x-3 bg-orange-primary text-white md:py-0 py-3 rounded-md hover:bg-orange-600 transition-all">
                    <CartIcon fill="#FFF"/>
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    )
}
