import lity from 'lity';
import $ from 'jquery';


const App = {
	init () {
		lity.init();
	},
	bindEvents () {

	},

};

export default App;

document.addEventlistener('DomContentLoaded', App.init());