import { AfterViewInit, ElementRef, Input, OnChanges } from "@angular/core";

export class ToolTipDirective implements AfterViewInit, OnChanges {

  @Input('appToolTip') toolTipContent: string;

  public tippyInstance: any;

  constructor(private elRef: ElementRef) {

  }

  ngAfterViewInit(): void {
    this.tippyInstance
  }

}
