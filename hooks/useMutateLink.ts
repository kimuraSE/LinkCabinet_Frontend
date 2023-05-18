import useStore from "@/store"
import { useMutation, useQueryClient } from "react-query"
import { useErrors } from "./useErrors"
import { LinkType } from "@/types"
import axios from "axios"


export const useMutateLink = () => {
    const queryClient = useQueryClient()
    const {switchErrorHandling} = useErrors()
    const resetEditedLink = useStore((state) => state.resetEditedLink)

    const createLinkMutation = useMutation(
        (link:Omit<LinkType,"id" | "created_at">) =>
        axios.post<LinkType>("http://localhost:8080/top",link),
        {
            onSuccess: (res:any) => {
                const previousLinks=queryClient.getQueryData<LinkType[]>(['links'])
                if(previousLinks){
                    queryClient.setQueryData(['links'],[...previousLinks,res.data])
                }
                resetEditedLink()
            },
            onError: (error: any) => {
                if(error.response.data.message){
                    switchErrorHandling(error.response.data.message)
                }else{
                    switchErrorHandling(error.response.data)
                }
            }
        }
    )

    const updateLinkMutation = useMutation(
        (link: Omit<LinkType,"created_at">) =>
        axios.put<LinkType>(`http://localhost:8080/top/${link.id}`,{
            title: link.title,
            url: link.url,
        }),
        {
            onSuccess: (res:any,variables) => {
                const previousLinks=queryClient.getQueryData<LinkType[]>(['links'])
                if(previousLinks){
                    queryClient.setQueryData(['links'],previousLinks.map((link) => link.id === variables.id ? res.data : link))
                }
                resetEditedLink()
            },
            onError: (error: any) => {
                if(error.response.data.message){
                    switchErrorHandling(error.response.data.message)
                }else{
                    switchErrorHandling(error.response.data)
                }
            }
        }
    )
    
    const deleteLinkMutation = useMutation(
        (id: number) => axios.delete(`http://localhost:8080/top/${id}`),
        {
            onSuccess: (_,variables) => {
                const previousLinks=queryClient.getQueryData<LinkType[]>(['links'])
                if(previousLinks){
                    queryClient.setQueryData(['links'],previousLinks.filter((link) => link.id !== variables))
                }
                resetEditedLink()
            },
            onError: (error: any) => {
                if(error.response.data.message){
                    switchErrorHandling(error.response.data.message)
                }else{
                    switchErrorHandling(error.response.data)
                }
            }

        }
    )


    return {createLinkMutation,updateLinkMutation,deleteLinkMutation}

}
