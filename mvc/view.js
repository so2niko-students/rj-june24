export class View{
    constructor(callback){
        this.btn = document.querySelector('.btn-next');
        this.info = document.querySelector('.user-info');

        this.btn.addEventListener('click', callback);
    }

    render(data){
        console.log(this, data)
        this.info.innerHTML = `${data.name}: ${ data.email }`;
    }
}