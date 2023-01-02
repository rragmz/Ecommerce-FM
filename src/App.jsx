import MainHeader from '@/components/header/MainHeader';
import MainProduct from './components/product/MainProduct';

import CartDetailsProvider from '@/context/useCartDetails';

const App = () => {
    return (
    <CartDetailsProvider>
        <MainHeader />
        <MainProduct />
    </CartDetailsProvider>
    )
}

export default App;
