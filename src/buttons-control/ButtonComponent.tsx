import View from "./ButtonView";
import secondBlockViewModel from "./btns-both-sides/ViewModel";
import firstBlockViewModel from "./two-btns-to-the-right/ViewModel";
import thirdBlockViewModel from "./hints-control/ViewModel";

export type FirstBlockCallback = "onClear" | "onHello";
export type SecondBlockCallback = "onAlert" | "onCheckNumberAndAlert";
export type ThirdBlockCallback = "onSearch";
export type Callback = FirstBlockCallback | SecondBlockCallback | ThirdBlockCallback;

const MobxControlledBtn = ({ text, callback, block }: { text: string; callback: Callback; block: 0 | 1 | 2 }) => {
  let viewModel: typeof firstBlockViewModel | typeof secondBlockViewModel | typeof thirdBlockViewModel = firstBlockViewModel;

  if (block === 1) viewModel = secondBlockViewModel;
  if (block === 2) viewModel = thirdBlockViewModel;
  //@ts-ignore
  return <View text={text} callback={() => viewModel[callback]()} />;
};

export default MobxControlledBtn;
