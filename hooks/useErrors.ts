import axios from "axios";
import useStore from "@/store";
import { useRouter } from "next/router";
import { CsrfToken } from "@/types";
import Swal from 'sweetalert2'

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
              case 'ERROR: duplicate key value violates unique constraint "users_email_key" (SQLSTATE 23505)':
                Swal.fire({
                  icon: 'error',
                  title: 'おっと...',
                  text: 'そのメールアドレスが既に登録されています',
                })
              break
              case 'crypto/bcrypt: hashedPassword is not the hash of the given password':
                Swal.fire(
                  'パスワードが見つかりません?',
                  'もう一度入力してください',
                  'question'
                )
                break
                case 'password: password is required.':
                  Swal.fire(
                    'パスワードを入力してください',
                    'もう一度入力してください',
                    'question'
                  )
                  break
              case 'record not found':
                Swal.fire(
                  'メールアドレスが見つかりません?',
                  'もう一度入力してください',
                  'question'
                )
                break
                case 'email: email is required.':
                  Swal.fire(
                    'メールアドレスを入力してください',
                    'もう一度入力してください',
                    'question'
                  )
                  break
              default:
                alert(message)
        }
    }

    return { switchErrorHandling }


}
    
    