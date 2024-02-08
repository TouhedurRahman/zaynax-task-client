import { Link, Outlet } from "react-router-dom";

const Orders = () => {

    return (
        <div>
            <div className="mb-5">
                <Link to="/admindashboard/orders/all-orders" className="btn btn-outline btn-warning me-5">All</Link>
                <Link to="/admindashboard/orders/pending-orders" className="btn btn-outline btn-info me-5">Pending</Link>
                <Link to="/admindashboard/orders/confirmed-orders" className="btn btn-outline btn-success me-5">Confirmed</Link>
                <Link to="/admindashboard/orders/canceled-orders" className="btn btn-outline btn-error me-5">Canceled</Link>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Orders;