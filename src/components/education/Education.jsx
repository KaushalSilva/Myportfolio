import React from 'react'
import './education.css'
import '../workExperience/workexperience.css'

//Material Icons
import SchoolIcon from '@mui/icons-material/School';

import { TimelineBlock } from '..';


function Education() {
    return (
        <div className='education workexperience'>
            <div className='education-heading workexperience-heading'>
                <h2>Education</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='Bachelor Degree' duration='Oct 2022 - Present' company='Sri Lanka Institute of Information Technology (SLIIT)' text="Currently pursuing Undergraduate degree in Information Technology ." />

               

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='School' duration='2006 - 2021' company="St. Peter's College" text="Maths Stream In A/L" />
            </div>
        </div>
    )
}

export default Education
