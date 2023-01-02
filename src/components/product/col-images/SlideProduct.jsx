import NextIcon from '../../icons/NextIcon'
import PreviousIcon from '../../icons/PreviousIcon'

import { useRef, useState } from 'react'
import { useEffect } from 'react'

// rest operator
export default ({ARRAY_IMGS = [], 
    ARRAY_IMGS_SMALL = [], 
    isOpenModal = false, 
    handleOpenModal = () => {}, 
    handleCloseModal = null, 
    ...props}) => {

    const btnSlider = useRef(null)
    const [index, setIndex] = useState(0)

    useEffect(() => {
       isOpenModal && btnSlider.current.classList.remove('md:hidden')
    }, [isOpenModal])

    const handleClickNext = () => {
        index === ARRAY_IMGS.length-1 ? setIndex(0) : setIndex(index+1)
    }
    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMGS.length-1) : setIndex(index-1)
    }


    return (
        // spread operator
        <section {...props}> 
            {
                isOpenModal && <button onClick={handleCloseModal} className='md:col-span-4 text-right text-white bold'>X</button>
            }
            
            <div className='col-span-4 relative xl:max-w-xl 2xl:max-w-2xl'>
                <img src={ARRAY_IMGS[index]} 
                alt="Imagen de producto" 
                className='aspect-[16/13] md:aspect-[16/18] w-full md:rounded-md md:cursor-pointer object-cover xl:aspect-[16/16] 2xl:max-h-[500px]' 
                onClick={handleOpenModal}/>
                <div ref={btnSlider} 
                className='absolute top-1/2 left-0 flex w-full justify-between -translate-y-1/2 px-3 md:hidden'>
                    <button className='bg-white w-9 h-9 rounded-full grid place-items-center' onClick={handleClickPrev}>
                        <PreviousIcon />   
                    </button>
                    <button className='bg-white w-9 h-9 rounded-full grid place-items-center' onClick={handleClickNext}><NextIcon /></button>
                </div>
            </div>
            {
                ARRAY_IMGS_SMALL.map((smallImg, i) => (
                    //El onclick con el setIndex cambia la imagen principal
                    <div 
                        key={i} 
                        onClick={() => {setIndex(i)}} 
                        className='relative rounded-md overflow-hidden mb-4 group '>
                        <img  src={smallImg} alt="Imagen de producto" className='hidden md:block md:rounded-md'/>
                        <span 
                            className={`hover:bg-[rgba(255,255,255,0.5)] h-full w-full absolute top-0 cursor-pointer border-solid hover:border-2 hover:border-orange-400 hover:rounded-md ${i=== index && "bg-[rgba(255,255,255,0.5)]"}`}>
                        </span>
                    </div>
                    ))
                }
               {/*  <img src={smallImg} alt="Imagen de producto" className='hidden md:block md:rounded-md'/>
                <img src={smallImg} alt="Imagen de producto" className='hidden md:block md:rounded-md'/>
                <img src={smallImg} alt="Imagen de producto" className='hidden md:block md:rounded-md'/> */}
        </section>
    )
}
