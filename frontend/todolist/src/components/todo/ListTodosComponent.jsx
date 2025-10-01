

export default function ListTodosComponent() {
    const today = new Date();
    const targetDate = new Date(
        today.getFullYear() + 12,
        today.getMonth(),
        today.getDate() // ✅ fixed: use date, not day of week
    );

    const todos = [
        { id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
        { id: 2, description: 'Learn Spring Boot', done: false, targetDate: targetDate },
        { id: 3, description: 'Learn React', done: false, targetDate: targetDate },
        { id: 4, description: 'Learn Docker', done: false, targetDate: targetDate }
    ];

    return (
        <div className="container">
            <h1>Things You Want to Do</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Is Done</th>
                        <th>Target Date</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td> {/* ✅ show true/false properly */}
                            <td>{todo.targetDate.toDateString()}</td> {/* ✅ call function */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
