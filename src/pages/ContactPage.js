import React from 'react';
import '../styles/ContactPage.css';


class ContactPage extends React.Component{
    state={
        value:'',
    }
    handleChangeValue=(e)=>{
        this.setState({
            value:e.target.value,
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            value:'',
        })
    }
    componentDidMount(){
        // usePrompt("Hello from usePrompt -- Are you sure you want to leave?", true);
    }
    render(){
        return(
     
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas</h3>
                    <textarea value={this.state.value} onChange={this.handleChangeValue} placeholder="Wpisz wiadomość..."></textarea>
                    <button>Wyślij</button>
                </form>
             
            </div>
        );
    }
}
export default ContactPage;