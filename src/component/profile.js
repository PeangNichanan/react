import React from 'react'
import pro from '../img/w_mep.JPG'
import { Link } from 'react-router-dom'
import '../css/Theme.css'




export default function profile() {
    return (
        <div className="all">
            <table className="tab">
                <tr>
                    <th className="tablinks"><Link to = "/Apr29">29 Apr 20</Link></th>
                    <th className="tablinks"><Link to = "/May2">2 May 20</Link></th>
                    <th className="tablinks"><Link to = "/May9">9 May 20</Link></th>
                    <th className="tablinks"><Link to = "/May16">16 May 20</Link></th>
                    <th className="tablinks"><Link to = "/May24">24 May 20</Link></th>
                    <th className="tablinks"><a href="https://youyyk.github.io">HOME</a></th>
                </tr>
            </table>
            <img className = "pic" src= {pro}></img>

            <table className="tb">
                <tr className="odd">
                    <th className="topic">Name</th>
                    <td>Nichanan</td>
                </tr>
                <tr className="even">
                    <th className="topic">Surname</th>
                    <td>Chatuparisutisin</td>
                </tr>  
                <tr className="odd">
                    <th className="topic">Nickname</th>
                    <td>Peang</td>
                </tr>    
                <tr className="even">
                    <th className="topic">Student ID</th>
                    <td>6210450571</td>
                </tr>
                <tr className="odd">
                    <th className="topic">Programming Skill</th>
                    <td>Blender, Python, C, C++</td>
                </tr>    
                <tr className="even">
                    <th className="topic">Sport</th>
                    <td>Badminton, Taekwondo</td>
                </tr>                 
            </table>
            
        </div>
    )
}
