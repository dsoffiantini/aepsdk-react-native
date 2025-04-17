import { Text, type TextProps } from 'react-native';
import { text, type TextVariant } from '../../theme/text';

export interface AEPTextProps extends TextProps {
  variant?: TextVariant;
}

const AEPText: React.FunctionComponent<AEPTextProps> = ({
  children,
  style,
  variant,
}) => {
  const variantStyle = variant ? text[variant] : {};
  return <Text style={[variantStyle, style]}>{children}</Text>;
};

export default AEPText;
