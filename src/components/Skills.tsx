import React from 'react'
import SkillCategory from './SkillCategory'

const skills = [
  {
    name: 'Backend',
    skills: [
      {
        name: "JavaScript/TypeScript",
        subSkills: [
          "NestJS", "GraphQL"
        ]
      },
      {
        name: "Python",
        subSkills: [
          "Django"
        ]
      }
    ]
  },
  {
    name: "Frontend",
    skills: [
      {
        name: "JavaScript/TypeScript",
        subSkills: [
          "React.js", "jQuery"
        ]
      },
      {
        name: "TailwindCSS",
        subSkills: []
        
      },
      {
        name: "HTML/CSS",
        subSkills: []
      },
    ]
  },
  {
    name: "Database",
    skills: [
      {
        name: "SQL",
        subSkills: [
          "MySQL", "MySQL Server", "PostgreSQL",
        ]
      },
      {
        name: "No-SQL",
        subSkills: [
          "MongoDB", 
        ]
      },
     
    ]
  }
]

function Skills() {
  return (
    <div className='mt-10'>
      <div className='font-bold text-xl pb-5'>
        Skills
      </div>
      <div className='grid grid-cols-3'>
        {
          skills.map((skillCat, skillCatIndex) => (
            <SkillCategory 
              key={`skill_cat_${skillCatIndex}`}
              name={skillCat.name} 
              skills={skillCat.skills}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Skills
