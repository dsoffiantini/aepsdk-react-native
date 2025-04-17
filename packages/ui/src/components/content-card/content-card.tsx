import {
  Image,
  Pressable,
  type PressableProps,
  View,
  type ViewProps,
  type ImageProps,
} from 'react-native';
import Button, { type ButtonProps } from '../button/button';
import AEPText from '../text/text';
import type { ReactNode } from 'react';

interface Props extends PressableProps {
  ButtonProps?: ButtonProps;
  ImageProps?: ImageProps;
  children?: ReactNode | ReactNode[];
  body?: string;
  onPress?: () => void;
  style?: ViewProps['style'];
  title?: string;
  variant?: 'SmallImage' | 'LargeImage' | 'ImageOnly';
}

const ContentCard: React.FunctionComponent<Props> = ({
  // ButtonProps,
  ImageProps,
  children,
  body,
  onPress,
  style,
  title,
  variant = 'SmallImage',
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
      {...props}
    >
      <View
        style={[
          {
            borderRadius: 12,
            alignItems: 'center',
            borderColor: '#EAEAEA',
            borderWidth: 1,
            flexDirection: 'row',
            padding: 24,
            margin: 16,
          },
          style,
        ]}
      >
        <Image
          source={{ uri: 'https://i.ibb.co/0X8R3TG/Messages-24.png' }}
          style={[
            { aspectRatio: 1, marginRight: 16, width: 60 },
            ImageProps?.style,
          ]}
          // {...ImageProps}
        />
        <View style={{ gap: 4 }}>
          {title && <AEPText variant="title">{title}</AEPText>}
          {body && <AEPText variant="body">{body}</AEPText>}
          {children}
        </View>
      </View>
    </Pressable>
  );
};

export default ContentCard;
