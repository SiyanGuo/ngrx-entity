import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export const login = createAction(
    "[Login Page] User Login", //type
    props<{user: User}>() //payload
)

export const logout = createAction(
    "[Top Menu] Logout" //doesn't need payload
)