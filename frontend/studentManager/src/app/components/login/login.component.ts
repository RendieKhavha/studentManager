import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formgroup!: FormGroup;
  loading = false;
  submitted = false;

  user: any;
  password:string = "";
  email: string ="";
  usertype: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    //this.login();
    this.formgroup = new FormGroup({ 
      email: new FormControl("email"),
      password: new FormControl("password")
    });
  }


  onSubmit(data: any){
    var user = {
      
      email:data.email,
      password:data.password,
    
    };

    this.userService.login(user).subscribe(res =>{
      console.log(user)
    })


    switch (this.usertype) {

      case 1:
          console.log("It is a Monday.");
          break;
      case 2:
          console.log("It is a Tuesday.");
          break;    
      default: // redirect to home
          console.log("No such day exists!");
          break;
    
        }
  }
}
