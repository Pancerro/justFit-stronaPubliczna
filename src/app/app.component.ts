import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'justFitWebPublic';
  ngOnInit(): void {
    let cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "orange",
          text:"black"
        },
        button: {
          background: "#ffe000",
          text: "black",
          border:"red"
        }
      },
      theme: "classic",
      content: {
        message: "Ta strona wykorzystuje pliki Cookies zgodnie z ustawieniami Twojej przeglądarki. Więcej informacji o celu ich wykorzystania i możliwości zmiany ustawień cookies znajdziesz w ",
        dismiss: "Akceptuje",
        link: "Polityce Cookies.",
        href:  "/#/dataprivacy" 
      }
    });
    
  }
}
