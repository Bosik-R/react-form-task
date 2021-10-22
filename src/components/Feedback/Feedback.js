import React from 'react';
import * as S from './Feedback.Elements';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const feedbackData = [
	{
		imgUrl: './images/img2.jpg',
		text: 'Great food, great place to hangout with friends and family',
		author: 'John Doe',
	},
	{
		imgUrl: './images/img1.jpg',
		text: 'It was the best pizza in my life. Not too crispy not too soft, just the way I like it. The service was fast, the staff was really nice and always with a smile on the face.',
		author: 'Jane Doe',
	},
	{
		imgUrl: './images/img3.jpg',
		text: 'The onion soup was great. And the portion is huge. I came out with a really full stomach.',
		author: 'James Doe',
	},
];

const Feedback = () => {
	return (
		<S.FeedbackWrapper>
			<CarouselProvider
				naturalSlideWidth={400}
				naturalSlideHeight={500}
				totalSlides={feedbackData.length}
				visibleSlides={1}
				isPlaying={true}
				interval={3000}
			>
				<Slider>
					{feedbackData.map((data, index) => (
						<Slide index={index} key={index}>
							<S.ContentWrapper>
								<S.ContentImage src={data.imgUrl} alt='picture' />
								<S.Content>
									<S.ContentText>{data.text}</S.ContentText>
									<S.Author>{data.author}</S.Author>
								</S.Content>
							</S.ContentWrapper>
						</Slide>
					))}
				</Slider>
			</CarouselProvider>
		</S.FeedbackWrapper>
	);
};

export default Feedback;
