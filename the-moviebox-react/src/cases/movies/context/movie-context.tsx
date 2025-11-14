import { createContext, useState, type ReactNode } from "react";
import type { MovieDTO } from "../services/movie.service"

type MovieContextProviderProps = {
    selectedMovie: MovieDTO | null;
    setSelectedMovie: (movie: MovieDTO) => void;
}

const MoveiContext = createContext<MovieContextProviderProps | undefined>(undefined);

export function MovieContextProvider({
    children
}: {children: ReactNode}) {
    const [selectedMovie, setSelectedMovie] = useState<MovieDTO | null>(null);

    return (
        <MoveiContext.Provider value={{selectedMovie, setSelectedMovie}}>
            {children}
        </MoveiContext.Provider>
    )
}

export default MoveiContext