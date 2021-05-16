import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  mySubscription1:Subscription;
  mySubscription2:Subscription;

  mycolors;
  Users;

  // Inject Object
  constructor(private fsobj:FakedataService) { }

  ngOnInit(): void {
    this.mySubscription1 = this.fsobj.getColors().subscribe(
      colorsData => {
        this.mycolors = colorsData;
      },
      err=> {
        console.log("Error in getting colors data ", err);
      }
    ),

    this.mySubscription2 = this.fsobj.getUser().subscribe(
      userData => {
        this.Users = userData;
      },
      err => {
        console.log("Error in getting user Data", err);
      }
    )
  }

  ngOnDestroy(): void{
    this.mySubscription1.unsubscribe();
    this.mySubscription2.unsubscribe();
  }


}
