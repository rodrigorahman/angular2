import { Component } from '@angular/core';
import {FotoComponent} from "../foto/foto.component";
import {Http, Headers} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent{

    foto: FotoComponent = new FotoComponent();
    http: Http;
    constructor(http:Http){
        this.http = http;
    }

    cadastrar(event) {

        event.preventDefault();
        let headers = new Headers();
        headers.append("Content-type", "application/json");

        this.http.post('v1/fotos',
            JSON.stringify(this.foto),
            {headers: headers}
        ).subscribe(() => {
            console.log("Console salva com sucesso!");
            this.foto = new FotoComponent();
        }, erro => console.error(erro));

    }

}