import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  inputValue1: number = 0;
  inputUnit1: string = 'meter';
  outputUnit1: string = 'feet';
  convertedValue1: number = 0;

  inputValue2: number = 0;
  inputUnit2: string = 'celsius';
  outputUnit2: string = 'fahrenheit';
  convertedValue2: number = 0;

  convert(inputValue: number, inputUnit: string, outputUnit: string) {
    if (inputUnit === 'meter' && outputUnit === 'feet') {
      this.convertedValue1 = inputValue * 3.28084;
    } else if (inputUnit === 'feet' && outputUnit === 'meter') {
      this.convertedValue1 = inputValue / 3.28084;
    } else if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
      this.convertedValue2 = (inputValue * 9 / 5) + 32;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
      this.convertedValue2 = (inputValue - 32) * 5 / 9;
    }
  }
}