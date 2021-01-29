import React, { Component } from 'react';
import * as Functions from './Functions'
import {storage} from '../server/firebase';



export function BrukerProfil() {
    class ImageUpload extends Component {
        constructor(props) {
            super(props);
            this.state = {
                image: null,
                url: null
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleUpload = this.handleUpload.bin(this);
        }
    }
    const handleChange = e => {
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }
   


    return (
    <div className="App">
        <div className="row">
            <div className="col s12 offset-m4 m4 card-panel">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />
                <form runat="server">
                    <p>Last opp/endre profilbilde: </p>
                <input type='file' id="imgInp" onChange="readURL(this)"/>
                </form>
                <button className="btn waves-effect waves-light right" >Last opp bilde</button>
            </div>
        </div>
    </div>
    );
    
}
export default BrukerProfil