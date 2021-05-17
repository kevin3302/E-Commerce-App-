import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  mySubscription : Subscription;
  users;
  constructor(private fkds : FakedataService, private router : Router) { }

  ngOnInit(): void {
    this.mySubscription = this.fkds.getUsers().subscribe(
      userData => {
        this.users = userData;
      },
      err => {
        console.log("err in getting users data ", err);
      }
    )
  }

  onSelectID(id){
      this.router.navigateByUrl('userdetails/'+ id);
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

}
