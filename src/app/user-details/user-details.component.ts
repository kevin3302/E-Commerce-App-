import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users;
  constructor(private ar:ActivatedRoute, private fkds:FakedataService) { }

  ngOnInit(): void {
    //get id from url
    let id = this.ar.snapshot.params.id;

    this.fkds.getUsersByID(id).subscribe(
      usersData => {
        this.users = usersData;
      },
      err => {
        console.log("err in getting users data", err);
      }
    )
  }

}
