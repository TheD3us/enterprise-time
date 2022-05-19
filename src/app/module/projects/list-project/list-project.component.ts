import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Project } from 'src/app/entities/project';
import { ModalComponent } from '../../core/modal/modal.component';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {
  public project$ : Observable<Project[]>;
  private id : number;
  constructor(private projectService : ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService : NgbModal ) { }

  ngOnInit(): void {
  this.project$ = this.projectService.GetAllProjects();
  
  }

  public deleteProjet(id): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    const modalRef: NgbModalRef = this.modalService.open(ModalComponent);
    const componentInstance : ModalComponent = modalRef.componentInstance;
    componentInstance.confirmMessage = "Etes vous sur de vouloir supprimer le projet ?";
    componentInstance.confirmResponse.subscribe((b: boolean) => {
      if(b == true){
        this.projectService.DeleteResource(this.id);
      }
      this.router.navigate(['ressource']);
      modalRef.close();
    })
  }

}
