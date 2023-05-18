
import Footer from "@/components/footer/_footer"
import Header from "@/components/header/_header"
import ThreeBackground from "@/libs/three/_threeBackground";
import { useRouter } from "next/router";
import { useSpring, animated } from 'react-spring';


export default function Home() {

  const router = useRouter();

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  const handleStart = () => {
    router.push("/signup");
  };
  
  return (
    
    

    <div>
      <Header />
      <ThreeBackground />
      <main className="min-h-screen flex justify-center items-center relative">
        <animated.div style={fade} className="text-center">
          <h1 className="text-4xl font-bold mb-4">LinkCabinet</h1>
          <p className="text-lg text-gray-600">
          "スマートなリンク管理で時間と手間を節約"
          </p>
          <button
            onClick={handleStart}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
          >
            始める！
          </button>
        </animated.div>
      </main>
      <Footer />
    </div>

   
  

  )
}
