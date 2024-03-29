import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  children: string;
  color: string;
  backgroundColor: string;
}

export function Button({ children, color, backgroundColor}: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]}>
      <Text style={[styles.buttonText, { color }]}>{children}</Text>
    </TouchableOpacity>
  );
}
