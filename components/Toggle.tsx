import { Switch, View, Text } from "react-native";
import { useTheme } from "@/theme";

interface Props extends React.ComponentProps<typeof Switch> {
  label?: string;
  disabled?: boolean;
}

export default function Toggle(props: Props) {
  const { label, ...switchProps } = props;
  const { theme } = useTheme();
  return <Switch {...switchProps} thumbColor={theme.colors.secondary} />;
}
