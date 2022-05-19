import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/entities/resource';
import { ResourcesService } from '../service/resources.service';
import { ModalComponent } from '../../core/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-resource',
  templateUrl: './list-resource.component.html',
  styleUrls: ['./list-resource.component.scss']
})
export class ListResourceComponent implements OnInit {
  public resources: Resource[];

  constructor(private ResourceService : ResourcesService,
            private _modalService : NgbModal) {  }

  ngOnInit(): void {
    this.resources = this.ResourceService.GetAllResources();
    
  }



}
