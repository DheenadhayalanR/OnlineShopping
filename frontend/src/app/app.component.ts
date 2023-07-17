import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  lists: any =["home","login"]
  // items :any=''
  
  constructor(private router :Router) {
   
  }

  roufun(item:any){
      // const evn_text=(event.target as HTMLElement).textContent    
      if(item=='home'){
         this.router.navigate(['/home'])
      }
      else{
        this.router.navigate(['/profile'])
      }

  }

}

