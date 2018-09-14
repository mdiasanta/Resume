import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
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
    
  constructor(private breakpointObserver: BreakpointObserver, private translate: TranslateService) {}
  
    resumeClick(){
      window.open('/assets/Resume.pdf','_blank');
      //window.open('/Resume/assets/Resume.pdf','_blank');
    }

    linkedinClick(){
      window.open('https://www.linkedin.com/in/mark-diasanta-42ab68130/','_blank');
    }

    githubClick(){
      window.open('https://github.com/mdiasanta','_blank');
    }
    switchLanguage(language: string) {
      this.translate.use(language);
    }

    //Toggle Language button visibility
    visible=false;

    toggleButton(){
      this.visible=!this.visible;
  }
  }
