import { autorun, flowResult, makeAutoObservable, reaction } from "mobx";
import { CountryInfo, getCountryByName } from "../../api/apiService";
import { debounce } from "lodash";

class ThirdBlockViewModel {
  inputValue = "";
  maxHints = 3;
  hints: CountryInfo[] = [];
  state: "done" | "pending" | "error" = "done";
  // finishedEditing = true;
  // lastEdit: number = Date.now();
  private maxDelay: number = 1000;
  // fieldDisabled = false;
  private debouncedGetHints = debounce((value) => this.getHints(value), this.maxDelay);

  constructor(private readonly getCountryByName: (value: string) => Promise<CountryInfo[]>) {
    makeAutoObservable(this);
  }

  onChange = (value: string) => {
    this.inputValue = value;
    // const now = Date.now();
    // const diff = now - this.lastEdit;
    // this.finishedEditing = false;
    // if (diff > this.maxDelay) {
    //   console.log(diff, "will fire");
    // } else {
    //   console.log(diff, "will not fire");
    // }
    // this.lastEdit = Date.now();
    // setTimeout(() => this.getHints(value), 1000);
    this.debouncedGetHints(value);
  };

  onSearch = () => {
    this.getHints(this.inputValue);
  };

  getHints = function* <T extends CountryInfo = CountryInfo>(this: ThirdBlockViewModel, value: string): Generator<T[]> {
    this.state = "pending";
    console.log("hints");
    try {
      const countries = yield flowResult(this.getCountryByName(value));
      this.state = "done";
      this.hints = countries as T[];
    } catch (e) {
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

const viewModel = new ThirdBlockViewModel(getCountryByName);

// reaction(
//   () => viewModel.inputValue,
//   (inputValue) => {

//     console.log("finishedEditing ", "false");
//   }
// );

// const disposer =
// reaction(
//   () => viewModel.finishedEditing,
//   (finishedEditing) => {
//     if (!finishedEditing) {
//       setTimeout(() => {
//         finishedEditing = true;
//         console.log("finishedEditing ", "true");
//       }, 1000);
//     }
//   }
// );

// disposer()

// reaction(
//   () => viewModel.inputValue,
//   (inputValue) => {
//     if (viewModel.finishedEditing) {
//       viewModel.finishedEditing = false;
//       console.log("finishedEditing ", "false");
//       setTimeout(() => {
//         viewModel.finishedEditing = true;
//         console.log("finishedEditing ", "true");
//       }, 1000);
//     }
//   }
// );

autorun(() => {
  console.log("autorun1 " + viewModel.inputValue);
});

// autorun(() => {
//   if (viewModel.inputValue && viewModel.finishedEditing) {
//     console.log("autorun " + viewModel.inputValue);
//     viewModel.getHints(viewModel.inputValue);
//   }
// });

export default viewModel;
