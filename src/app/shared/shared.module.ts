import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardTarefaComponent } from './card-tarefa/card-tarefa.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    CardTarefaComponent,
    InputComponent
  ],
  exports: [
    CardTarefaComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
