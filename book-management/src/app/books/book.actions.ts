import { createAction,props } from "@ngrx/store";
import { Book } from "../models/book";

//creating the actions
//props are like extra property for actions can consider as request in handler the type of other class type
export const AddBook=createAction("[Book] Add Book",props<Book>());
export const AddBookSuccess=createAction("[Book] Add Book Successfully",props<Book>())

export const AddBookFailure=createAction("[Book] Add Book Failed",props<{error:any}>())


export const RemoveBook=createAction("[Book] Remove Book",props<{bookId:string}>());

//these actions will be processed by reducers
