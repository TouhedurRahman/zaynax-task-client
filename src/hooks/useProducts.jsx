import { useQuery } from "@tanstack/react-query";

const useProducts = () => {

    const { data: products = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const url = 'https://zaynax-task-server.vercel.app/products';
            const result = await fetch(url);
            return result.json();
        }
    })

    return [products, loading, refetch];
};

export default useProducts;