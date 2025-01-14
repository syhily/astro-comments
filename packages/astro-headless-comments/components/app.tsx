import { Button, Flex, Text, Theme } from '@radix-ui/themes';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router';

export const App = () => {
  return (
    <StrictMode>
      <Theme>
        <BrowserRouter>
          <Flex direction="column" gap="2">
            <Text>Hello from Radix Themes :)</Text>
            <Button>Let's go</Button>
          </Flex>
        </BrowserRouter>
      </Theme>
    </StrictMode>
  );
};
