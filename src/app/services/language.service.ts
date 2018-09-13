import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {
  public english: boolean = true;

  public setLanguage(language) {
    this.english = language;
  }

  public getLanguage() {
    return this.english;
  }
}