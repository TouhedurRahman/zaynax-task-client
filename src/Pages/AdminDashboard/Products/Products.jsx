import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <div>
                <Link to="/admindashboard/addnewproduct" className="btn btn-warning">Add New Product</Link>
            </div>
        </div>
    );
};

export default Products;