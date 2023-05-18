import axios from "axios"
import { useErrors } from "./useErrors"
import { LinkType } from "@/types"
import { useQuery } from "react-query"


export const useQueryLinks = () => {
    const { switchErrorHandling } = useErrors()
    const getLinks = async () => {
        const { data } = await axios.get<LinkType[]>("http://localhost:8080/top",
        { withCredentials: true }
        )
        return data
    }

    return useQuery<LinkType[],Error>({
        queryKey: ["links"],
        queryFn: getLinks,
        staleTime: Infinity,
        onError: (error: any) => {
            if(error.response.data.message){
                switchErrorHandling(error.response.data.message)
            }else{
                switchErrorHandling(error.response.data)
            }
        }
    })
}