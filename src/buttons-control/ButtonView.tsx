import { observer } from "mobx-react";

type Props = {
  callback: () => void;
  text: string;
};

export const ButtonView = ({ callback, text }: Props) => <button onClick={callback}>{text}</button>;

export default observer(ButtonView);
