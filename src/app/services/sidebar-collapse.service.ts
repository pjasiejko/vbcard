import {Injectable} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidebarCollapseService {
  private sidebarCollapsed$: BehaviorSubject<boolean>;
  private sidebarCollapsed: boolean;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {

    this.sidebarCollapsed$ = new BehaviorSubject<boolean>(true);
    this.sidebarCollapsed$.subscribe(b => this.sidebarCollapsed = b);

    router.events.subscribe(() => {
      this.sidebarCollapsed$.next(router.url === '/' || router.url === '/home');
    });

    this.breakpointObserver.observe([
      '(max-width: 768px)'
    ]).subscribe(result => {
      this.sidebarCollapsed$.next(result.matches);
    });
  }

  toggleSidebarCollapse() {
    this.sidebarCollapsed$.next(!this.sidebarCollapsed);
  }

  getSidebarCollapsed(): BehaviorSubject<boolean> {
    return this.sidebarCollapsed$;
  }


}
