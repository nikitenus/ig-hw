import { UserType } from '../HW8'

type ActionType =
	| { type: 'sort'; payload: 'up' | 'down' }
	| { type: 'check'; payload: number }

export const homeWorkReducer = (
	state: UserType[],
	action: ActionType
): UserType[] => {
	// need to fix any
	switch (action.type) {
		case 'sort': {
			// by name
			return [...state].sort((a, b) =>
				action.payload === 'down' ? a.age - b.age : b.age - a.age
			)
		}
		case 'check': {
			return state.filter(el => el.age >= action.payload)
		}
		default:
			return state
	}
}
