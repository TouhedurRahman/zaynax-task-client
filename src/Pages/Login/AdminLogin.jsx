
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        if (data.userId === "admin" && data.password === "password") {
            navigate("/admindashboard");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <h2 className="text-center text-2xl font-semibold mb-4">Admin Panel</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
                <div className="mb-4">
                    <label htmlFor="userId" className="block mb-1">User ID</label>
                    <input
                        id="userId"
                        type="text"
                        {...register('userId', { required: true })}
                        className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    />
                    {errors.userId && <span className="text-red-500">User ID is required</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', { required: true })}
                        className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    />
                    {errors.password && <span className="text-red-500">Password is required</span>}
                </div>
                <div className='text-center'>
                    <button type="submit" className="bg-[#FFF700] text-black px-4 py-2 rounded-md">Sign in</button>
                </div>
            </form>

            <div className="bg-white-100 text-center p-8 rounded-lg shadow-md border-2">
                <h2 className="text-2xl font-semibold mb-4">User Credentials</h2>
                <div className="mb-2">
                    <p className="text-gray-700"><strong>User ID:</strong> admin</p>
                </div>
                <div className="mb-4">
                    <p className="text-gray-700"><strong>Password:</strong> password</p>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
