import { useMutateAuth } from "@/hooks/useMutateAuth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";



const CredentialHeader = () => {
    const {logoutMutation} =useMutateAuth()
    const queryClient = useQueryClient()
    const router = useRouter()

    const logout = async() => {
        await logoutMutation.mutateAsync()
        queryClient.removeQueries(['links'])
    }

    const Setting = (e:React.FormEvent) => {
      e.preventDefault();
      router.push("/home/setting")
    }


    return (
      <header className="bg-blue-500 text-white py-4 px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <h1 className="text-xl font-bold"><Link href={"/"}>LinkCabinet</Link></h1>
        </div>
        <div>
          <button onClick={logout} className="mr-4">
            Logout
          </button>
          <button onClick={Setting}>
            設定
          </button>
        </div>
      </header>
    );
  };
  
  export default CredentialHeader;