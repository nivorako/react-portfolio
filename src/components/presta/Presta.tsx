import CreateIcon from '@mui/icons-material/Create';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import BuildIcon from '@mui/icons-material/Build';

import './index.css';

/**
 *
 * @returns {JSX.Element} - Section which represent my prestations
 */

const Presta = () => {
    return (
        <main className="presta" id="presta">
            <div className="presta_title">
                <h2>Mes préstations</h2>
            </div>
            <div className='presta_content'>
				<div className='presta_item'>
					<CreateIcon/>
					<p>Evaluation des besoins</p>
				</div>
				<div className='presta_item'>
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
