import { Component, Injectable } from '@angular/core'
import { CanDeactivate } from '@angular/router'

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {}

export interface CanExit {
  canDeactivate: () => Promise<boolean> | boolean;
}

@Injectable({ providedIn: 'root' })
export class CanExitGuard implements CanDeactivate<CanExit> {
  canDeactivate(component: CanExit) {
    if (component.canDeactivate) {
      return component.canDeactivate();
    }
    return true;
  }
}
