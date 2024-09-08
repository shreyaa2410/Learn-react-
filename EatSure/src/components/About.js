import React from "react";
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
    const { avatar_url, name, bio } = this.state.apiData;
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
              <div className="col-10">
                <h2>{name}</h2>
                <p>{bio}</p>
                <img className="about__img" src={avatar_url} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
