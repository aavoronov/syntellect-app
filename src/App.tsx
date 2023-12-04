import "./App.css";
import MobxControlledBtn from "./buttons-control/ButtonComponent";
import MobxControlledInput from "./buttons-control/InputComponent";

import { configure } from "mobx";
import MobxControlledAutocomplete from "./buttons-control/AutocompleteComponent";
import HintAmountBtn from "./buttons-control/HintAmountBtn";

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

const BlockContainer = ({ children }: { children: JSX.Element }) => {
  return <div style={{ marginBottom: 20, width: 400 }}>{children}</div>;
};

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BlockContainer>
        <>
          <MobxControlledInput block={0} />
          <MobxControlledBtn block={0} text='Clear' callback='onClear' />
          <MobxControlledBtn block={0} text='Hello' callback='onHello' />
        </>
      </BlockContainer>
      {/* <View text='Нажми' callback={() => alert("111")} /> */}

      <BlockContainer>
        <>
          <MobxControlledBtn block={1} text='Alert' callback='onAlert' />
          <MobxControlledInput block={1} />
          <MobxControlledBtn block={1} text='Check and alert' callback='onCheckNumberAndAlert' />
        </>
      </BlockContainer>
      <BlockContainer>
        <>
          <div>
            <HintAmountBtn text='3 hints max' maxHints={3} />
            <HintAmountBtn text='10 hints max' maxHints={10} />
          </div>
          <MobxControlledInput block={2} />
          <MobxControlledAutocomplete />
        </>
      </BlockContainer>
    </div>
  );
}

export default App;
