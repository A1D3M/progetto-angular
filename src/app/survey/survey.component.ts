import { Component } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  services = ['Cortesia', 'Assistenza Clienti', 'Rapidità nella Risposta'];
  votes: { [serviceName: string]: string } = {};


  rate(serviceName: string, satisfaction: boolean) {
    this.votes[serviceName] = satisfaction ? 'Sì' : 'No'; 
  }

  isSurveyComplete() {
    return Object.keys(this.votes).length === this.services.length;
  }
}
