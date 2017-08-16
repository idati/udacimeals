import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar} from '../actions'
import { capitalize } from '../utils/helper'
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'

class App extends Component {
	render() {
		const { calendar, remove } = this.props
		const mealOrder = ['breackfast', 'linch', 'dinner']
		console.log('Props', this.props)
		// console.log(this.props.calendar[0].day)
		return (
			<div className='container'>
				<ul className='meal-types'>
					{mealOrder.map((mealType) => (
						<li key = {mealType} className='subheader'>
						</li>
						))}
				</ul>
			</div>
			)
	}
}

function mapStateToProps({food, calendar}) {
	const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

	return {
		calendar: dayOrder.map((day) => ({
			day,
			meals: Object.keys(calendar[day]).reduce((meals,meal) => {
				meals[meal] = calendar[day][meal]
				? food[calendar[day][meal]]
				: null

			return meals
			}, {})
		})),
	}
}

function mapDispatchToProps(dispatch){
	return{
		selectRecipe: (data) => dispatch(addRecipe(data)),
		remove: (data) => dispatch(removeFromCalendar(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)