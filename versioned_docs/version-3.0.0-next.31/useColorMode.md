---
id: use-color-mode
title: useColorMode
---

`useColorMode` is a custom hook used to get and set the color mode.

## Import

```jsx
import { useColorMode } from 'native-base';
```

## Example

```SnackPlayer name=useColorMode
import React from 'react';
import { NativeBaseProvider, VStack, useColorMode, Text, Button, Center } from 'native-base';

function UseColorMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <VStack space={4} p={2} w="90%">
      <Text fontSize="lg">
        The active color mode is <Text bold>{colorMode}</Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </VStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <UseColorMode />
      </Center>
    </NativeBaseProvider>
  );
}

```

## Return

| Name            | Type            | Description                                | Default |
| --------------- | --------------- | ------------------------------------------ | ------- |
| colorMode       | `light`, `dark` | The active color mode                      | `light` |
| setColorMode    | function        | Use to set color mode.                     | -       |
| toggleColorMode | function        | Use to toggle between light and dark mode. | -       |