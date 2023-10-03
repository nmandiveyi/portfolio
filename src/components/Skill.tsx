import React from 'react'
import { Check } from './Icons';

export type SkillProps = {
  name: string;
  subSkills: string[];
}

function Skill({ name, subSkills }: SkillProps) {
  return (
    <div className='flex flex-col pt-2'>
      <div>{ name }</div>
      {
        subSkills.map((skillItem, index) => (
          <div
            key={`subskill_${name}_${index}`}
            className='pl-4 flex flex-row px-2'
          >
            <Check />
            <div>{ skillItem }</div>
          </div>
        ))
      }
    </div>
  )
}

export default Skill
