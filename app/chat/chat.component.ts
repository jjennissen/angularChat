import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
    selector: 'chat',
    moduleId: module.id,
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.css']
})
export class ChatComponent { 
    constructor(private _chatService: ChatService) {

    }   
    buttonClick(): void  {
        console.log('Button pressed');
        this._chatService.loggger();
    }

}

