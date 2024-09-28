import React from 'react'
import { Work } from '../../components'
import './works.css'

//Images
import StudentsProfile from '../../assets/projects/studentprofile.jpeg'
import DiscordBot from '../../assets/projects/discord-bot.png'
import TimeTableApp from '../../assets/projects/Time-table-page.png'
import ProfileApp from '../../assets/projects/Home.png'
import ExpenseTracker from '../../assets/projects/expense-tracker.png'
import Poster from '../../assets/projects/eranadan_thakkaram_2.jpg'

function Works() {
    return (
        <div className='works section-margin' id='works'>
        <h1 className='gradient-text'>Portfolio</h1>
        <h3>Check Out Some of My Projects.</h3>
            <div className='works-container'>
                <Work image={StudentsProfile} title="Students Profile" subTitle="Web Development" text="The student profile is a college management system. It works based on different user types and permissions. Filter users on certain conditions like by join year or department. The app is developed using the mern-stack." codeLink="https://github.com/tinkerhubemea/students-profile" />

                <Work image={DiscordBot} title="Bobby" subTitle="Discord Bot" text="Bobby is a discord bot that helps to find vaccination slots in your area and notify if a vaccine slot is available in your area. The bot is developed using nodeJs and hosted in AWS ec2 instance." codeLink="https://github.com/nahyansharvin/bobby-cowinbot" />

                </div>
        </div>
    )
}

export default Works
