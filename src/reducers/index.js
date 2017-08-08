import {
	ADD_RECIPE,
	REMOVE_FROM_CALENDAR
} from '../actions'




const initialCalendarState = {
	sunday: {
		breakfast: null,
		linch: null,
		dinner: null
	},
	monday: {
		breakfast: null,
		linch: null,
		dinner: null
	},
	tuesday: {
		breakfast: null,
		linch: null,
		dinner: null
	},
	wednesday: {
		breakfast: null,
		linch: null,
		dinner: null
	},
	thursday: {
		breakfast: null,
		linch: null,
		dinner: null
	},
		friday: {
		breakfast: null,
		linch: null,
		dinner: null
	},
	saturday: {
		breakfast: null,
		linch: null,
		dinner: null
	}
}

function calender (state = initialCalendarState, action){
	const {day, recipe, meal} = action

	switch(action.type){
		case ADD_RECIPE :
			return {
				...state,
				[day]: {
					...state[day],
					[meal]: recipe.label
				}
			}
		case REMOVE_FROM_CALENDAR :
			return {
				...state,
				[day]:{
					...state[day],
					[meal]: null
				}

			}
		default:
			return state
	}
}

export default calender