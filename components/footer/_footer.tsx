import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 px-4 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="mb-4 text-white">LinkCabinet</h4>
            <p>
            すべてのリンクを簡単に管理するシンプルなリンク管理ツールです。<br />
            あなたにとって最も重要なリンクを保存し、簡単に管理できます。
            </p>
          </div>
          <div className="w-full md:w-1/3 md:px-8 mb-4 md:mb-0">
            <h4 className="mb-4 text-white">リンク</h4>
            <ul className="list-none">
              <li>
                <Link href="#" className="text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                SignUp
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="mb-4 text-white">コンタクト</h4>
            <p>
              お問い合わせやサポートが必要な場合は、こちらからご連絡ください。
            </p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center text-white">
            © 2023 LinkCabinet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
