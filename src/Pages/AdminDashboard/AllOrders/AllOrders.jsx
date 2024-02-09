import axios from 'axios';
import useOrders from '../../../hooks/useOrders';
import Swal from 'sweetalert2';

const AllOrders = () => {
    const [orders, refetch] = useOrders();

    const handleUpdateStatus = (id, updateStatus) => {
        const updatedStatus = {
            status: updateStatus
        }

        axios.patch(`http://localhost:5000/order/${id}`, updatedStatus)
            .then(response => {
                if (response.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: "Status successfully updated!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    }

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
                                            {
                                                order.status !== 'pending'
                                                    ?
                                                    <>
                                                    </>
                                                    :
                                                    <>
                                                        <button onClick={() => handleUpdateStatus(order._id, "confirm")} className="btn btn-warning mr-3">Confirm</button>
                                                        <button onClick={() => handleUpdateStatus(order._id, "canceled")} className="btn btn-error ml-3">Cancel</button>
                                                    </>
                                            }
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