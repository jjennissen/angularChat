import { Component } from '@angular/core';

@Component({
    selector: 'chat',
    moduleId: module.id,
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.css']
})
export class ChatComponent { 
    buttonClick(): void  {
        console.log('Button pressed');
    }
}

