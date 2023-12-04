import React from "react";
import styled from "@emotion/styled";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import "./index.css";

interface LiProps {
	isEven: boolean;
  }

interface WorkItemProps {
	title: string;
	img: string;
	desc: string;
	alt: string;
	details: string[];
	link: string;
  }


/**
 * Returns a card that represents every detail for each project
 * @returns {JSX.Element}
 */
const WorkItem: React.FC<WorkItemProps & { expanded: boolean; onExpandClick: () => void }> = ({
	title, 
	img, 
	desc, 
	alt, 
	details,
	link,
	expanded,
	onExpandClick
}): JSX.Element => {

	return (
			<Card>
				<CardHeader>
					{title}
				</CardHeader>
				<CardImgContainer>
					<CardImg src={img} alt={alt} />
				</CardImgContainer>
				<CardDesc>
					{desc}
				</CardDesc>
				<CardAction onClick={onExpandClick}>
					{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}					
				</CardAction>
				{
					expanded ? (
						<CardContent>
								<CardContentTitle>
									Compétences acquises : 
								</CardContentTitle>
								{details.map((detail, index) => {
									return (											
											<Li key={index} isEven={index % 2 === 0}>
												{detail}
											</Li>
									)
								})}	
								<Link>
									<a href={link}>Voir le site par ici</a>	
								</Link>
											
						</CardContent>
					) : null
				}
			</Card>
	)
}

const Card = styled.div`
	width: 100%;
	height: 100%;
	padding: .5rem;
	background-color: var(--primary);
	color: var(--secondary);
	border-radius: var(--borderRadius);
`;

const CardHeader = styled.h3`
	width: 100%;
	text-align: center;
	
`;

const CardImgContainer = styled.div`
	width: 100%;
	height: 200px;
	margin: auto;
	border-radius: var(--borderRadius);
`;

const CardImg = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	border-radius: var(--borderRadius);
`;

const CardDesc = styled.h4`
	margin-top: 2rem;
	text-align: center;
`;

const CardAction = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

const CardContent = styled.div`
	margin-bottom: 1rem;
`;

const CardContentTitle = styled.h4`
	border-bottom: thin var(--secondary) solid; 
	padding: .5rem;
	margin-bottom: 2rem;
`;

const Li = styled.li<LiProps>`
	padding: .5rem;
	border-radius: var(--borderRadius);
	line-height: 2rem;
	background-color: ${(props) => (props.isEven ? 'var(--quartenary)' : 'var(--primary)')};
`;

const Link = styled.div`
	width: 100%;
	padding: 2rem;
	display: flex;
	justify-content: center;
	transition: all .5s ease;
	&:hover{
		cursor: pointer;
		transform: scale(1.05);
		filter: blur(1px);
	}
`;
export default WorkItem
