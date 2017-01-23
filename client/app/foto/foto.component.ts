import {Component, Input} from '@angular/core';

@Component({
    // Para buscar o templateURL na mesma pasta que ele está basta colocar a propriedade
    // moduleId 
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {

    @Input() titulo: string;
    @Input() url: string;
    descricao: string;

}