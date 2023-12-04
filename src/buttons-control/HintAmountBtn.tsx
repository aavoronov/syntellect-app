import View from "./ButtonView";
import thirdBlockViewModel from "./hints-control/ViewModel";

const HintAmountBtn = ({ text, maxHints }: { text: string; maxHints: number }) => {
  return <View text={text} callback={() => thirdBlockViewModel.setMaxHints(maxHints)} />;
};

export default HintAmountBtn;
