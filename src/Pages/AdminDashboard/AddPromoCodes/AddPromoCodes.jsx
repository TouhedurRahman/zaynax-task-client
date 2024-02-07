import { useForm, Controller } from "react-hook-form";

function AddPromoCodes() {
    const { handleSubmit, register, control } = useForm();

    const onSubmit = (data) => {
        data.promoCodes = data.promoCodes.toUpperCase();
        console.log("Product Details: ", data);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 mt-8 rounded shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="promoCodes" className="block mb-2 font-bold text-gray-700">
                        Promo Codes
                    </label>
                    <input
                        id="promoCodes"
                        className="w-full px-3 py-2 border rounded"
                        type="text"
                        {...register("promoCodes")}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="startDate" className="block mb-2 font-bold text-gray-700">
                        Start Date
                    </label>
                    <input
                        type="date"
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
                        step="0.01"
                        {...register("discountRate")}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="useTime" className="block mb-2 font-bold text-gray-700">
                        Use Time
                    </label>
                    <input
                        id="useTime"
                        className="w-full px-3 py-2 border rounded"
                        type="text"
                        {...register("useTime")}
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
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddPromoCodes;
