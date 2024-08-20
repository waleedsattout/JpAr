import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'mdui/mdui.css';
import 'mdui';
import { setColorScheme } from 'mdui/functions/setColorScheme.js';
setColorScheme('#D73027');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
