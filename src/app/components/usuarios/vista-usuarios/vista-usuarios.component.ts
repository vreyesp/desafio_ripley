import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vista-usuarios',
  templateUrl: './vista-usuarios.component.html',
  styleUrls: ['./vista-usuarios.component.css'],
  providers: [UserService]

})
export class VistaUsuariosComponent implements OnInit {
  dataSource;
  dataFinal;

  displayedColumns;

  constructor(private _userService: UserService) {
    this.getData();
    
    this.displayedColumns = ["name", "email", "city", "phone"];

  }

  ngOnInit(): void {
  }

  getData() {

    this._userService.getTabla().subscribe(res => {
      console.log('res', res);

      this.dataFinal = res;
      

    }, error => {
      console.log(error)
    })
  }


}
