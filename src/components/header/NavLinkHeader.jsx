export default ({text}) => {
    return (
        // Peer está pendiente de un elemento hermano, group puede ver un elemento padre o contenedor
     <a href="#" className="group md:py-8 relative py-4">
        <span className="group-hover:text-orange-primary md:group-hover:text-black transition-all duration-300">{text}</span>
        <span className="block w-full h-1 scale-x-0 md:group-hover:scale-x-100 group-hover:bg-orange-primary absolute bottom-0 transition-all duration-500"></span>
    </a>
    )
}