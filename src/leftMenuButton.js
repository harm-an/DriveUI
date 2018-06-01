import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import styles from './styles.js';
import MaterialIcon, {colorPallet} from 'material-icons-react';
import file from './fileMenuButton.svg';
import settings from './settingsMenuButton.svg'
import selection from './leftMenuButtonSelected.svg'



export default class LeftMenuButton extends React.Component {
	render() {
		return (
			<div style={{height: 50, backgroundColor: 'transparent'}} className={'leftMenuButton'}>
				
				{/*<img src={selection} className={'leftMenuSelected'}/>*/}
						
			</div>

		)
	}


	
}

