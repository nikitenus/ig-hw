const initState = {
  themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): initStateType => { // fix any
  switch (action.type) {
    case "SET_THEME_ID":
      return {...state, themeId: action.id}
    default:
      return state
  }
}

export const changeThemeId = (id: number) => ({
  type: 'SET_THEME_ID',
  id
} as const) // fix any

export type changeThemeIdType = ReturnType<typeof changeThemeId>

export type initStateType = typeof initState