import View from "./ButtonView";
import secondBlockViewModel from "./btns-both-sides/ViewModel";
import firstBlockViewModel from "./two-btns-to-the-right/ViewModel";

export type FirstBlockCallback = "onClear" | "onHello";
export type SecondBlockCallback = "onAlert" | "onCheckNumberAndAlert";
export type Callback = FirstBlockCallback | SecondBlockCallback;

const MobxControlledBtn = ({ text, callback, block }: { text: string; callback: Callback; block: 0 | 1 }) => {
  let viewModel: typeof firstBlockViewModel | typeof secondBlockViewModel = firstBlockViewModel;

  if (block === 1) viewModel = secondBlockViewModel;

  //@ts-ignore
  return <View text={text} callback={() => viewModel[callback]()} />;
};

export default MobxControlledBtn;
