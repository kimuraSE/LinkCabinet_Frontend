import { create } from "zustand"

type EditedLink = {
    id : number,
    title : string,
    url : string,
}

type State ={
    editedLink : EditedLink,
    updateEditedLink : (payload : EditedLink) => void,
    resetEditedLink : () => void,
}

const useStore = create<State>((set) => ({
    editedLink : { id : 0, title : "", url : "" },
    updateEditedLink : (payload) => set({ editedLink : payload }),
    resetEditedLink : () => set({ editedLink : { id : 0, title : "", url : "" } }),
}))

export default useStore