import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.component.html',
  styleUrls: ['./lembretes.component.scss']
})
export class LembretesComponent {

  public todos: any = [];


  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.gettodos();
  }

  gettodos() {
    this.http.get('http://127.0.0.1:8000/api/todo').subscribe((data) => {
      this.todos = data;
    });
  }

  deletetodos(id:any) {
    this.http.delete('http://127.0.0.1:8000/api/todo/'+id).subscribe((data) => {
      console.log(data);
      this.gettodos();
    });
  }

  posttodos() {
    const data = {
      titulo: '',
      descricao: '',
      cor: '',
      finalizado: false
    };

    Swal.fire({
      title: 'Novo Lembrete',
      html:
        '<input id="swal-input1" class="swal2-input w-75" placeholder="Titulo">' +
        '<textarea id="swal-input2" class="swal2-input mt-3 w-75" placeholder="Descrição"> </textarea>' +
        '<input id="swal-input3" class="swal2-input w-50" placeholder="Cor" type="color">',
      focusConfirm: false,
      preConfirm: () => {
        data.titulo = (<HTMLInputElement>document.getElementById('swal-input1')).value;
        data.descricao = (<HTMLInputElement>document.getElementById('swal-input2')).value;
        data.cor = (<HTMLInputElement>document.getElementById('swal-input3')).value;
        this.http.post('http://127.0.0.1:8000/api/todo/', data).subscribe((data) => {
          this.gettodos();
        });
      }
    });
  }

  puttodos(id:any) {
    const data = {
      titulo: '',
      descricao: '',
      cor: '',
      finalizado: false
    };

    Swal.fire({
      title: 'Editar Lembrete',
      html:
        '<input id="swal-input1" class="swal2-input w-75" placeholder="Titulo">' +
        '<textarea id="swal-input2" class="swal2-input mt-3 w-75" placeholder="Descrição"> </textarea>' +
        '<input id="swal-input3" class="swal2-input w-50" placeholder="Cor" type="color">',
      focusConfirm: false,
      preConfirm: () => {
        data.titulo = (<HTMLInputElement>document.getElementById('swal-input1')).value;
        data.descricao = (<HTMLInputElement>document.getElementById('swal-input2')).value;
        data.cor = (<HTMLInputElement>document.getElementById('swal-input3')).value;
        this.http.put('http://127.0.0.1:8000/api/todo/'+id, data).subscribe((data) => {
          this.gettodos();
        });
      }
    });
  }

  //make to complete
  completetodos(id:any) {
    this.http.put('http://127.0.0.1:8000/api/todo/finalizado/'+id, {}).subscribe((data) => {
      this.gettodos();
    });
  }

}
