import { Todo } from './type';

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

export { TodoSummary };
