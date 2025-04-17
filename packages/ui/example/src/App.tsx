import { SafeAreaView, useColorScheme } from 'react-native';
import {
  Button,
  ContentCard,
  Text,
  ThemeProvider,
  type Theme,
} from '@adobe/aep-ui-elements';

const theme: Partial<Theme> = {
  colors: {
    button: 'red',
  },
};

export default function App() {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Text variant="body" style={{ textAlign: 'center' }}>
          Content Cards!
        </Text>
        <ContentCard body="React Native is cool!" title="React Native" variant="">
          <Button title="Hello" />
        </ContentCard>
        <ContentCard
          body="React Native is cool!"
          title="React Native"
          style={{ backgroundColor: 'lightblue', flexDirection: 'column',  }}
        >
          <Button title="Hello" />
        </ContentCard>
      </ThemeProvider>
      <ContentCard body="React Native is cool!" title="React Native">
        <Button title="Hello" />
      </ContentCard>
    </SafeAreaView>
  );
}
