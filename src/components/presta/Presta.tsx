import React from "react";
import { useNavigate } from "react-router-dom";

import CreateIcon from '@mui/icons-material/Create';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import BuildIcon from '@mui/icons-material/Build';

import './index.css';

/**
 *
 * @returns {JSX.Element} - Section which represent my prestations
 */

const Presta: React.FC = () => {

	const navigate = useNavigate();

	const handleNavigate = (path: string) => {
		navigate(`/${path}`);
	};

    return (
        <main className="presta" id="presta">
            <div className="presta_title">
                <h2>Mes préstations</h2>
            </div>
            <div className='presta_content'>
				<div className='presta_item' onClick={() => handleNavigate("Need")}>
					<CreateIcon/>
					<p>Evaluation des besoins</p>
				</div>
				<div className='presta_item'  onClick={() => handleNavigate("Dev")}>
					<IntegrationInstructionsIcon/>
					<p>Developpement du site</p>
				</div>
				<div className='presta_item'>
					<BuildIcon/>
					<p>Maintenance et amélioration</p>
				</div>
			</div>
        </main>
    );
};

export default Presta;
