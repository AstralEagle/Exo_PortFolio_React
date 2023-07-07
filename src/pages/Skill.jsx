import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import SkillItem from "../components/SkillItem";
import SkillProgressItem from "../components/SkillProgressItem";

const skills = [
    {
        "name": "JavaScript",
        "subModule": [
            "React",
            "Vue",
            "Express",
            "Nest"
        ]
    },
    {
        "name": "Python",
        "subModule": [
            "Django",
            "Flask",
            "Pyramid"
        ]
    },
    {
        "name": "Java",
        "subModule": [
            "Spring",
            "Hibernate",
            "Struts"
        ]
    },
    {
        "name": "C#",
        "subModule": [
            "ASP.NET",
            "Entity Framework",
            "Xamarin"
        ]
    },
    {
        "name": "PHP",
        "subModule": [
            "Laravel",
            "Symfony",
            "CodeIgniter"
        ]
    }
]
const skillProgress = [
    {
        title: "Maitrisé",
        techno: ["Javascript", "HTML", "CSS", "React", "Vue", "Express", "Git"]
    },
    {
        title: "En Apprentissage",
        techno: ["Java", "PHP", "SQL", "Docker", "Nest", "Prisma", "GraphQL"]
    },
    {
        title: "Notion",
        techno: ["Python", "SCSS"]
    }
]

const viewProgress = true;


const Skill = () => {
    return (
        <DefaultTemplate>
            <h1>Compétence</h1>
            <div className="ml-4">
                {viewProgress ?
                    skillProgress.map((x, i) => (
                        <SkillProgressItem item={x} key={i}/>
                    )) :
                    skills.map((x, i) => (
                        <SkillItem item={x} key={i}/>
                    ))
                }
            </div>
        </DefaultTemplate>
    )
}

export default Skill