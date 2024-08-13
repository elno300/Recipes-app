import { Button } from "react-native";

export default function Test() {
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
