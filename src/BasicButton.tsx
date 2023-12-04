type Props = {
  onClick: () => void;
  text: string;
};

const BasicButton = ({ onClick, text }: Props) => <button onClick={onClick}>{text}</button>;
export default BasicButton;
