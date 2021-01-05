import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />, 
    },
    {
        title: 'About Me',
        icon: <FaIcons.FaUser />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Personal Statement',
                path: '/aboutme/personalstatement',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Education',
                path: '/aboutme/education',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Hobbies',
                path: '/aboutme/hobbies',
                icon: <IoIcons.IoIosPaper />
            },
        ]
    },
    {
        title: 'Projects',
        icon: <FaIcons.FaDraftingCompass />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'This Site',
                path: '/projects/portfolio',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Project 2',
                path: '/projects/project2',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Project 3',
                path: '/projects/project3',
                icon: <IoIcons.IoIosPaper />
            },
        ]
    },
    {
        title: 'Contact Me',
        path: '/contact',
        icon: <FaIcons.FaEnvelope />,
    },
    {
        title: 'Music',
        path: '/music',
        icon: <FaIcons.FaFileAudio />,
    }
]