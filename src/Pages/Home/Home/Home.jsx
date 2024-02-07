import useProducts from "../../../hooks/useProducts";
import ProductHome from "../ProductHome/ProductHome";

const Home = () => {
    const [products] = useProducts();

    const activeProducts = products.filter(product => product.active === true);

    return (
        <div>
            <div className='grid grid-cols-5 gap-4 m-10'>
                {
                    activeProducts.map(product => <ProductHome
                        key={product._id}
                        product={product}
                    ></ProductHome>)
                }
            </div>
        </div>
    );
};

export default Home;