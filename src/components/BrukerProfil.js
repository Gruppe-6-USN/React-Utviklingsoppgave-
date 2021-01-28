import React, {Component, useState} from 'react';
import * as Functions from './Functions'




export function BrukerProfil() {
    class ImageUpload extends Component {
        constructor(props) {
            super(props);
            this.state = { }
        }   
    }
    return (
    <div className="App">
        <div className="row">
            <div className="col s12 offset-m4 m4 card-panel">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />
                <form runat="server">
                <input type='file' id="imgInp" onChange="readURL(this)" />
                <img id="blah" src="#" alt="your image" />
                </form>
                <button className="btn waves-effect waves-light right">Last opp bilde</button>
            </div>
        </div>
    </div>
    );
    
}
export default BrukerProfil