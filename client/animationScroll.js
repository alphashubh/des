import React from 'react';
import Scroll from './scroll';
import Swipeable from 'react-swipeable'
class AnimationScroll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            container1: 'containerOneActive',
            container2: 'containerTwoHidden',
            scrollButtonProp: 'active1',
        }
        this.handleScroll = this.handleScroll.bind(this);

    }
    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }
    handleScroll() {
        //   alert("123");
        if (this.state.container1 === 'containerOneActive') {
            this.setState({ container1: 'containerOneHidden', container2: 'containerTwoActive', wheelStatus: 'active1' });
            window.removeEventListener("wheel", this.handleScroll)
        }
        else {
            this.setState({ container1: 'containerOneActive', container2: 'containerTwoHidden', wheelStatus: 'active2' });
            window.removeEventListener("wheel", this.handleScroll)
        }
        window.setTimeout(() => {
            console.log('122222');
            window.addEventListener('wheel', this.handleScroll);
            console.log('122222');
        }, 500);
    }

    render() {
        return (
            <Swipeable
                onSwipedUp={this.handleScroll}
                onSwipedDown={this.handleScroll}
            >
                <Scroll wheelStatus={this.state.scrollButtonProp} handleScroll={this.handleScroll}
                />
                <div>
                    <div className={this.state.container1} >
                        <img className="pattern" src="assets/images/pattern.png" />
                        <img className="logo" src="assets/images/logo.png"></img>
                        <div className="subHeading">
                            Graphic Design
                    </div>
                        <div className="subText">
                            Branding | Print | Web & Mobile | Digital Art
                     </div>
                    </div>
                    <div className={this.state.container2} >
                        <img className="patternWhite" src="assets/images/patternWhite.png" />
                        <img className="logoWhite" src="assets/images/logoWhite.png"></img>
                        <div className="whiteContent">
                            <div className="line1">Our Website is</div>
                            <div className="line2">Under Maintenance</div>
                            <div className="line3">Contact us we are looking forward to solve</div>
                            <div className="line4">your design needs and inspiring projects</div>
                            <div className="mailBox">
                                <img src="assets/images/envelope.svg" className="mailImage"> Mail us</img>
                            </div>
                            <div className="horizontalLine"></div>
                            <div className="socialLink">
                                <a href="https://www.facebook.com/Deselkdesign/" target="_blank"><img src="assets/images/facebook.svg" className="socialImage"/></a>
                                <a href="#" target="_blank"><img src="assets/images/instagram.svg" className="socialImage" /></a>
                                <a href="#" target="_blank"><img src="assets/images/behance.svg" className="socialImage" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Swipeable>

        );
    }

}

export default AnimationScroll;