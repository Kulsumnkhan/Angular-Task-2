import { Component } from '@angular/core';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})

export class FormAComponent {
  changeDetails(eve : any){
    console.log(eve);
    if(eve.target.value === 'email'){
      document.getElementById("emailContainer")?.classList.remove("d-none");
      document.getElementById("phoneContainer")?.classList.add('d-none');
    }else if(eve.target.value === 'phone'){
      document.getElementById("phoneContainer")?.classList.remove('d-none');
      document.getElementById("emailContainer")?.classList.add("d-none");
    }else{
      document.getElementById("phoneContainer")?.classList.add('d-none');
      document.getElementById("emailContainer")?.classList.add("d-none");
    }
  }
}
