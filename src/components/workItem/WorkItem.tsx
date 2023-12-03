import React from "react";
import styled from "@emotion/styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import "./index.css";

interface WorkItemProps {
	title: string;
	img: string;
	desc: string;
	alt: string;
	details: string[];
  }


/**
 * Returns a card that represents every detail for each project
 * @returns {JSX.Element}
 */
const WorkItem: React.FC<WorkItemProps> = ({title, img, desc, alt, details}): JSX.Element => {

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
		};
		console.log("expanded :", expanded);
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
				<CardAction onClick={handleExpandClick}>
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
											<Li key={index}>
												{detail}
											</Li>
									)
								})}					
						</CardContent>
					) : null
				}
			</Card>
	)
}

const Card = styled.div`
	width: 300px;
	min-height: 400px;
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
	padding-bottom: .5rem;
`;

const Li = styled.li`
	line-height: 2rem;
`;

export default WorkItem