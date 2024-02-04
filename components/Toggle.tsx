import { Switch, View, Text } from "react-native";
import { useTheme } from "@/theme";

interface Props extends React.ComponentProps<typeof Switch> {
  label: string;
  disabled?: boolean;
}

export default function Toggle(props: Props) {
  const { label, ...switchProps } = props;
  const { theme } = useTheme();
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
      <Text>{label}</Text>
      <Switch {...switchProps} thumbColor={theme.colors.secondary} />
    </View>
  );
}
