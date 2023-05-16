import axios from "axios";
import useStore from "@/store";
import { useRouter } from "next/router";
import { CsrfToken } from "@/types";

export const useErrors = () => {
    const router = useRouter()
    const resetEditedLink = useStore((state) => state.resetEditedLink)
    const getCsrfToken = async () => {
        const {data}=await axios.get<CsrfToken>(
            `http://localhost:8080/csrf`
        )
        axios.defaults.headers.common['X-CSRF-TOKEN']=data.csrf_token
    }
    const switchErrorHandling = (message:string) => {
        switch (message) {
            case 'invalid csrf token':
                getCsrfToken()
                alert('CSRF token is invalid, please try again')
                break
              case 'invalid or expired jwt':
                alert('access token expired, please login')
                resetEditedLink()
                router.push('/')
                break
              case 'missing or malformed jwt':
                alert('access token is not valid, please login')
                resetEditedLink()
                router.push('/')
                break
              case 'duplicated key not allowed':
                alert('email already exist, please use another one')
                break
              case 'crypto/bcrypt: hashedPassword is not the hash of the given password':
                alert('password is not correct')
                break
              case 'record not found':
                alert('email is not correct')
                break
              default:
                alert(message)
        }
    }

    return { switchErrorHandling }


}
    
    