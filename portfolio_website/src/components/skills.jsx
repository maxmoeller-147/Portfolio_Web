import { useState } from "react"
import SkillAccordion from "./ui/accordion"
import { techCategories } from "../data/data_skills"


export default function Skills() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-sm uppercase tracking-[0.3em] text-secondary">
            Tools & Technologies
          </span>

          <h2 className="mt-4 text-4xl font-semibold uppercase tracking-[0.08em] text-primary md:text-5xl">
            Tech Stack
          </h2>
        </div>

        <div className="space-y-4">
          {techCategories.map((category, index) => (
            <SkillAccordion
              key={category.title}
              category={category}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}