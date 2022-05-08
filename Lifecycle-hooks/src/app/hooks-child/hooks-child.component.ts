import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  Input,
  SimpleChanges,
  ContentChild,
  ElementRef,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
} from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-hooks-child',
  templateUrl: './hooks-child.component.html',
  styleUrls: ['./hooks-child.component.css'],
})
export class HooksChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() parentData: string = '';
  @Input()
  parentProduct!: Product;
  @ContentChild('child')
  contentChild!: ElementRef;
  @ViewChild('childHook') viewChild!: ElementRef;

  constructor() {
    console.log('Child Constructor()');
  }

  ngOnInit(): void {
    console.log('Child ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child ngOnChange');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('Child DoCheck', this.parentProduct);
  }

  ngAfterContentInit(): void {
    console.log('Child ngAfterContentInit', this.contentChild);
    this.contentChild.nativeElement.setAttribute('style', 'color:green');
  }

  ngAfterContentChecked(): void {
    console.log('Child ngAfterContentChecked');
    this.contentChild.nativeElement.setAttribute(
      'style',
      `color:${this.parentData}`
    );
  }

  ngAfterViewInit(): void {
    console.log('Child AfterViewChecked');
    this.viewChild.nativeElement.setAttribute(
      'style',
      'background-color:green'
    );
  }

  ngAfterViewChecked(): void {
    console.log('Child AfterViewInit', this.viewChild);
    this.viewChild.nativeElement.setAttribute(
      'style',
      `background-color:${this.parentData}`
    );
  }
}
