import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'login',
    templateUrl: './login.Component.html'
})

export class LoginComponent implements OnInit {

    public title: string;

    constructor() {
        this.title = 'Entrar';
    }

    ngOnInit(): void {
        console.log('Componente carregado...');
    }
}
