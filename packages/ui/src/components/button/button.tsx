import {
  Pressable,
  View,
  type PressableProps,
  Text,
  StyleSheet,
  type ViewProps,
} from 'react-native';
import useTheme from '../../hooks/use-theme';

export interface ButtonProps extends PressableProps {
  title: string;
  style?: ViewProps['style'];
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ style, title, ...props }) => {
  const theme = useTheme();
  return (
    <Pressable
      {...props}
      style={({ pressed }) => ({
        opacity: pressed ? 0.6 : 1,
        alignSelf: 'flex-start',
      })}
    >
      <View
        style={[
          {
            backgroundColor: theme.colors.button,
          },
          styles.container,
          style,
        ]}
      >
        <Text style={[theme.text.button, styles.text, { textAlign: 'center' }]}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    margin: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 14,
  },
  text: { fontWeight: 700, lineHeight: 16 },
});

export default Button;
