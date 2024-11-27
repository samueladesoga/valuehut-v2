import Image from 'next/image'
import React from 'react'

function  Aboutcourse() {
  return (
    <div className="container px-4 xl:px-0 flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-5 md:gap-40 pt-16 md:pt-36">
    <div>
      <h1 className="text-6xl font-medium text-main font-primary">
        About this course
      </h1>
      <p className="text-sm font-secondary font-medium text-body">
        Professional Scrum Master (PSM) is an interactive, activity-based
        course where students gain a thorough understanding of
        Professional Scrum and the role of the Scrum Master. Students
        develop a deep understanding of the underlying principles of Scrum
        and the Agile mindset while learning the practices applied by
        successful Scrum Teams through a combination of discussion and
        exercises in class.
      </p>
    </div>
    <Image src={"/images/psm.png"} width={150} height={150} alt="image" />
  </div>
  )
}

export default  Aboutcourse
