import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
//herança
export class ForDirective implements OnInit {

  // recupera o que vem depois definido na tag
  //Nome da diretiva + nome informado na tag com a inicial em maiusculo
  @Input('myForQualquerCoisa') numbers: number[];
  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { 
  }

  ngOnInit(): void {
   for(let number of this.numbers){
     this.container.createEmbeddedView(this.template, { $implicit: number});
   }
  }


}
