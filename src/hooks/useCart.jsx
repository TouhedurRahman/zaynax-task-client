import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCart = () => {
    const { data: cart = [], refetch } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/cart");
            return res.data;
        }
    });
    return [cart, refetch];
};

export default useCart;