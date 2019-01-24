import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

registerUserDate = {}; 

  constructor(private _auth: AuthService, private router:Router) { }



  ngOnInit() {
  }


  registerUser(){


this._auth.registerUser(this.registerUserDate).subscribe(
   res => { 
     console.log(res)
    localStorage.setItem('token',res.token)
    this.router.navigate(['/special'])

   },
   err => console.log(err)
)

  }

}
