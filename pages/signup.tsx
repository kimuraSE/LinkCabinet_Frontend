
import Footer from "@/components/footer/_footer"
import Header from "@/components/header/_header"
import { useMutateAuth } from "@/hooks/useMutateAuth";


import { FormEvent, useState } from "react";

    const Login = () => {

        const [name,setName]=useState('')
        const [email, setEmail] = useState('')
        const [pwd, setPwd] = useState('')
        const { registerMutation } = useMutateAuth()

        const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            registerMutation.mutate({
                name:name,
                email: email,
                password: pwd
            })  
          };

    return (
        <div>
            <Header />

            <main>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">SignUp</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter your password"
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700"
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
            </main>

            <Footer />
        </div>
    )

    }

    export default Login;