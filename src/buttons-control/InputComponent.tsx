import View from "./InputView";
import secondBlockViewModel from "./btns-both-sides/ViewModel";
import thirdBlickViewModel from "./hints-control/ViewModel";
import firstBlockViewModel from "./two-btns-to-the-right/ViewModel";

const MobxControlledInput = ({ block }: { block: 0 | 1 | 2 }) => {
  let viewModel: typeof firstBlockViewModel | typeof secondBlockViewModel | typeof thirdBlickViewModel = firstBlockViewModel;

  if (block === 1) viewModel = secondBlockViewModel;
  if (block === 2) viewModel = thirdBlickViewModel;
  return <View viewModel={viewModel} />;
};

export default MobxControlledInput;
