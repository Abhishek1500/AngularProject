import { createReducer,on } from "@ngrx/store";
import { AddBook,RemoveBook,AddBookSuccess,AddBookFailure } from "./book.actions";
import { Book } from "../models/book";

//need to be provided
export const initialState:Book[]=[];

export const BookReducer=createReducer(
    initialState,
    //here as you can see that we are not changing the present state we are just creating new obj coping it and returning that
    on(AddBook,(state)=>state),
    on(AddBookSuccess,(state,{id,title,author})=>[...state,{id,title,author}]),
    on(AddBookFailure,(state,{error})=>{
        console.log(error);
        return state;
    }),
    on(RemoveBook,(state,{bookId})=>state.filter(book=>book.id!==bookId))
);