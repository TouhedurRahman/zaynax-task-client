import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePromoCode = () => {
    const { handleSubmit, register, control, reset } = useForm();

    const { id } = useParams();
    const navigate = useNavigate();

    const { data: promo = {} } = useQuery({
        queryKey: ["promo", id],
        queryFn: async () => {
            const { data } = await axios.get(`https://zaynax-task-server.vercel.app/promocode/${id}`);
            return data;
        },
    });

    const handleUpdatePromocode = (data) => {
        const { startDate, endDate, discountRate, usageTime, active } = data;
        const updatedPromo = {
            startDate,
            endDate,
            discountRate: parseInt(discountRate),
            usageTime: parseInt(usageTime),
            active
        };

        axios.patch(`https://zaynax-task-server.vercel.app/promocode/${promo._id}`, updatedPromo)
            .then(response => {
                if (response.data.modifiedCount) {
                    reset();
                    navigate("/admindashboard/promocodes");
                    Swal.fire({
                        icon: "success",
                        title: "Promo Code successfully updated!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    }

    return (
        <div className="max-w-md mx-auto bg-white p-8 mt-8 rounded shadow-md">
            <form onSubmit={handleSubmit(handleUpdatePromocode)}>
                <div className="mb-4">
                    <label htmlFor="promoCodes" className="block mb-2 font-bold text-gray-700">
                        Promo Codes
                    </label>
                    <input
                        id="promoCodes"
                        defaultValue={promo?.promoCode}
                        readOnly
                        className="w-full px-3 py-2 border rounded"
                        type="text"
                        {...register("promoCodes", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="startDate" className="block mb-2 font-bold text-gray-700">
                        Start Date
                    </label>
                    <input
                        type="date"
                        defaultValue={promo.startDate}
                        {...register("startDate", { required: true })}
                        className="input input-my-bordered w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="endDate" className="block mb-2 font-bold text-gray-700">
                        End Date
                    </label>
                    <input
                        type="date"
                        defaultValue={promo.endDate}
                        {...register("endDate", { required: true })}
                        className="input input-my-bordered w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="discountRate" className="block mb-2 font-bold text-gray-700">
                        Discount Rate (%)
                    </label>
                    <input
                        id="discountRate"
                        className="w-full px-3 py-2 border rounded"
                        type="number"
                        defaultValue={promo.discountRate}
                        step="0.01"
                        {...register("discountRate", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="usageTime" className="block mb-2 font-bold text-gray-700">
                        Use Time
                    </label>
                    <input
                        id="usageTime"
                        className="w-full px-3 py-2 border rounded"
                        type="text"
                        defaultValue={promo.usageTime}
                        {...register("usageTime", { required: true })}
                    />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <label htmlFor="active" className="block mb-2 font-bold text-gray-700">
                        Active?
                    </label>
                    <div className="flex items-center">
                        <Controller
                            control={control}
                            name="active"
                            defaultValue={false}
                            render={({ field }) => (
                                <>
                                    <input
                                        type="checkbox"
                                        id="active"
                                        className="hidden"
                                        {...field}
                                    />
                                    <label
                                        htmlFor="active"
                                        className={`cursor-pointer w-12 h-6 rounded-full ${field.value ? 'bg-blue-500' : 'bg-gray-400'
                                            }`}
                                    >
                                        <span className={`block w-6 h-6 rounded-full bg-white shadow-md transform ${field.value ? 'translate-x-6' : ''}`}></span>
                                    </label>
                                </>
                            )}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600"
                    >
                        Update Promo
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePromoCode;