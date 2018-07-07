import React from 'react';

class Scroll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wheelUp: 'buttonTopActive',
            wheelDown: 'buttonDownDisable'
        }
    }

    
      
    // componentWillReceiveProps(nextProps){
    //     console.log("123",nextProps);
    //     if(nextProps.wheelStatus === 'active1'){
    //         this.setState({wheelUp:'buttonTopActive', wheelDown:'buttonDownDisable'});
    //     }
    // }

    render(props) {
        return (
            <div className="wheel" onClick={this.props.handleScroll}>
                <div className={this.state.wheelUp}>
                </div>
                <div className={this.state.wheelDown}>
                </div>
            </div>
        );
    }

}

export default Scroll;