import React, { Component } from 'react'
import './Profile.css';
import profile from '../profile.png'



const citation="Conseil du jour: « Quand on ne peut revenir en arrière, on ne doit se préoccuper que de la meilleure façon d’aller de l’avant. »  – Paulo Coelho"

export class Profile extends Component {
    constructor(props) {
        super(props)
        this.person = {
        fullName:"JARRAY Fathia",
        citation:citation, 
        imgSrc:profile, 
        profession:"Ingénieur Hydraulique et Aménagement Rural"
        }
        this.state={
        show:false
        }
        this.state = {date: new Date()}
    }

    toggle = () => {
        this.setState({show: !this.state.show})
    }
    render() {
        return (
            <div >
            <button className='btn' onClick={this.toggle} style={{fontSize:30}}>Show</button>
            {this.state.show && (
                <div className='Profile'>
                    <h2>{this.person.fullName}</h2>
                    <br/>
                    <h4>{this.person.profession}</h4>
                    <br/>
                    <img src={this.person.imgSrc} alt='uuu'  style={{width: 182,height: 180,borderRadius:5}}/>
                    <br/>
                    <p style={{textJustify:'justify'}}>{this.person.citation}</p>
                </div>
                )}
                <h4>{this.date}</h4>
            </div>
            );
        }
    }

export default Profile