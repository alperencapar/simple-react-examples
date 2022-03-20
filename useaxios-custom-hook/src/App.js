import "./App.css";
import useAxios from "./Components/useAxios";

function App() {
	const { data: posts } = useAxios({
		url: "https://jsonplaceholder.typicode.com/posts/"
	});
	return (
		<div className="App">
			<div>testing 1</div>
			<div>
        <div className="posts">
				{posts &&
					posts.map((post) => (
							<div className="post" key={post.id}>
								<h2>{post.title}</h2>
								<p>{post.body} </p>
							</div>
					))}
          </div>
			</div>
		</div>
	);
}

export default App;
