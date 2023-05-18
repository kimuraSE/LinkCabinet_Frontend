import { useMutateLink } from "@/hooks/useMutateLink";
import useStore from "@/store";
import { LinkType } from "@/types";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

import { FC, memo } from "react";

const LinkItemMemo:FC<Omit<LinkType,'created_at'>> = ({ id,title, url }) => {
    const updateLink = useStore(state => state.updateEditedLink)
    const {deleteLinkMutation}=useMutateLink()


    return(
        <li className="border-b border-gray-300 flex items-center justify-between px-4 py-4 hover:bg-gray-100">
             
                <span>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                    </a>
                </span>
                <div className="flex gap-4">
                    <PencilIcon
                    className="h-5 w-5 text-gray-500 cursor-pointer"
                    onClick={() => {updateLink({
                        id:id,
                        title:title,
                        url:url
                    })
                    }}
                    />
                    <TrashIcon
                    className="h-5 w-5 text-gray-500 cursor-pointer"
                    onClick={() => {
                        deleteLinkMutation.mutate(id)
                    }}
                    />
                </div>
            
        </li>
            

    )
}


export const LinkItem = memo(LinkItemMemo);
