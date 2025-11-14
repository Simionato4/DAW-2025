import { use } from "react";
import MoveiContext from "../context/movie-context";

export function useMovies() {
    const context = use(MoveiContext);
    return context;
}