import React, {useEffect} from 'react';

import { styled , Theme,  createTheme } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

// import { useNavigate } from 'react-router-dom';
import Weare from '../../assets/WeareToWebp.webp';
import Fisheye from '../../assets/Fisheye.png';
import Kasa from '../../assets/kasa.png';
import Booki from '../../assets/Booki.png';
import PortFolio from '../../assets/MyPortfolio.png';
import './index.css';

/**
 * Interface decsribing the data structure for each work Item
 * @interface WorkData
 */

interface WorkData {
    img: string;
    alt: string;
    title: string,
    details : string[],
    desc: string,
    link: string
}

/**
 *  Déclaration de l'interface ExpandMoreProps
 */

interface ExpandMoreProps extends IconButtonProps {
    theme: Theme;
    expand: boolean;
  }

/**
 * Component that displays all of my work in the form of a clickable card
 * @function Work
 * @returns {JSX.Element}
 */

const Work: React.FC = () => {

    let n=0;
    useEffect(() => {
        showSlide(n);
    }, []);

    const showSlide = (n: number) => {
        
        const workItem = document.getElementsByClassName("work_item") as HTMLCollectionOf<HTMLElement>;
        const length = workItem.length;
        if(workItem){
            for(let i=0 ; i < length ; i++){
                workItem[i].style.display = "none";
            }
        }
        workItem[n].style.display = "block";
        // workItem[n + 1].style.display = "block";
        // workItem[n + 2].style.display = "block";
    };

    const worksData: WorkData[] = [
        { 
            img: Weare, 
            alt: 'weare2gether',
            title: 'WEARE 2GETHER',
            desc: 'Site de mise en relation.',
            details: [
                'Création de la maquette avec FIGMA',
                'Utilisation de Redux et Material UI',
                'Utilisation de Back4app',
                "Création d'une page admin qui permet de gérer le site",
            ],
            link: 'https://weare2gether-hncxqzflp-nivorako.vercel.app/',
        },
        { 
            img: Fisheye, 
            alt: 'fisheye',
            title: 'Fish Eye',
            desc: 'Projet OpenClassRooms',
            details: [
                "Intégration d'une maquette FIGMA avec html, css et js",
                "Construction d'une page dynamique",
                "Construction d'un site accessible pour tous",
            ],
            link: 'https://nivorako.github.io/P6-Front-End-Fisheye/'
        },
        { 
            img: Kasa, 
            alt: 'kasa',
            title: 'Kasa',
            desc: 'Projet OpenClassRooms',
            details: [
                'Utilisation Create react app',
                'Logique de routage fonctionnelle',
                'Utilisation react hooks',
                'Utilisation de SASS',
            ],
            link: 'https://kasa-je8bk4yxl-nivorako.vercel.app/'
        },
        { 
            img: Booki,
            alt: 'booki',
            title: 'Booki',
            desc: 'Projet OpenClassRooms',
            details: [
                "Intégration d'une maquette FIGMA avec html et css",
                'Site responsive',
            ],
            link: 'https://nivorako.github.io/projet-P2/',
        },
        { 
            img: PortFolio, 
            alt: 'portfolio',
            title: 'Mon Portfolio',
            desc: 'Projet Personnel',
            details: [
                "Intégration d'une maquette FIGMA avec html et css",
                'Site responsive',
                'etc etc ....',
            ],
            link: '#', 
        },
    ];

    const ExpandMore: React.FC<ExpandMoreProps> = styled((props: ExpandMoreProps) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        color: "var(--black)",
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    }));

    const theme = createTheme();
    const [expanded, setExpanded] = React.useState(false);

    function handleOnClickLeftA(n: number){

        const items = document.getElementsByClassName("work_item")
        const length = items.length
        if(n < length - 1) {
            n++;
            showSlide(n);
        }
        else if(n === length - 1) showSlide(0) ;     
    }

    function handleOnClickRightA(n: number){
        const items = document.getElementsByClassName("work_item");
        const length = items.length;

        if(n > 0) {
            n--
            showSlide(n)
        }
        else if(n === 0) {
            n = length - 1;
            showSlide(n);
        }
    
        showSlide(n);
    }

    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    return (
        <section className="work" id="work">
            <div className="work_title">
                <h2>Mes réalisations</h2>
            </div>
            <ul className="work_items">
                {worksData.map((work, index) => {
                    return(
                        
                        <li key={index} className="work_item" >
                            <Card
                                className='work_card'  
                                sx={{
                                    width:300,
                                    boxShadow: "1px 5px 5px 0 grey"
                                }}
                            >
                                <CardHeader
                                    title={work.title}
                                    sx={{
                                        textAlign: "center"
                                    }}
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={work.img}
                                    alt={work.alt}
                                />
                                <CardContent>
                                    <Typography 
                                        variant="body2" 
                                        color="text.secondary" 
                                        sx={{
                                            textAlign: "center"
                                        }}
                                    >
                                        {work.desc}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <ExpandMore  
                                        theme={theme}
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse  in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <h4 className='collapse_title'>Compétences acquises :</h4>
                                        {work.details.map((detail, index) =>(
                                            <div key={index}>  
                                                <p>{detail} </p>
                                            </div> 
                                        ))}
                                    </CardContent>
                                </Collapse>
                            </Card>
                            <div className='work_controllShow'>
                                <KeyboardDoubleArrowLeftIcon
                                    className='arrow'
                                    onClick={() => {
                                        handleOnClickLeftA(index)
                                    }}
                                />
                                <p className="work__count">{index + 1} / {worksData.length} </p>
                                <KeyboardDoubleArrowRightIcon
                                    className='arrow' 
                                    onClick={() => {
                                        handleOnClickRightA(index)
                                    }}
                                />
                            </div>                           
                        </li>
                       
                    )
                })}
            </ul>
           
           
        </section>
    );
};

export default Work;
