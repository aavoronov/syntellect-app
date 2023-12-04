import { makeAutoObservable } from "mobx";

class SecondBlockViewModel {
  inputValue = "";

  constructor() {
    makeAutoObservable(this);
  }

  onChange = (value: string) => {
    console.log(value);
    this.inputValue = value;
  };

  onAlert = (): void => {
    alert(this.inputValue);
  };

  onCheckNumberAndAlert = (): void => {
    if (!isNaN(+this.inputValue)) alert(this.inputValue);
  };
}

export default new SecondBlockViewModel();
