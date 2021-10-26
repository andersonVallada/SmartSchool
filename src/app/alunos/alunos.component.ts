import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  title = 'Alunos'

  alunos = [
    "Marta",
    "Paula",
    "Laura",
    "Luiza",
    "Lucas",
    "Pedro",
    "Paulo",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
