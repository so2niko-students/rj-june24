export class Model {
    URL = 'https://jsonplaceholder.typicode.com/users';
    data = [];

    loadUsers(callback) {
        fetch(this.URL).then(r => r.json()).then(d => {
            this.data = d;
            callback();
        });
    }
}