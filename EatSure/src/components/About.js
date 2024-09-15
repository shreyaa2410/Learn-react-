import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faGithub ,faInfo,faLocation} from '@fortawesome/free-solid-svg-icons'; 
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, //state variables
      count1: 1, //state variables
      apiData: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shreyaa2410");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({
      apiData: jsonData,
    });
  }
  render() {
    // const {name,place}= this.props;
    const { count, count1 } = this.state;
    const { avatar_url, name, bio,location , login,
      html_url} = this.state.apiData;
    return (
      <>
        {/* <h1>About {name} and {place}</h1>
            <p> count-1:{count}</p>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                    count1:this.state.count1+2,
                })
            }}>counter</button>
            <p>count-2: {count1}</p> */}
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-10 pb-4">
              <div className="sm:text-large text-center text-gray-700"> 
                    <p> EatSure is a modern Front-end Food Ordering Web Application, which has been integrated with Swiggy's Live API to provide a seamless dining experience. Our platform allows users to explore a wide range of restaurants, view detailed menu's, search for top-rated restaurants and add items to their cart.</p>
                  </div>
                <div className="about__info my-10 p-4 sm:p-6 bg-gray-100 rounded-lg shadow-lg">
                <img className="about__img" src={avatar_url} />
                <div className="about__text">
                  <h2 className="pb-3 font-bold text-blue-500">Devloped By {name}</h2>
                  <div className="">
                  <p><FontAwesomeIcon icon={faInfo} className="text-yellow-500"/>  {bio}</p>
                  <p><FontAwesomeIcon icon={faLocation} className="text-yellow-500"/>  {location}</p>
                  <a href={html_url}><p><FontAwesomeIcon icon={faGithub} className="text-yellow-500"/> {login}</p></a>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
