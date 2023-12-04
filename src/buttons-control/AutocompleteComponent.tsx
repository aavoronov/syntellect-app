import { observer } from "mobx-react";
import View from "./AutocompleteListView";
import thirdBlockViewModel from "./hints-control/ViewModel";

const MobxControlledAutocomplete = () => {
  return (
    <View
      hints={thirdBlockViewModel.limitedHints}
      callback={(value: string) => thirdBlockViewModel.onChange(value)}
      state={thirdBlockViewModel.state}
    />
  );
};

export default observer(MobxControlledAutocomplete);
