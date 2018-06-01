import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Button from 'material-ui/Button';
import {LinearProgress} from 'material-ui/Progress';
import List from 'material-ui/List'
import {MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import styles from './styles.js';
import logo from './logo_cloud.svg';
import { Icon } from 'antd';
import MaterialIcon, {colorPallet} from 'material-icons-react';
import LeftMenuButton from './leftMenuButton.js'



const files = require('./files.json');

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#4ca2ff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    ripple: {
    	color: '#ffffff'
    }

  },
});

class FolderButton extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      bool: false,
	      clicked: false
	    }
  	}

  	alertValues=()=>{
  		this.setState({clicked: true})
  	}
	render() {
		if(this.props.clicked === this.props.name){
			return(
				<div style={{width: '100%', height: 48, marginBottom: 16}} onMouseEnter={() => this.setState({ bool: true })} onMouseLeave={() => this.setState({ bool: false })} onClick={this.alertValues}>
					<div className={'folderButtonSelected'} style={styles.folderButtonSelected} onClick={this.props.onClick}>
						
									<MaterialIcon icon="folder_open" color={'#ffffff'} size={32} />
									<label style={{marginLeft: 16, color: '#ffffff', fontSize: 12}}>{this.props.name}</label>
								</div>
				</div>
			)
		}else{
			return (
				<div style={{width: '100%', height: 48, marginBottom: 16}} onMouseEnter={() => this.setState({ bool: true })} onMouseLeave={() => this.setState({ bool: false })} onClick={this.alertValues}>
					{
						this.state.bool? (
							<div className={'folderButtonSelected'} style={styles.folderButtonSelected} onClick={this.props.onClick}>
					
								<MaterialIcon icon="folder_open" color={'#ffffff'} size={32} />
								<label style={{marginLeft: 16, color: '#ffffff', fontSize: 12}}>{this.props.name}</label>
							</div>
						):(
							<div className={'folderButton'} style={styles.folderButton} onClick={this.props.onClick}>
					
								<MaterialIcon icon="folder" color={'#4CA2FF'} size={32} />
								<label style={{marginLeft: 16, color: '#444D58', fontSize: 12}}>{this.props.name}</label>
							</div>

						)
					}
				</div>
			)
		}
	}
}



class FolderButton2 extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      bool: false,
	    }
  	}

  	render() {
  		return(
  			<div style={{width: '100%', height: 48, marginBottom: 16}} onMouseEnter={() => this.setState({ bool: true })} onMouseLeave={() => this.setState({ bool: false })} onClick={this.alertValues}>
					{
						this.state.bool? (
							<div className={'folderButtonSelected2'} style={styles.folderButtonSelected2}>
					
								<MaterialIcon icon="folder_open" color={'#ffffff'} size={32} />
								<label style={{marginLeft: 16, color: '#ffffff', fontSize: 12}}>{this.props.name}</label>
							</div>
						):(
							<div className={'folderButton2'} style={styles.folderButton2}>
					
								<MaterialIcon icon="folder" color={'#4CA2FF'} size={32} />
								<label style={{marginLeft: 16, color: '#444D58', fontSize: 12}}>{this.props.name}</label>
							</div>

						)
					}
			</div>
  		)
  	}
}

class FileButton extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      bool: false,
	    }
  	}

  	render() {
  		return(
  			<div style={{width: '100%', height: 48, marginBottom: 16}} onMouseEnter={() => this.setState({ bool: true })} onMouseLeave={() => this.setState({ bool: false })} onClick={this.alertValues}>
					{
						this.state.bool? (
							<div className={'fileButtonSelected'} style={styles.fileButtonSelected}>
					
								<div style={styles.fileIcon} className={'fileIcon'}>
									<div style={{height: 40, width: 80, backgroundColor: '#EAF4FF', top: 20, marginTop: 32, marginLeft: 8}} className={'fileExt'}>
										<label style={{color: '#4CA2FF'}}>{this.props.ext}</label>
									</div>
								</div>
								<label style={{marginLeft: 0, color: '#4CA2FF', fontSize: 12}}>{this.props.name}</label>
							</div>
						):(
							<div className={'fileButton'} style={styles.fileButton}>
					
								<div style={styles.fileIcon} className={'fileIcon'}>
									<div style={{height: 40, width: 80, backgroundColor: '#EAF4FF', top: 20, marginTop: 32, marginLeft: 8}} className={'fileExt'}>
										<label style={{color: '#4CA2FF'}}>{this.props.ext}</label>
									</div>
								</div>
								<label style={{marginLeft: 0, color: '#444D58', fontSize: 12}}>{this.props.name}</label>
							</div>

						)
					}
			</div>
  		)
  	}
}

class FolderButtonSelected extends React.Component {
	render() {
		return (
			<div style={{width: '100%', height: 48, marginBottom: 16}} >
				<div className={'folderButtonSelected'} style={styles.folderButtonSelected}>
				
							<MaterialIcon icon="folder_open" color={'#ffffff'} size={32} />
							<label style={{marginLeft: 16, color: '#ffffff', fontSize: 12}}>{this.props.name}</label>
				</div>
			</div>
		)
	}
}


class RenderFolders extends React.Component {

	showFolder=()=>{
		var folders = [];

		for(let i = 0; i<files['folders'][this.props.name]['folders']; i++){
			folders.push(
				<FolderButton2 name={'Base Elements'}/>
			)
		}
		return folders;
	}
	
	render() {
		return(
			<div className={'folders'} style={{backgroundColor: 'transparent'}}>
				
				{this.showFolder()}

			</div>
		)
	}
}


