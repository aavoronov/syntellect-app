import { CountryInfo } from "../api/apiService";

const AutocompleteListView = ({
  hints,
  callback,
  state,
}: {
  hints: CountryInfo[];
  callback: (value: string) => void;
  state: "done" | "pending" | "error";
}) => {
  return (
    <div>
      {state === "done" ? (
        hints.map((item) => (
          <div
            onClick={() => callback(item.name)}
            style={{ display: "flex", flexDirection: "row", cursor: "pointer", backgroundColor: "#bbb", marginBottom: 3, borderRadius: 5 }}>
            <img src={item.flag} alt={item.name} style={{ paddingRight: 5 }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{item.name}</span>
              <span style={{ fontSize: 12 }}>{item.fullName}</span>
            </div>
          </div>
        ))
      ) : (
        <span>Загрузка...</span>
      )}
    </div>
  );
};

export default AutocompleteListView;
