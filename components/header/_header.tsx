import Link from "next/link";

const Header = () => {
    return (
      <header className="bg-blue-500 text-white py-4 px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          {/* <img src="/logo.png" alt="LinkCabinet Logo" className="h-8 w-8 mr-2" /> */}
          <h1 className="text-xl font-bold">LinkCabinet</h1>
        </div>
        <div>
          <Link href="/signup" className="text-white hover:text-gray-400 mr-4">
            SignUp
          </Link>
          <Link href="/login" className="text-white hover:text-gray-400">
            Login
          </Link>
        </div>
      </header>
    );
  };
  
  export default Header;