import { Component } from '@angular/core';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css']
})

export class FormBComponent {
  changeRadioDetails(eve : any){
    if(eve.target.value === 'email1'){
      document.getElementById("emailContainerForRadio")?.classList.remove("d-none");
      document.getElementById("phoneContainerForRadio")?.classList.add('d-none');
    }else if(eve.target.value === 'phone1'){
      document.getElementById("phoneContainerForRadio")?.classList.remove('d-none');
      document.getElementById("emailContainerForRadio")?.classList.add("d-none");
    }
  }
}
