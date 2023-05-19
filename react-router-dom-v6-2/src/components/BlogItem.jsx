import PropTypes from "prop-types"

const BlogItem = ({ title, content }) => {
	return (
		<div>
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	)
}
BlogItem.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
}

export default BlogItem
