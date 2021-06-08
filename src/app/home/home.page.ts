import { Component } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';//ALEX--------

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lista: any = [];
  //alteração da sincronização 1
  //alteração da sincronização 22222

  constructor(public http: HttpClient) { 
      this.escreveDados();
   } 

  escreveDados(){
       this.http.get("https://petshopkta.000webhostapp.com/ionic/jsonLeitura000.php").subscribe( data => {
        this.lista = data;
        //console.log(data); 
        } )
  }

}


