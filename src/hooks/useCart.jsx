import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCart = () => {
    const { data: cart = [], refetch } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const res = await axios.get("https://zaynax-task-server.vercel.app/cart");
            return res.data;
        }
    });
    return [cart, refetch];
};

export default useCart;