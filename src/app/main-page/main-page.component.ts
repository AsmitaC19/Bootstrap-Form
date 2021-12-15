import { Component,OnInit,TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit 
{
  modalRef?:BsModalRef;
  constructor(private modalService:BsModalService)
  {

  }

  openModal(template:TemplateRef<any>)
  {
    this.modalRef=this.modalService.show(template);
  }

  ngOnInit():void{

  }

}
