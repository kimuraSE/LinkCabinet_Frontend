import Footer from "@/components/footer/_footer";
import CredentialHeader from "@/components/header/_credentialHeader";
import { LinkItem } from "@/components/link/LinkItem";
import { useMutateLink } from "@/hooks/useMutateLink";
import { useQueryLinks } from "@/hooks/useQueryLinks";
import useStore from "@/store";
import { FormEvent } from "react";

const Home = () => {
  const { editedLink } = useStore();
  const updateLink = useStore((state) => state.updateEditedLink);
  const { data, isLoading } = useQueryLinks();
  const { createLinkMutation, updateLinkMutation } = useMutateLink();

  const submitLinkHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedLink.id === 0) {
      createLinkMutation.mutate({
        title: editedLink.title,
        url: editedLink.url,
      });
    } else {
      updateLinkMutation.mutate(editedLink);
    }
  };

  return (
    <div>
      <CredentialHeader />
      
      <main className="min-h-screen bg-gray-100">
      <div className="p-4  rounded-lg">
        <form onSubmit={submitLinkHandler}>
      <div className="relative mb-4">
        <label htmlFor="title" className="absolute top-0 left-0 ml-2 -mt-2 text-gray-600">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full p-2 pl-8 text-gray-800 rounded-t-md bg-transparent border-l border-r border-b border-gray-300 focus:outline-none focus:border-blue-500"
          value={editedLink.title}
              onChange={(e) =>
                updateLink({
                  ...editedLink,
                  title: e.target.value,
                })}
        />
      </div>

      <div className="relative mb-4 flex">
        <label htmlFor="url" className="absolute top-0 left-0 ml-2 -mt-2 text-gray-600">
          URL
        </label>
        <input
          type="text"
          id="url"
          className="w-full p-2 pl-8 text-gray-800 rounded-t-md bg-transparent border-l border-r border-b border-gray-300 focus:outline-none focus:border-blue-500"
          value={editedLink.url}
              onChange={(e) =>
                updateLink({
                  ...editedLink,
                  url: e.target.value,
                })
              }
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        {editedLink.id === 0 ? "追加" : "更新"} 
      </button>
      </form>
    
    {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data?.map((link) => (
              <LinkItem
                key={link.id}
                id={link.id}
                title={link.title}
                url={link.url}
              />
            ))}
          </ul>
        )} 
        </div>
        </main>

      

      <Footer />
    </div>
  );
};

export default Home;
