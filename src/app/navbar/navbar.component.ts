import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  
    resumeClick(){
      window.open('https://resume.creddle.io/resume/el3x9rfvib7','_blank');
    }

    linkedinClick(){
      window.open('https://www.linkedin.com/in/mark-diasanta-42ab68130/','_blank');
    }

    githubClick(){
      window.open('https://github.com/mdiasanta','_blank');
    }
  }
