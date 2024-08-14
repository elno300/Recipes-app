import { Button } from "react-native";

export default function TestScreen() {
  // const [name, setName] = useState("Text");

  return (
    <Button
      onPress={() => {
        alert();
      }}
      title="Hämta städer"
    />
  );
}
