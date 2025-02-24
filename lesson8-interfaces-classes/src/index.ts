import { Todo, TodoSummary } from './abstraction';

async function fetchTodos(): Promise<Todo[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=2');
    const data: Todo[] = await response.json();
    return data;
}

(async () => {
    try {
        const todos = await fetchTodos();
        console.log('Fetched Todos:', todos);

        const summary = new TodoSummary(todos);
        console.log('Transformed Todos:', summary.transform());
    } catch (error) {
        console.error('Error fetching data:', error);
    }
})();
