import React from 'react'
import Skill from './Skill';

export type SkillCategoryProps = {
  name: string;
  skills: {
    name: string;
    subSkills: string[];
  }[]
}


function SkillCategory({ name, skills }: SkillCategoryProps) {
  return (
    <div className='flex flex-col pt-2'>
      <div className='italic'>{ name }</div>
      {
        skills.map((skillItem, skillItemIndex) => (
          <Skill 
            key={`skill_${skillItem.name}_${skillItemIndex}`}
            name={skillItem.name} 
            subSkills={skillItem.subSkills}
          />
        ))
      }
    </div>
  )
}

export default SkillCategory
