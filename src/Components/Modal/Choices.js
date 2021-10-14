import React from 'react';
import { Wrap } from '../Style/Wrap';
import { Label } from '../Style/Label';
import { Checkbox } from '../Style/Checkbox';

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <h3>Выбирайте:</h3>
      <Wrap>
        {openItem.choices.map((item, i) => (
          <Label key={i}>
            <Checkbox
              type="radio"
              name="choices"
              checked={choice === item}
              value={item}
              onChange={changeChoices}
            />
            {item}
          </Label>
        ))}
      </Wrap>
    </>
  )
}