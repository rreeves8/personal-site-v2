import { SkillsCarousel } from '../Skills'
import { Typography } from '../Typography'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '../ui/card'

const education = [
  {
    title: 'University Of Western Ontario, London | September 2018 - May 2023',
    subtitle: 'Bachelor of Engineering Science, Software Engineering (BESc)',
    description:
      'Graduated from the university of Western Ontario in London. With a degree in Software Engineering, learning math, circuits, programming, and AI.',
  },
  {
    title: 'Blyth Academy, Toronto | May 2018',
    subtitle: 'High School Diploma',
    description:
      'Graduated top of my class from Blythe Academy in Toronto. I excelled in mathematics and developed a passion for technology and computers in my early years.',
  },
]

const experience = [
  {
    title: 'Manulife Insurance | May 2023 - Present',
    subtitle: 'Associate Full Stack Software Engineer',
    description:
      "Since 2023, I've been working as a full stack software engineer for Manulife Insurance. I have completed a variety of projects for the business insurance team, including web applications, database systems, and cloud infrastructure.",
  },
  {
    title: 'Console One | May 2022 - September 2022',
    subtitle: 'Front End Software Engineer',
    description: `Designed an event-based UI architecture that allowed developers to build components using either plain JavaScript or React. Since its internal implementation in July 2022, this IDE has become the foundation of Console One's recursive IDE product`,
  },
]

export const About = () => {
  return (
    <section className="flex flex-col space-y-8 py-4">
      <Typography.H1>📝 About Me</Typography.H1>
      <div className="flex flex-col space-y-6">
        <Typography.H2>Summary</Typography.H2>
        <p className="text-lg text-muted-foreground">
          Enthusiastic and results-driven software engineer with a solid
          background in web development. Passionate about creating web tools and
          systems accross all aspects of the web stack.
        </p>
      </div>
      <div className="flex flex-col space-y-6">
        <Typography.H2>Education</Typography.H2>
        <div className="flex flex-col gap-3">
          {education.map((item) => (
            <div
              key={item.title}
              className="flex flex-col space-y-2 border-l-4 border-primary pl-4"
            >
              <Typography.H3>{item.title}</Typography.H3>
              <p className="text-md text-muted-foreground">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <Typography.H2>Work Experience</Typography.H2>
        <div className="flex flex-col gap-3">
          {experience.map((item) => (
            <div
              key={item.title}
              className="flex flex-col space-y-2 border-l-4 border-primary pl-4"
            >
              <Typography.H3>{item.title}</Typography.H3>
              <p className="text-md text-muted-foreground">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <Typography.H2>My Skills</Typography.H2>
        <SkillsCarousel />
      </div>
    </section>
  )
}
