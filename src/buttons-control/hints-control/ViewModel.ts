import { debounce } from "lodash";
import { flowResult, makeAutoObservable } from "mobx";
import { CountryInfo, getCountryByName } from "../../api/apiService";

interface TimestampedCountryInfo {
  res: CountryInfo[];
  timestamp: number;
}

class ThirdBlockViewModel {
  inputValue = "";
  maxHints = 3;
  hints: TimestampedCountryInfo = {
    res: [],
    timestamp: Date.now(),
  };
  state: "done" | "pending" | "error" = "done";
  private maxDelay: number = 500;
  private debouncedGetHints = debounce((value) => this.getHints(value), this.maxDelay);

  constructor(private readonly getCountryByName: (value: string) => Promise<CountryInfo[]>) {
    makeAutoObservable(this);
  }

  onChange = (value: string) => {
    this.inputValue = value;

    this.debouncedGetHints(value);
  };

  getHints = function* (this: ThirdBlockViewModel, value: string): Generator<TimestampedCountryInfo> {
    const timestamp = Date.now();
    this.state = "pending";
    console.log("hints");
    try {
      const countries = yield flowResult(this.getCountryByName(value));
      if (this.hints.timestamp < timestamp) {
        this.hints = { res: countries as CountryInfo[], timestamp };
      }
      this.state = "done";
    } catch (e) {
      this.state = "error";
    }
  };

  setMaxHints = (amount: number): void => {
    console.log("set amount");
    this.maxHints = amount;
  };

  get limitedHints() {
    return this.hints.res.slice(0, this.maxHints);
  }
}

const viewModel = new ThirdBlockViewModel(getCountryByName);

export default viewModel;
