import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { sliderItems } from "./SliderData";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
`;

const ArrowContainer = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	${(props) => (props.direction === "left" ? "left: 25px;" : "right: 25px;")}
	background-color: #fff;
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(5.5px);
	border: 1px solid rgba(255, 255, 255, 0.18);
	border-radius: 50%;
	margin: auto;
	cursor: pointer;
	z-index: 3;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;
const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
    justify-content: center;
`;

const ImgContainer = styled.div`
	flex: 1;
    padding-left: 2em;
`;
const Img = styled.img`
	max-width: 50vw;
	max-height: 85vh;
	width: auto;
`;
const InfoContainer = styled.div`
	flex: 1;
	/* height: 100%; */
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 76px;
`;
const Description = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`;

const Slider = () => {
	const [sliderIndex, setSliderIndex] = useState(0);
	console.log(sliderIndex);

	const handleClick = (direction) => {
		if (direction === "left") {
			setSliderIndex(
				sliderIndex > 0 ? sliderIndex - 1 : sliderItems.length - 1
			);
		} else {
			setSliderIndex(
				sliderIndex < sliderItems.length - 1 ? sliderIndex + 1 : 0
			);
		}
	};

	return (
		<Container>
			<ArrowContainer
				direction="left"
				onClick={() => handleClick("left")}
			>
				<FaArrowLeft />
			</ArrowContainer>

			<Wrapper sliderIndex={sliderIndex}>
				{sliderItems.map((item) => (
					<Slide>
						<ImgContainer>
							<Img src={item.img} />
						</ImgContainer>

						<InfoContainer>
							<Title>{item.title}</Title>

							<Description>{item.description}</Description>
							<Button>Buy Now!</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>

			<ArrowContainer
				direction="right"
				onClick={() => handleClick("right")}
			>
				<FaArrowRight />
			</ArrowContainer>
		</Container>
	);
};

export default Slider;
