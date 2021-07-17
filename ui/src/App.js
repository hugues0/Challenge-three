import React from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      isLoading: false,
    };
    this.onClickHandle = this.onClickHandle.bind(this);
  }

  onClickHandle = async (albumId) => {
    this.setState({ isLoading: true });
    const response = await axios.get(
      `http://localhost:10000/api/v1/album/${albumId}`
    );
    console.log(response);
    const data = await response.data.response;
    console.log(data);    
    data? this.setState({ photos: data, isLoading: false }) : this.setState({photos:[], isLoading:false})
  };

  render() {
    const { photos, isLoading } = this.state;
    return (
      <div className="photos-wrapper">
        <div className="content-wrapper">
          <Search searchHandle={this.onClickHandle} />

          {isLoading ? (
            <Loader type="Oval" color="black" height={50} width={50} />
          ) : (
            photos.map((photo) => (
              <div className="picture-container" key={photo.id}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <label>{photo.title}</label>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;
