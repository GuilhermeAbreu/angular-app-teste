import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ITarefa } from 'src/app/shared/interface/tarefa.interface';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.scss']
})
export class ReduxComponent {

  public formControlInputTarefas: FormControl = new FormControl(null, [Validators.nullValidator, Validators.required])
  public tarefas: ITarefa[] = [{
    id: 'teste1',
    nome: 'Teste',
    isConcluido: false,
  }]

  public salvarTarefa(): void {
    if (this.formControlInputTarefas.valid) {
      this.tarefas.push({
        id: 'teste2',
        nome: this.formControlInputTarefas.value,
        isConcluido: false,
      })
      this.formControlInputTarefas.reset()
    }
  }

  public isInputValido(): boolean {
    return this.formControlInputTarefas.valid;
  }

}
