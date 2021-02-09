import React from 'react';
import { Checkbox, CheckboxGroup, Text } from 'native-base';

export default function ControlledCheckbox() {
  const [groupValues, setGroupValues] = React.useState<Array<any>>([]);

  return (
    <CheckboxGroup onChange={setGroupValues} value={groupValues}>
      <Checkbox value="one">
        <Text>One</Text>
      </Checkbox>
      <Checkbox value="two">
        <Text>Two</Text>
      </Checkbox>
    </CheckboxGroup>
  );
}