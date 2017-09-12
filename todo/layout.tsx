import { h } from "neweb";
export default ({ onAdd, todos }: {
    onAdd: (text: string) => any;
    todos: string[];
}) => {
    return <section className="todoapp">
        <header className="header">
            <h1>todos</h1>
            <input
                onChange={(e) => onAdd(e.target.value)}
                className="new-todo" placeholder="What needs to be done?"
                autofocus={true} />
        </header>
        <section className="main" style={{ display: "block" }}>
            <input className="toggle-all" type="checkbox" />
            <label for="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {todos.map((todo) => {
                    return <li data-id="1505240074025" className="">
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>{todo}</label>
                            <button className="destroy"></button></div>
                    </li>;
                })}
            </ul>
        </section>
    </section>;
};
