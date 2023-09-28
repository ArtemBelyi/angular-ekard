import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  readonly menuList: Array<string> = ["Help", "Exchange & Returns", "Order Tracker", "SignUp / Login"];
}
