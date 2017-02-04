import { Injectable } from '@angular/core';

@Injectable()
export class ChatService { 
    loggger(){
        console.log("You have run the service.");
    }
}