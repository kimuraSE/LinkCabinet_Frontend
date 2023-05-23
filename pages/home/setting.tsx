import Footer from "@/components/footer/_footer";
import CredentialHeader from "@/components/header/_credentialHeader";
import { useState } from "react";

const SettingsPage = () => {
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted:", name);
  };

  return (
    <div>
    <CredentialHeader />
    <div className="bg-gray-100 min-h-screen">
      <div className="py-12">
        <div className="max-w-md mx-auto bg-white rounded shadow p-6">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                >
                Save
              </button>
            </div>
          </form>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                >
                Save
              </button>
            </div>
          </form>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                >
                Save
              </button>
            </div>
          </form>


        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default SettingsPage;
