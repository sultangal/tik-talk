import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../../tik-talk/src/app/app.config';
import { AppComponent } from '../../tik-talk/src/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
