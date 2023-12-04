import { makeAutoObservable } from "mobx";

class FirstBlockViewModel {
  inputValue = "";

  constructor() {
    makeAutoObservable(this);
  }

  onChange = (value: string) => {
    console.log(value);
    this.inputValue = value;
  };

  onClear = (): void => {
    console.log("clear");
    this.inputValue = "";
  };

  onHello = (): void => {
    console.log("hello");
    this.inputValue = "Hello world!";
  };
}

export default new FirstBlockViewModel();
