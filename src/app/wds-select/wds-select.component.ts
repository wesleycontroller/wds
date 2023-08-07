import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';


@Component({
  selector: 'wds-select',
  templateUrl: './wds-select.component.html',
  styleUrls: ['./wds-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WdsSelectComponent),
      multi: true,
    },
  ],
})
export class WdsSelectComponent implements ControlValueAccessor {

  @Input() options: string[] = [];
  @Input() label!: string;
  selectedOption: string = '';

  control = new FormControl();

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    this.control.valueChanges.subscribe((value) => {
      this.selectedOption = value;
      this.onChange(value);
      this.onTouched();
    });
  }

  writeValue(value: any): void {
    this.selectedOption = value;
    this.control.setValue(value);
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.control.setValue(option);
  }

}
