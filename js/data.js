'use strict';

const create = React.createElement;

class FoodItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
        <a href="./appetizers.html">
            <div className="custom-card card-style">
                <img className="card-img-top" className="menu-image" src="./img/app.jpg"></img>
                <div className="card-body">
                    <h4 className="card-title">Appetizers</h4>					
                </div>
            </div>
        </a>
    );
  }
}

const domContainer = document.querySelector('#card-display');
ReactDOM.render(create(FoodItems), domContainer);