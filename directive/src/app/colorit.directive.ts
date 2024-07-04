import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[colorit]',
  standalone: true
})
export class ColoritDirective {

  @Input("colorit") color : string | undefined;
  @Input("test") name : string | undefined;

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") method(){
    // console.log(this.color)
    console.log(this.name)
    this.el.nativeElement.style = "color:red"
    // this.el.nativeElement.innerHTML = this.name
    // console.log("Mouse elementin üzerine geldi")
  }

  @HostListener("mouseleave") method2(){
    this.el.nativeElement.style = "color:black"
    // this.el.nativeElement.innerHTML = this.color
    // console.log("Mouse elementin üzerinden ayrıldı")
  }
  
  // @HostListener("mouseleave") method3(){
  //   console.log("Mouse elementin üzerinden ayrıldı")
  // }


}
