const Avstemming = () => {
    return ( 
    <div className="App">
        <div className="row">
        <h3>Stem på en kandidat</h3>
        <p>Trykk på "stem" for å stemme på en kandidat. Kandidaten vil da få en stemme</p>
            <div className="col width-margin m6 card-panel nominerKort"  >
                <p  >  </p>
                <p  >  </p>
                <button  className="float-right btn waves-effect waves-light">Stem</button> 
            </div>
        </div>
    </div>
     );
}
 
export default Avstemming;