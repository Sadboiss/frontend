const createReactClass = require('create-react-class');

const Utils = createReactClass({
	statics: {
		isEmpty: function (obj) {
			if (obj == null) return true;
			if (obj.length > 0) return false;
			if (obj.length === 0) return true;
			if (typeof obj !== "object") return true;
			for (var key in obj) {
				if (hasOwnProperty.call(obj, key)) return false;
			}
			return true;
		},
		hasNull: function (obj) {
			for (var key in obj) {
				if (obj[key] == null)
					return true;
			}
			return false;
		}
	},
	render() {
		return
	},
});

export default Utils;