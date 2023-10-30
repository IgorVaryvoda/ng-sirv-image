import { Renderer2, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public loadScript(renderer: Renderer2, src: string): HTMLScriptElement {
    const script = renderer.createElement('script') as HTMLScriptElement;
    script.type = 'text/javascript';
    script.src = src;
    renderer.appendChild(this.document.body, script);
    return script;
  }
}
