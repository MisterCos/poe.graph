import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Trade',
        icon: 'pi pi-dollar',
        routerLink: '/trade'
      },
      {
        label: 'Graph',
        icon: 'pi pi-chart-bar',
        items: [
          { label: 'Currency', icon: 'pi pi-dollar' },
          { label: 'Items', icon: 'pi pi-circle-on' },
          { label: 'Maps', icon: 'pi pi-globe' },
          { label: 'Jewels', icon: 'pi pi-fw pi-refresh' },
        ]
      },
      {
        label: 'Lists',
        icon: 'pi pi-list',
        items: [
          { label: 'Items', icon: 'pi pi-circle-on', routerLink: '/list' },
          { label: 'Maps', icon: 'pi pi-globe' },
          { label: 'Jewels', icon: 'pi pi-fw pi-refresh' },
        ]
      },
      
    ];
    this.activeItem = this.items[0];
  }
}


