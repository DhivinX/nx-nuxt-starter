import { ExampleOptions } from './interfaces';

export function exampleSum(options: ExampleOptions): number {
    return options.a + options.b;
}

export function exampleMultiplication(options: ExampleOptions): number {
    return options.a * options.b;
}
