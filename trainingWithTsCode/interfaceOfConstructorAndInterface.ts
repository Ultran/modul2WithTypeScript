interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(h: number, m: number): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {
    this.tick(h, m);
  }
  tick(h: number, m: number) {
    console.log(`${h}: ${m} beep beep`);
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {
    this.tick(h, m);
  }
  tick(h: number, m: number) {
    console.log(`${h}: ${m} tic toc`);
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
