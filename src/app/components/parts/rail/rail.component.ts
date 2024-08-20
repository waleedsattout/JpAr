import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import type { NavigationRail } from 'mdui/components/navigation-rail.js';
import type { NavigationRailItem } from 'mdui/components/navigation-rail-item.js';
import { DrawerComponent } from '../drawer/drawer.component';
import '@mdui/icons/search.js';
import '@mdui/icons/library-music.js';
import '@mdui/icons/watch-later--outlined.js';
import '@mdui/icons/image--outlined.js';
import '@mdui/icons/logout.js';
import { Dialog } from 'mdui/components/dialog.js';

@Component({
  selector: 'app-rail',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [DrawerComponent],
  templateUrl: './rail.component.html',
  styleUrl: './rail.component.css'
})

export class RailComponent {
  @ViewChild('dialog')
  dialog?: ElementRef<Dialog>;

  openDialog() {
    this.dialog!.nativeElement.open = true;
  }
}
