import React from 'react';
import * as S from './Feedback.Elements';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const feedbackData = [
	{
		imgUrl: './images/img2.jpg',
		text: 'Great food, great place to hangout with friends and family',
	},
	{
		imgUrl: './images/img1.jpg',
		text: 'It was the best pizza in my life. Not too crispy not too soft, just the way I like it. The service was fast, the staff was really nice and always with a smile on the face.',
	},
	{
		imgUrl: './images/img3.jpg',
		text: 'The onion soup was great. And the portion is huge. I came out with a really full stomach.',
	},
];

const Feedback = () => {
	return (
		<S.ContentWrapper>
			<CarouselProvider
				naturalSlideWidth={300}
				naturalSlideHeight={400}
				totalSlides={feedbackData.length}
				visibleSlides={1}
				isPlaying={true}
				interval={3000}>
				<Slider>
					{feedbackData.map((data, index) => (
						<Slide index={index} key={index}>
							<S.Content>
								<S.Image src={data.imgUrl} alt='picture' />
								<S.ContentText>{data.text}</S.ContentText>
							</S.Content>
						</Slide>
					))}
				</Slider>
			</CarouselProvider>
		</S.ContentWrapper>
	);
};

export default Feedback;
