import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openResume(){
    window.open('https://resume.creddle.io/resume/el3x9rfvib7','_blank');
    
  }
  pdfSrc: string = './assets/Resume.pdf';
}
