import { Component, Input } from '@angular/core';
import { ITarefa } from '../interface/tarefa.interface';

@Component({
  selector: 'app-card-tarefa',
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.scss']
})
export class CardTarefaComponent {

  @Input() tarefa!: ITarefa;

}
