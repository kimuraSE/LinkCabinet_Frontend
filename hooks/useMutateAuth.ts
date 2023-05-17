import useStore from "@/store"
import { useRouter } from "next/router"
import { useErrors } from "./useErrors"
import { useMutation } from "react-query"
import axios from "axios"
import { loginCredential,registerCredential } from "@/types"


export const useMutateAuth = () => {
    const router = useRouter()
    const resetEditedLink = useStore((state) => state.resetEditedLink)
    const { switchErrorHandling } = useErrors()
    const loginMutation = useMutation(
        async (user: loginCredential) => 
            await axios.post("http://localhost:8080/login", user),
            {
                onSuccess: () => {
                    router.push("/home")
                },
                onError: (error: any) => {
                if(error.response.data.message){
                    switchErrorHandling(error.response.data.message)
                }else{
                    switchErrorHandling(error.response.data)
                }
                }
            },
    )

    const registerMutation = useMutation(
        async (user: registerCredential) => 
            await axios.post("http://localhost:8080/signup", user),
            {
                onSuccess: () => {
                    router.push("/home")
                },
                onError: (error: any) => {
                if(error.response.data.message){
                    switchErrorHandling(error.response.data.message)
                }else{
                    switchErrorHandling(error.response.data)
                }
                }
            },
        
    )

    const logoutMutation = useMutation(
        async () => await axios.post("http://localhost:8080/logout"),
        {
            onSuccess: () => {
                resetEditedLink()
                router.push("/")
            },
            onError: (error: any) => {
                if(error.response.data.message){
                    switchErrorHandling(error.response.data.message)
                }else{
                    switchErrorHandling(error.response.data)
                }
            },
        }
    )

    return { loginMutation, registerMutation, logoutMutation }
}