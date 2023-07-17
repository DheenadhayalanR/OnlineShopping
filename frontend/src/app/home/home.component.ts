import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  lists:any=[];

  constructor(private service:DataService ) {
    
   }

  ngOnInit()  {
    this.readdata();
  }

  readdata(){
    this.service.getData().subscribe(data =>{
      this.lists=data;
      console.log(this.lists)
    })
  }


}
