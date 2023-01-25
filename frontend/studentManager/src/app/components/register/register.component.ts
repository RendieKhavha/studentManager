import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent {

  formgroup!: FormGroup;
  loading = false;
  submitted = false;

  user: any;
  firstname:string="";
  lastname:string="";
  email: string ="";
  password:string = "";
  confirmpassword:string="";


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    //this.login();
    this.formgroup = new FormGroup({ 
      firstname : new FormControl("firstname"),
      lastname : new FormControl("lastname"),
      email: new FormControl("email"),
      password: new FormControl("password"),
      confirmpasswordpassword: new FormControl("confirmpassword")
    });
  }


  onSubmit(data: any){
    var user = {
      firstname:data.firstname,
      lastname:data.lastname,
      email:data.email,
      password:data.password,
      confirmpassword:data.confirmpassword
    
    };

    this.userService.login(user).subscribe(res =>{
      console.log(user)
    })
  }
}
