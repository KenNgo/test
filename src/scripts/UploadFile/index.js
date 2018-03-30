import React, { Component } from 'react';
import fire from '../firebase/firebase';
import FileUploader from 'react-firebase-file-uploader';
class ProfilePage extends Component {
	state = {
		username: '',
		avatar: '',
		isUploading: false,
		progress: 0,
		avatarURL: ''
	};
	handleChangeUsername = (event) => this.setState({username: event.target.value});
	handleUploadStart = () => this.setState({isUploading: true, progress: 0});
	handleProgress = (progress) => this.setState({progress});
	handleUploadError = (error) => {
		this.setState({isUploading: false});
		console.error('forking ',error);
	}
	handleUploadSuccess = (filename) => {
		this.setState({avatar: filename, progress: 100, isUploading: false});
		fire.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
	};
	render() {
		return (
			<div>
				<form>
					<label>File Upload:</label>
					<br />
					{this.state.isUploading &&
						<p>Progress: {this.state.progress}</p>
					}
					{this.state.avatarURL &&
						<img src={this.state.avatarURL} />
					}
					<FileUploader
						accept="image/*"
						name="avatar"
						randomizeFilename
						storageRef={fire.storage().ref('images')}
						onUploadStart={this.handleUploadStart}
						onUploadError={this.handleUploadError}
						onUploadSuccess={this.handleUploadSuccess}
						onProgress={this.handleProgress}
					/>
				</form>
			</div>
		);
	}
}
export default ProfilePage;