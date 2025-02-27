import { Todo } from './type';
import { TodoSummary } from './abstraction';

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

const mySummary = new TodoSummary(todos);
console.log('My Todos:', mySummary.transform());

async function fetchTodos(): Promise<Todo[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=2');
    const data: Todo[] = await response.json();
    return data;
}

(async () => {
    try {
        const fetchedTodos = await fetchTodos();
        console.log('Fetched Todos:', fetchedTodos);

        const apiSummary = new TodoSummary(fetchedTodos);
        console.log('Transformed Fetched Todos:', apiSummary.transform());
    } catch (error) {
        console.error('Error fetching data:', error);
    }
})();
