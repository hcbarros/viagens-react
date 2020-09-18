import React from 'react';
import ReactDOM from 'react-dom'
import Search from '../imagens/Search.svg';
  

export default class MyComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedOption: "idaVolta",
            valorForm: ""
        };

        this.radio = React.createRef();
        this.inputOrigem = React.createRef();
        this.inputDestino = React.createRef();
        this.inputDataIda = React.createRef();
        this.inputPessoas = React.createRef();
        
        this.btn = React.createRef();
        
        this.clickBtn = this.clickBtn.bind(this);
    }


    onValueChange = (event) => {
        this.setState({
          selectedOption: event.target.value
        });        
    }

 
    clickBtn = () => {

        const radioBuscaValue = this.state.selectedOption; 
        
        const origem = this.inputOrigem.current.value;
        let destino = this.inputDestino.current.value;
        const dataIda = this.inputDataIda.current.value;
        const nPessoas = this.inputPessoas.current.value;    
        
        if(!/\S/.test(destino)) destino = origem;

        if(!/\S/.test(origem) || !/\S/.test(destino) || !/\S/.test(dataIda) || !/\S/.test(nPessoas)) {
            alert("Todos do campos devem ser preenchidos com algum valor!");
            return;
        }

        let num = "";
        let array = nPessoas.split(''); 
        let find = false;       
        for(let i in array) {
            if(Number.isInteger(parseInt(array[i]))) {
                num+= array[i];
                find = true;
            }
            else if(find) break;
        }

        if(!Number.isInteger(parseInt(num))) {
            alert('No campo "Número de pessoas" deve haver um valor numérico!');
            return;
        }

        const obj = {
                "origem": origem, 
                "destino": destino, 
                "data": dataIda, 
                "pessoas": parseInt(num)
            };
        
        this.setState({
            valorForm: JSON.stringify(obj,null,4)
        });                    
    }


    render() {

        return (

            <div id="containerForm">     
                <form>
                <div id="boxForm" >              
                    
                    <div id="radios">                  
                        <div className="radio">

                                <label className="containerRadio">
                                    <input type="radio" name="radioBusca" value="idaVolta" 
                                            checked={this.state.selectedOption === "idaVolta"}
                                            onChange={e => this.onValueChange(e)} />
                                    <span className="checkmark"></span>
                                </label>
                                <a>Ida e volta</a>

                        </div>             
                        <div className="radio">                    

                                <label className="containerRadio">
                                    <input type="radio" name="radioBusca" value="soIda" 
                                            checked={this.state.selectedOption === "soIda"} 
                                            onChange={e => this.onValueChange(e)} />
                                    <span className="checkmark"></span>
                                </label>
                                <a>Só ida</a>

                        </div>
                        <div className="radio">                    

                                <label className="containerRadio">
                                    <input type="radio" name="radioBusca" value="soVolta" 
                                            checked={this.state.selectedOption === "soVolta"} 
                                            onChange={e => this.onValueChange(e)} />
                                    <span className="checkmark"></span>
                                </label>
                                <a>Só volta</a>

                        </div>

                    </div>                 

                    <div id="inputs">
                    
                        <label>Origem
                        <input id="inputOrigem" className="inputsForm" type="text" ref={this.inputOrigem} />
                        </label>
                        <label>Destino
                        <input id="inputDestino" className="inputsForm" type="text" ref={this.inputDestino} placeholder="Insira a cidade ou destino" />
                        </label>
                        <label>Data de Ida / Retorno
                        <input id="dataIda" className="inputsForm" type="text" ref={this.inputDataIda} />
                        </label>
                        <label>Número de pessoas
                        <input id="nPessoas" className="inputsForm" type="text" ref={this.inputPessoas} />
                        </label>
                    </div> 

                </div>
                
                </form>
                
                <div id="footer">

                    <div></div>
                    <button id="btnBuscar" onClick={this.clickBtn}>
                        <img src={Search} />
                        <a>Busque as viagens</a>
                    </button>
                </div>               

                <div id="valorForm">
                    <div>
                        <a>VALOR DO FORM</a> <br/>
                        <a contentEditable="true">
                            <pre>{this.state.valorForm}</pre>
                        </a>
                    </div>
                </div>


            </div>
        );

    }
}
