import { Model } from "./model.js";
import { View } from "./view.js";

export class Controller{
    index = 0;
    
    constructor(){
        // const onNextUser2 = function(){
        //     console.log('onNextUser', this);
        //     this.index += 1;
        //     this.view.render(this.model.data[this.index]);
        // }
        this.model = new Model();
        this.view = new View(() => this.onNextUser());

        this.model.loadUsers(this.onLoadUsers.bind(this));
    }

    onNextUser(){
        console.log('onNextUser', this);
        this.index += 1;
        this.view.render(this.model.data[this.index]);
    }

    onLoadUsers(){
        console.log('onLoadUsers', this.model.data);
        this.view.render(this.model.data[this.index]);
    }
}