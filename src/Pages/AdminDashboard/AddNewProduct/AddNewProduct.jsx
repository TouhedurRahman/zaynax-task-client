import { useForm, Controller } from "react-hook-form";

function AddNewProduct() {
    const { handleSubmit, control, register } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 mt-8 rounded shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Image Upload
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="file"
                        {...register("image")}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Product Name
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="text"
                        {...register("productName")}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Product Price (Before discount)
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="number"
                        step="0.01"
                        {...register("price")}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Discount Rate (%)
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="number"
                        step="0.01"
                        {...register("discountRate")}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Shipping Charge
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="number"
                        step="0.01"
                        {...register("shippingCharge")}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Color
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="text"
                        {...register("color")}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Size
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="text"
                        {...register("size")}
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

                <div className="flex items-center justify-center rounded-lg">
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

export default AddNewProduct;