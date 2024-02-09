import { useQuery } from "@tanstack/react-query";

const usePromoCodes = () => {

    const { data: promocodes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['promocodes'],
        queryFn: async () => {
            const url = 'https://zaynax-task-server.vercel.app/promocodes';
            const result = await fetch(url);
            return result.json();
        }
    })

    return [promocodes, loading, refetch];
};

export default usePromoCodes;