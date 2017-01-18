class AppComponent extends React.Component {
	render() {
		return React.createElement(
			"section",
			{className: "site-wrap"},
			React.createElement("h1", null, "Header"),
			React.createElement("p", null, "blah"));
	}
}

ReactDOM.render(
	React.createElement(AppComponent, null),
	document.getElementById("application")
);