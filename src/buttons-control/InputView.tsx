import { observer } from "mobx-react";
import BasicInput from "../BasicInput";

import secondBlockViewModel from "./btns-both-sides/ViewModel";
import thirdBlickViewModel from "./hints-control/ViewModel";
import firstBlockViewModel from "./two-btns-to-the-right/ViewModel";

type Props = {
  viewModel: typeof firstBlockViewModel | typeof secondBlockViewModel | typeof thirdBlickViewModel;
};

const InputView = ({ viewModel }: Props) => (
  <BasicInput value={viewModel.inputValue} onChange={(value: string) => viewModel.onChange(value)} />
);

export default observer(InputView);
