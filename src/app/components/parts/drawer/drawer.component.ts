import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavigationDrawer } from 'mdui/components/navigation-drawer';
import type { List } from 'mdui/components/list.js';
import type { ListItem } from 'mdui/components/list-item.js';
import type { Collapse } from 'mdui/components/collapse'
import type { CollapseItem } from 'mdui/components/collapse-item'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  @ViewChild('navigationDrawer')
  navigationDrawer?: ElementRef<NavigationDrawer>;

  opened = false;

  openDrawer() {
    this.navigationDrawer!.nativeElement.open = true;
  }
}
export function open() { }