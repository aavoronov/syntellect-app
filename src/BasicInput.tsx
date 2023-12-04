interface Props {
  value: string;
  onChange: (value: string) => void;
}

const BasicInput = ({ value, onChange }: Props) => {
  console.log(value);
  return <input type='text' value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} />;
};

export default BasicInput;
