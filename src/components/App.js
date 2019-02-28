import React from 'react'

import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { language: 'english'}
    }

    render() {
        return (
            <div className="ui container">
                <i className="us flag" onClick={() => this.setState({ language: 'english'})}></i>
                <i className="es flag" onClick={() => this.setState({ language: 'spanish'})}></i>
                
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider> 
            </div>
            
        )
    }
       
}

export default App