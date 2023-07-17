import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  
  // product_img:any=File;
  selectedImg: any= File;
  imageUrl: string = "";


  public formData : any = {
    product_img:this.selectedImg,    
    product_name: '' ,
    product_price: '',
    product_description: ''
  };
 

  constructor(private service:DataService) { }

  ngOnInit() {}

 



  onImageSelected(event:any){
    this.selectedImg = event.target?.files[0];
  }
  

// form input method
  createProduct() {
    const data= new FormData();
    console.log(this.selectedImg, 'selectedimage')
    data.append('image', 'ummmmaaaaa');
    console.log(data, 'formData')
    this.service.saveUser({
      ...this.formData,
      product_img: data
    }).subscribe((response: any) => {

        console.log(response)
    });

// clear theform input box 
    this.formData={
      product_img:null,
      product_name: '' , 
      product_price: null,
      product_description: ''
  };
    
  }

}
