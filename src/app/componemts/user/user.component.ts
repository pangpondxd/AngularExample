import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service'
import { from } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private name: string;
  private age: number;
  private email: string;
  private isEditable:boolean = true;
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }
  private todoList: any =[]
  //array
  private skills: string[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.name = 'SnoopySongDev';
    this.age = 25;
    this.email = 'webmaster.tanawat@gmail.com';

    this.address = {
      street: 'Green House',
      city: 'Vichit',
      province: 'Phuket',
      postcode: '83000'
    };

    this.skills = ['Programming','Badminton'];
    this.todoService.getTodoList().subscribe((response) => {
      this.todoList = response;
    })
  }

    addSkill(skill){
      this.skills.unshift(skill);
      return false;
    }
    toggleEdit(){
      this.isEditable =! this.isEditable;
    }
    removeSkill(skill){
      this.skills.forEach((element, index) => {
        if(element == skill){
          this.skills.splice(index, 1);
        }
      });
    }

}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

