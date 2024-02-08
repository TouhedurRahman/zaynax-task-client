import useOrders from '../../../hooks/useOrders';

const AllOrders = () => {
    const [orders] = useOrders();

    return (
        <div>
            <div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-center">
                                    <th>SL</th>
                                    <th>Order No.</th>
                                    <th>Item Price</th>
                                    <th>Action</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody className="my-3">
                                {
                                    orders.map((order, idx) => <tr
                                        key={order._id}
                                        className="border border-b-black border-t-black text-center"
                                    >
                                        <th>{idx + 1}</th>
                                        <td>12345</td>
                                        <td>{order.totalPrice}</td>
                                        <td className="flex justify-center items-center">
                                            <button className="btn btn-warning mr-3">Confirm</button>
                                            <button className="btn btn-error ml-3">Cancel</button>
                                        </td>
                                        <td>{order.status}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;