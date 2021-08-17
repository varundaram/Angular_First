import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruitInput = '';
  fruits: any;
  constructor() { }

  ngOnInit(): void {}
  onAddFruit() {

    if(this.fruitInput)
    
    this.fruits.push(this.fruitInput);

}
}