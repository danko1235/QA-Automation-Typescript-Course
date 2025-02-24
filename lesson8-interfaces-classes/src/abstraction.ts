interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

abstract class DataTransformer<InputType, OutputType> {
    protected data: InputType;
    public constructor(data: InputType) {
        this.data = data;
    }
    public abstract transform(): OutputType;
}

class TodoSummary extends DataTransformer<Todo[], { id: number; summary: string }[]> {
    public transform(): { id: number; summary: string }[] {
        return this.data.map(todo => ({
            id: todo.id,
            summary: `${todo.title} - ${todo.completed ? 'Done' : 'Pending'}`
        }));
    }
}

export { Todo, TodoSummary };

const todos: Todo[] = [
    {
        userId: 1,
        id: 1,
        title: 'Danko User',
        completed: false
    },
    {
        userId: 2,
        id: 2,
        title: 'Danko Admin',
        completed: true
    }
];

const todoSummary = new TodoSummary(todos);
console.log(todoSummary.transform());
