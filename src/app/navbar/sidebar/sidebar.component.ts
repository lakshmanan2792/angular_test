import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  list: any;

  constructor(public router: Router) {

  }

  ngOnInit(){
     this.list = [
      {
        id: 1, data: 'All'
      },
      {
       id: 2, data: 'Financial'
      },
      {
        id: 3,  data: 'Technical'
      },
      {
        id: 4, data: 'Marketing'
      },
      {
        id: 5, data: 'Human Resources'
      }
     ]
  }


  docs(data: any) {
    let id  = data.id;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([`/home/${id}`]);
  });
  }
}
