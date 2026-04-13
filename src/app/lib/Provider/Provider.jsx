import FriendProvider from "@/context/FriendContext";

const Provider = ({children}) => {
    return <FriendProvider>
        {children}
    </FriendProvider>
};

export default Provider;