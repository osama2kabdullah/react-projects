import { useQuery, useQueryClient } from "react-query";

const useLoadallData = (link) => {
    const queryClient = useQueryClient();
    const {data} = useQuery(['alldata', link], ()=>fetch(link).then(res=>res.json()));
    return data;
};

export default useLoadallData;