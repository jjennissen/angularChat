import { Component } from '@angular/core';

import { ChatService } from './chat/chat.service';

@Component({
    selector: 'main-app',
    template: `
        <chat></chat>
    `,
    providers: [ChatService]
})
export class AppComponent { }
