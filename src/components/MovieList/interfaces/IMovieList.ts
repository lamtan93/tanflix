import { ICard } from "../../Card/interfaces/ICard";
export interface IMovieList {
 movieList: ICard[],
 onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
 searchValue: string,
};