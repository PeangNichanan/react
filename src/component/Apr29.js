import React from 'react'
import solve  from '../img/solve.jpg'
import show from '../img/show.jpg'
import { Link } from 'react-router-dom'
import '../css/Theme.css'

export default function Apr29() {
    return (
        <div className="all">
            <table className="tab">
                <tr>
                    <th className="tablinks"><Link to = "/">PROFILE</Link></th>
                    <th className="tablinks"><Link to = "/May2">2 May 20</Link></th>
                    <th className="tablinks"><Link to = "/May9">9 May 20</Link></th>
                    <th className="tablinks"><Link to = "/May16">16 May 20</Link></th>
                    <th className="tablinks"><Link to = "/May24">24 May 20</Link></th>
                    <th className="tablinks"><a href="https://youyyk.github.io">HOME</a></th>
                </tr>
            </table>
            <br></br>
            <h2 style = {{fontFamily: "warmheart",fontSize:"25pt"}}>Solving</h2>
            <img src= {solve} style = {{width:"30%" , height: "35%"}}></img><br></br>
            <h2 style = {{fontFamily: "warmheart",fontSize:"25pt"}}>Output</h2>
            <img src= {show} style = {{width:"30%" , height: "22%"}}></img>

        </div>
    )
}
