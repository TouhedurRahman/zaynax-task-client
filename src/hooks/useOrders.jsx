import { useQuery } from "@tanstack/react-query";

const useOrders = () => {

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const url = 'https://zaynax-task-server.vercel.app/orders';
            const result = await fetch(url);
            return result.json();
        }
    })

    return [orders, refetch];
};

export default useOrders;