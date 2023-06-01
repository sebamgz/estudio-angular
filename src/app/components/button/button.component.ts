import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() texto: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();
  
  onClick(){
    this.btnClick.emit();
  }
}
