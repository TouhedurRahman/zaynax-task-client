import useOrders from '../../../hooks/useOrders';

const CanceledOrders = () => {
    const [orders] = useOrders();

    const canceledOrders = orders.filter(order => order.status === "canceled");

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
                                    canceledOrders.map((order, idx) => <tr
                                        key={order._id}
                                        className="border border-b-black border-t-black text-center"
                                    >
                                        <th>{idx + 1}</th>
                                        <td>12345</td>
                                        <td>{order.totalPrice}</td>
                                        <td></td>
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

export default CanceledOrders;