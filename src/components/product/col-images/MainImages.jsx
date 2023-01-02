import SlideProduct from "@/components/product/col-images/SlideProduct"
import { useState } from "react"
// Controlará los slides
export default ({ARRAY_IMGS, ARRAY_IMGS_SMALL}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const handleOpenModal = () => {
        (window.innerWidth > 767) && setIsOpenModal(true)

    }
    const handleCloseModal = () => {
        setIsOpenModal(false)
    }
    return (
        <>
        <SlideProduct 
            ARRAY_IMGS={ARRAY_IMGS}
            ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL} 
            className="grid md:grid-cols-4 md:gap-4"
            handleOpenModal={handleOpenModal}

        />
        {
            isOpenModal && (
            <>
                <SlideProduct 
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL} 
                className="hidden md:grid md:grid-cols-4 md:gap-4 md:absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:mt-36 md:-translate-x-1/2 md:max-w-md md:z-10"
                isOpenModal = {isOpenModal}
                handleCloseModal={handleCloseModal}
                />
                <span className=" w-full h-full bg-black/70 fixed left-0 top-0">

                </span>
                
            </>

            )
        }
        

        </>
    )
}