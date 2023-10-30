import { Component, OnInit, Renderer2 } from "@angular/core";
import { ScriptService } from "./services/script.service";

const SCRIPT_PATH = 'https://scripts.sirv.com/sirvjs/v3/sirv.js'
declare let gapi: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptService
  ) { }

  ngOnInit() {
    const scriptElement = this.scriptService.loadScript(this.renderer, SCRIPT_PATH) as HTMLScriptElement;

    scriptElement.onload = () => {
      console.log('Sirv Script loaded');
    };

    scriptElement.onerror = () => {
      console.log('Could not load the Sirv Script!');
    };
  }
}
