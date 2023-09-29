// import { createContext, useContext, useState } from "react";
//
// const Context = createContext();
//
// export const PlayProvider = ({ children }) => {
//   const [playGame, setPlayGame] = useState(false);
//   const [end, setEnd] = useState(false);
//   const [hasScroll, setHasScroll] = useState(false);
//
//
//   return (
//     <Context.Provider
//       value={{
//         playGame,
//         setPlayGame,
//         end,
//         setEnd,
//         hasScroll,
//         setHasScroll,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// };
//
// export const usePlay = () => {
//   const context = useContext(Context);
//
//   if (context === undefined) {
//     throw new Error("usePlay must be used within a PlayProvider");
//   }
//
//   return context;
// };
import { createContext, useContext, useState } from "react";

const Context = createContext();

export const PlayProvider = ({ children }) => {
    const [playGame, setPlayGame] = useState(false);
    const [end, setEnd] = useState(false);
    const [hasScroll, setHasScroll] = useState(false);
    const [isSoundPlaying, setIsSoundPlaying] = useState(false); // Dodajemy stan dźwięku

    return (
        <Context.Provider
            value={{
                playGame,
                setPlayGame,
                end,
                setEnd,
                hasScroll,
                setHasScroll,
                isSoundPlaying, // Dodajemy stan dźwięku do dostępu w komponentach
                setIsSoundPlaying, // Dodajemy funkcję ustawiającą stan dźwięku
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const usePlay = () => {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error("usePlay must be used within a PlayProvider");
    }

    return context;
};
