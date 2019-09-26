import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {

    var userLang = navigator.language;
    let defaultLanguage = userLang.split("-")[0];
    translate.setDefaultLang(defaultLanguage);

  }

  useLanguage(language: string) {
    this.translate.use(language);
    
  }
}


