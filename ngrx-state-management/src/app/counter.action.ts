import { createAction } from "@ngrx/store"

export const increment = createAction(
    "[add] Increment"
)

export const decrement = createAction(
    "[add] Decrement"
)

export const reset = createAction(
    "[add] Reset"
)