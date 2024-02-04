import KeyboardAccessory from "@/components/KeyboardAccessory";

import { Button } from "@rneui/base";

interface Props {
  onInput: (value: string) => void;
}
import { useTheme } from "@/theme";

function FractionButton({ value, onInput }: { value: string; onInput: (value: string) => void }) {
  const { theme } = useTheme();
  return (
    <Button
      onPress={() => onInput(value)}
      type="clear"
      title={value}
      titleStyle={{
        fontFamily: theme.fonts.body,
        fontSize: 18,
        paddingHorizontal: 10,
        marginTop: 2,
        color: theme.colors.text.body,
      }}
    ></Button>
  );
}

export default function FractionBar({ onInput }: Props) {
  const { theme } = useTheme();
  return (
    <KeyboardAccessory
      style={{
        backgroundColor: theme.colors.backgrounds.card,
      }}
    >
      <FractionButton value="⅛" onInput={onInput} />
      <FractionButton value="¼" onInput={onInput} />
      <FractionButton value="⅓" onInput={onInput} />
      <FractionButton value="½" onInput={onInput} />
      <FractionButton value="⅔" onInput={onInput} />
      <FractionButton value="¾" onInput={onInput} />
    </KeyboardAccessory>
  );
}