class RenderFiles extends React.Component {

	constructor(props){
		super(props);

		this.state={
			isLoading: true,
		}
	}

	componentWillMount(){
		//alert('Hi');
		setTimeout(() => {
		  this.setState({ isLoading: false });
		}, 2000);
	}

	showFiles=()=>{
		var file = [];

		for(let j = 0; j<files['folders'][this.props.name]['files']; j++){
			file.push(
				<FileButton name={'1410302' + j} ext={'.TXT'}/>
			)
		}
		file.push(
				<FileButton name={'Questions'} ext={'.PDF'}/>
			)
		return file;
	}
	
	render() {
		if(!this.state.isLoading)
			return(
				<div>
					<label style={styles.labelNormal}>FILES</label>
					<div className={'files'} style={{backgroundColor: 'transparent'}}>
						
						{this.showFiles()}

					</div>

				</div>
			)
		else{
			return(
				<LinearProgress style={{width: '100%+100', marginLeft: -16, marginTop: -16, backgroundColor: '#C5E0FC'}} variant={'indeterminate'} color={'primary'}/>
 			)
		}
	}
}


class FileExplorer extends React.Component {
	
	render() {

		if(this.props.name === 'none'){
			return <div style={{backgroundColor: 'white', borderRadius: 0}} className={'mainPageRightContent'}/>
		}
		if(files['folders'][this.props.name]['files'] === 0){
			if(files['folders'][this.props.name]['folders'] === 0){
				return <div style={{backgroundColor: 'white', borderRadius: 0}} className={'emptyFileExp'}>

						</div>
			}else{
				return <div style={{backgroundColor: '#ffffff', borderRadius: 0}} className={'mainPageRightContent'}>
					<label style={styles.labelNormal}>FOLDERS</label>
					<RenderFolders name={this.props.name}/>
				</div>
			}
		}else{
			if(files['folders'][this.props.name]['folders'] === 0){
				return <div style={{backgroundColor: '#ffffff', borderRadius: 0}} className={'mainPageRightContent'}>
					
					<RenderFiles name={this.props.name}/>
				</div>
			}else{
				return <div style={{backgroundColor: '#ffffff', borderRadius: 0}} className={'mainPageRightContent'}>
					<label style={styles.labelNormal}>FOLDERS</label>
					<RenderFolders name={this.props.name}/>
					
					<RenderFiles name={this.props.name}/>
				</div>
			}
		}
	}
}

class Main extends React.Component {

	constructor(props){
		super(props);
		this.state={
			clicked: 'none',
		}
	}

	returnFolders= ()=>{
		var folders = [];
		for (let i = 0; i<Object.keys(files['folders']).length; i++){
			folders.push(
				<FolderButton name={Object.keys(files['folders'])[i]} id={i} onClick={() => this.buttonClicked(Object.keys(files['folders'])[i])} clicked = {this.state.clicked}/>
			)
		}
		return folders;

	}

	buttonClicked = (folder)=>{
		//alert(folder);
		this.setState({clicked: folder});
	}

	render() {
		return (
		<MuiThemeProvider theme={theme}>
			<div className={'bg'}>

				<Paper style={styles.leftMenu} square={true} elevation={0} className={'leftMenu'}>
					<div style={{height: 80, width:'100%', backgroundColor: 'transparent'}} className={'logoBg'}>
						<img src={logo} style={{height: 36, width: 36}}/>
					</div>
					<div style={{height: 80, width:'100%', backgroundColor: 'transparent'}} className={'logoBg'}>
						
					</div>
					<LeftMenuButton id={'settings'} color={'gray'}/>
					<LeftMenuButton id={'files'} color={'red'}/>
				</Paper>

				<Paper style={{height: '100%', width: 2, backgroundColor: '#F0F0F1'}} square={true} elevation={0}>
				</Paper>
				<Paper style={{backgroundColor: '#F3F7F8'}} className={'leftOfMenu'} square={true} elevation={0}>
					<Paper style={{backgroundColor: '#fafbfc', height: 90, width: '100%'}} square={true} elevation={0}>
					
					</Paper>
					<Paper style={{backgroundColor: '#F0F0F1', height: 2, width: '100%'}} square={true} elevation={0}>
					
					</Paper>
					<Paper style={{backgroundColor: '#000000', height: '100%', width: '100%'}} className={'mainArea'} square={true} elevation={0}>
						<Paper style={{backgroundColor: '#FCFDFD'}} className={'details_mainPage'} elevation={0} square={true}>
						</Paper>

						<Paper style={{backgroundColor: '#F4F8F9'}} className={'mainPage'} elevation={0} square={true}>
							<Paper style={styles.mainPageHadding}  className={'mainPageHadding'} elevation={0} square={true}>
								<label>Files</label>
								<div style={{height: 20, width: 100, backgroundColor: 'white'}}>
						        
						          
						        </div>

							</Paper>
							<Paper style={styles.mainPageContent} elevation={0} square={true} className={'mainPageContent'}>
								<div style={{backgroundColor: '#ffffff', borderRadius: 0}} className={'mainPageLeftContent'}>
									<label style={{marginBottom: 8, fontSize: 12, color: '#444D58'}}>ROOT FOLDERS</label>
									<List className={'folderList'} classes={{'padding': 'listPadding'}} dense={true}>
										
										{this.returnFolders()}
									</List>
								</div>
								<FileExplorer name={this.state.clicked}/>
							
							</Paper>
						</Paper>
					</Paper>

				</Paper>
			</div>
		</MuiThemeProvider>

		)
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
//registerServiceWorker();
