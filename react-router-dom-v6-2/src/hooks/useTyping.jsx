import { useEffect, useState } from "react"

const useTyping = (texts, typingSpeed, deletingSpeed) => {
	const [currentTextIndex, setCurrentTextIndex] = useState(0)
	const [animatedText, setAnimatedText] = useState("")
	const [isDeleting, setIsDeleting] = useState(false)

	useEffect(() => {
		let currentIndex = currentTextIndex
		let isCurrentDeleting = isDeleting
		const currentText = texts[currentIndex]

		const typingInterval = setInterval(
			() => {
				if (isCurrentDeleting) {
					if (animatedText === "") {
						setIsDeleting(false)
						currentIndex = (currentIndex + 1) % texts.length
						setCurrentTextIndex(currentIndex)
					} else {
						setAnimatedText((prevText) => prevText.slice(0, -1))
					}
				} else {
					if (animatedText === currentText) {
						setTimeout(() => {
							setIsDeleting(true)
						}, 1000)
					} else {
						setAnimatedText(
							(prevText) =>
								prevText + currentText[prevText.length]
						)
					}
				}
			},
			isCurrentDeleting ? deletingSpeed : typingSpeed
		)

		return () => {
			clearInterval(typingInterval)
		}
	}, [
		animatedText,
		currentTextIndex,
		deletingSpeed,
		isDeleting,
		texts,
		typingSpeed,
	])

	return animatedText
}

export default useTyping
