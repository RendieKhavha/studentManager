import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
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
  this.login();

}


  onSubmit(): void{
    //this.userService.getUser().subscribe(data =>{
      //alert(data.toString());
      //console.log(data)
    //})
  }

  login(): void{
    var val = {
      
      email:this.email,
      password:this.password,
      usertype: this.usertype
    };

    this.userService.createUser(val).subscribe(res =>{
      console.log(val)
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
