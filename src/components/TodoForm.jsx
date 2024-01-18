import { useState } from 'react'
const TodoForm = () => {
	const [text, setText] = useState('')
	const handlSubmit = (e) => {
		e.preventDefault()
		console.log(text)

		setText('')
	}
	return (
		<div>
			<h1>Todo List</h1>
			<input
				type="text"
				placeholder="Enter a Todo..."
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button type="submit" onClick={handlSubmit}>
				submit
			</button>
		</div>
	)
}

export default TodoForm
