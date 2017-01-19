class AppComponent extends React.Component {
	render() {
		return (
			<section className = 'site-wrap'>
				<h1>header</h1>
				<p>lorim...</p>
			</section>
		);
	}
}

ReactDOM.render(
	<AppComponent  />,
	document.getElementById("application")
);
