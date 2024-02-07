import { useQuery } from "@tanstack/react-query";

const usePromoCodes = () => {

    const { data: promocodes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['promocodes'],
        queryFn: async () => {
            const url = 'http://localhost:5000/promocodes';
            const result = await fetch(url);
            return result.json();
        }
    })

    return [promocodes, loading, refetch];
};

export default usePromoCodes;