import { flowResult, makeAutoObservable } from "mobx";
import { CountryInfo, getCountryByName } from "../../api/apiService";

class ThirdBlockViewModel {
  inputValue = "";
  maxHints = 3;
  hints: CountryInfo[] = [];
  state: "done" | "pending" | "error" = "done";

  constructor(private readonly getCountryByName: (value: string) => Promise<CountryInfo[]>) {
    makeAutoObservable(this);
  }

  onChange = (value: string) => {
    console.log(value);
    this.inputValue = value;
    this.getHints(value);
  };

  getHints = function* <T extends CountryInfo = CountryInfo>(this: ThirdBlockViewModel, value: string): Generator<T[]> {
    this.state = "pending";
    console.log("pending");
    console.log(this.maxHints);
    try {
      const countries = yield flowResult(this.getCountryByName(value));
      this.state = "done";
      console.log("done");
      this.hints = countries as T[];
      console.log(countries);
    } catch (e) {
      console.log("error");
      this.state = "error";
    }
  };

  setMaxHints = (amount: number): void => {
    console.log("set amount");
    this.maxHints = amount;
  };

  get limitedHints() {
    return this.hints.slice(0, this.maxHints);
  }
}

export default new ThirdBlockViewModel(getCountryByName);
