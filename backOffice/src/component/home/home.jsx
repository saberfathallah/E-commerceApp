import React from 'react';
import PieChart from '../statistics/pieChart';

const Home = () => (<PieChart />);
export default Home;

// import React, { Component } from 'react';
// import axios from 'axios';

// class ReactUploadImage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       file: null,
//     };
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//     this.onChange = this.onChange.bind(this);
//   }
//   onFormSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('myImage', this.state.file);
//     console.log( -> onFormSubmit -> formData', typeof formData);
//     const config = {
//       headers: {
//         'content-type': 'multipart/form-data',
//       },
//     };
//     axios.post('http://localhost:3011/orders/upload', formData, config)
//       .then((response) => {
//         console.log( -> onFormSubmit -> response', response);
//         alert('The file is successfully uploaded');
//       }).catch((error) => {
//         console.log( -> onFormSubmit -> error', error);
//       });
//   }
//   onChange(e) {
//     this.setState({ file: e.target.files[0] });
//   }

//   render() {
//     return (
//       <form onSubmit={this.onFormSubmit}>
//         <h1>File Upload</h1>
//         <input type="file" name="myImage" onChange={this.onChange} />
//         <button type="submit">Upload</button>
//       </form>
//     );
//   }
// }

// export default ReactUploadImage;
