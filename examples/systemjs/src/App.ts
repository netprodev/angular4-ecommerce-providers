
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {EcommerceProvider} from 'angular4-ecommerce-providers';


@Component({
    selector: 'app',
    providers: [EcommerceProvider],
    template: `<div></div>`
})
export class App {

}

bootstrap(App);
