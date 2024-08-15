import { Component } from '@angular/core';
import { ApiCaclothesService } from '../api-caclothes.service';
import { log } from 'console';
import { Ipernds } from '../ipernds';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
constructor(private _ApiCaclothesService:ApiCaclothesService){

}

pernds:Ipernds[]=[]
ngOnInit(): void {
this._ApiCaclothesService.gatApi().subscribe({
  next:(res)=>{

    this.pernds = res
    // console.log(res)
    
  },
  error:(err)=>{
    console.log(err);
    
  }
})
  
}
}
