import React from 'react';
import { Wrap } from '../Style/Wrap';
import { Label } from '../Style/Label';
import { Checkbox } from '../Style/Checkbox';

export function Toppings({ toppings, checkToppings }) {
  return (
    <>
      <h3>Добавки</h3>
      <Wrap>
        {toppings.map((item, i) => (
          <Label key={i}>
            <Checkbox
              type="checkbox"
              checked={item.checked}
              onChange={() => checkToppings(i)}
            />
            {item.name}
          </Label>
        ))}
      </Wrap>
    </>
  )
}