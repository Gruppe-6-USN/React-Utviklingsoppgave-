const Registrering = () => {
    return ( 
    <div className="App">
      <div class="row">
            <div className="col s12 offset-m4 m4 card-panel">
                <form action="" className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" placeholder="Fornavn" className="validate"/>
                        </div>
                        <div className="input-field col s12">
                            <input type="text" placeholder="Etternavn" className="validate"/>
                        </div>
                        <div className="input-field col s12">
                            <input type="email" placeholder="Email" className="validate"/>
                        </div>
                        <div className="input-field col s12">
                            <input type="password" placeholder="Passord" className="validate"/>
                        </div>
                        <div className="input-field col s12">
                            <input type="password" placeholder="Gjennta Passord" className="validate"/>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light right">Registrer</button>
                </form>
            </div>
        </div>
    </div>
     );
}
 
export default Registrering;