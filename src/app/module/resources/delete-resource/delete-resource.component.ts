import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../core/modal/modal.component';
import { ResourcesService } from '../service/resources.service';

@Component({
  selector: 'app-delete-resource',
  templateUrl: './delete-resource.component.html',
  styleUrls: ['./delete-resource.component.scss']
})
export class DeleteResourceComponent implements OnInit {
  id : number;
  constructor(private route: ActivatedRoute,
    private resourceService: ResourcesService ,
    private router: Router,
    private modalService : NgbModal) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    const modalRef: NgbModalRef = this.modalService.open(ModalComponent);
    const componentInstance : ModalComponent = modalRef.componentInstance;
    componentInstance.confirmMessage = "Etes vous sur de vouloir supprimer la ressource ?";
    componentInstance.confirmResponse.subscribe((b: boolean) => {
      if(b == true){
        this.resourceService.DeleteResource(this.id);
      }
      this.router.navigate(['ressource']);
      modalRef.close();
    })
  }
}
