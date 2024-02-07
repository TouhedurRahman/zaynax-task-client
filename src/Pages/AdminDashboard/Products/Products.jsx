import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import AdminProduct from '../AdminProduct/AdminProduct';

const Products = () => {
    const [products] = useProducts();

    return (
        <div>
            <div>
                <Link to="/admindashboard/addnewproduct" className="btn btn-warning">Add New Product</Link>
            </div>
            <div className='grid grid-cols-4 gap-4 m-10'>
                {
                    products.map(product => <AdminProduct
                        key={product._id}
                        product={product}
                    ></AdminProduct>)
                }
            </div>
        </div>
    );
};

export default Products;