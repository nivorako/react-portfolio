import styled from "styled-components";
import { Link } from "react-router-dom";

const PageContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 8rem 2rem 4rem;
    background: var(--background);
    color: var(--text);
    box-sizing: border-box;
`;

const Content = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;

const Title = styled.h1`
    color: var(--primary);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
`;

const Intro = styled.p`
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 3rem;
`;

const StudySection = styled.section`
    margin-bottom: 2.5rem;
    padding: 2rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
`;

const SectionTitle = styled.h2`
    color: var(--primary);
    font-size: 1.8rem;
    margin-bottom: 1rem;
`;

const SectionContent = styled.p`
    line-height: 1.7;
    opacity: 0.85;
`;

const SectionList = styled.ul`
    margin: 1rem 0 0;
    padding-left: 0;
    list-style-position: inside;
`;

const SectionParagraph = styled.div`
    margin: 1rem 0 0;
`;

const BackLink = styled(Link)`
    display: inline-block;
    margin-top: 2rem;
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;

    &:hover {
        color: var(--secondary);
    }
`;

const CaseStudy = () => {
    return (
        <PageContainer>
            <Content>
                <Title>Étude de cas - Familien</Title>

                <Intro>
                    Présentation du projet, de son contexte, des besoins
                    identifiés et des solutions mises en place.
                </Intro>

                <StudySection>
                    <SectionTitle>Problèmes</SectionTitle>
                    <SectionContent>
                        <p>Lorsqu'une personne est atteinte d'Alzheimer, plusieurs aidants interviennent souvent :</p>

                        <p>conjoint ;</p>
                        <p>enfants ;</p>
                        <p>auxiliaires de vie ;</p>
                        <p>professionnels de santé.</p>

                        <p>Les informations sont dispersées entre appels, messages, documents papier et emails.</p>

                        <p>Cette dispersion peut entraîner des oublis, des doublons ou une mauvaise coordination.</p>
                    </SectionContent>
                </StudySection>

                <StudySection>
                    <SectionTitle>Analyses</SectionTitle>
                    <SectionContent>
                        <p>Après étude du sujet et échanges avec des aidants, plusieurs besoins sont apparus :</p>
                        <SectionList>
                            <li>centraliser les informations</li>
                            <li>partager certains documents</li>
                            <li>gérer les rendez-vous</li>
                            <li>contrôler qui peut accéder à quoi</li>
                            <li>permettre à plusieurs aidants de collaborer</li>
                        </SectionList>
        
                    </SectionContent>
                </StudySection>

                <StudySection>
                    <SectionTitle>Solutions</SectionTitle>
                    <SectionContent>
                        <p>Familien permet :</p>
                        <SectionList>
                        <li>la gestion des profils patients ;</li>
                        <li>le partage sécurisé de documents ;</li>
                        <li>la coordination des aidants ;</li>
                        <li>la gestion des rôles et permissions ;</li>
                        <li>la centralisation des informations médicales.</li>
                        </SectionList>
                    </SectionContent>
                </StudySection>

                <StudySection>
                    <SectionTitle>Défis techniques</SectionTitle>
                    <SectionContent>
                        <SectionParagraph>
                            <h3>Gestion des roles</h3>
                        <p>Tous les utilisateurs ne doivent pas voir les mêmes informations.</p>
                        <p>J'ai mis en place un système de rôles permettant de définir précisément les accès selon le profil de l'utilisateur.</p>
                        </SectionParagraph>
                        <SectionParagraph>
                            <h3>Sécurité des données</h3>
                            <p>Les informations médicales étant sensibles, j'ai réfléchi à la protection des accès et à la séparation des permissions.</p>
                        </SectionParagraph>
                        <SectionParagraph>
                            <h3>Structure des données</h3>
                            <p>Les patients, aidants, documents et rendez-vous sont liés entre eux.</p>
                            <p>J'ai conçu une structure de données permettant de gérer ces relations de manière cohérente.</p>
                        </SectionParagraph>
                    </SectionContent>
                </StudySection>

                <StudySection>
                    <SectionTitle>Les choix techniques</SectionTitle>
                    <SectionContent>
                        <SectionParagraph>
                            <h3>Next JS</h3>
                            <p>Choisi pour son système de routage moderne, ses performances et son support du rendu serveur.</p>
                        </SectionParagraph>
                        <SectionParagraph>
                            <h3>TypeScript</h3>
                            <p>Utilisé pour améliorer la robustesse du code et limiter les erreurs lors du développement.</p>
                        </SectionParagraph>
                        <SectionParagraph>
                            <h3>MongoDB</h3>
                            <p>Adapté à la modélisation de données évolutives liées aux patients, aidants et documents..</p>
                        </SectionParagraph>
                        <SectionParagraph>
                            <h3>Payload</h3>
                            <p>Permet une gestion centralisée des contenus et simplifie certaines opérations d'administration.</p>
                        </SectionParagraph>
                        <SectionParagraph>
                            <h3>Vercel</h3>
                            <p>Déploiement simple et rapide avec intégration native à Next.js</p>
                        </SectionParagraph>
                        <SectionParagraph>
                            <h3>Jest</h3>
                            <p>Utilisé pour les tests unitaires et d'intégration du code.</p>
                        </SectionParagraph>
                    </SectionContent>
                </StudySection>

                <StudySection>
                    <SectionTitle>Ce que j’ai appris</SectionTitle>
                    <SectionContent>
                        <SectionParagraph>
                            <p>Ce projet m a permis d approfondir</p>
                        
                            <SectionList>
                                <li>la conception fonctionnelle ;</li>
                                <li>la modélisation de données ;</li>
                                <li>la gestion des rôles ;</li>
                                <li>l'architecture d'applications Next.js ;</li>
                                <li>l'intégration de MongoDB.</li>
                            </SectionList>
                        </SectionParagraph>
                    </SectionContent>
                </StudySection>
                <StudySection>
                    <SectionTitle>Perspective</SectionTitle>
                    <SectionContent>
                        <SectionParagraph>
                            <p>Fonctionnalités envisagées :</p>
                            <SectionList>
                                <li>notifications ;</li>
                                <li>calendrier partagé ;</li>
                                <li>messagerie interne ;</li>
                                <li>génération de rapports ;</li>
                                <li>amélioration des permissions.</li>
                            </SectionList>
                        </SectionParagraph>
                    </SectionContent>
                </StudySection>
                <StudySection>
                    <SectionTitle>Conclusion</SectionTitle>
                    <SectionContent>
                        <SectionParagraph>
                            <p>Ce projet me permet de mettre en pratique mes compétences en développement web et de découvrir de nouvelles technologies. J'apprends à gérer un projet de A à Z, de la conception à la mise en production.</p>
                        </SectionParagraph>
                    </SectionContent>
                </StudySection> 

                <BackLink to="/">Retour à l’accueil</BackLink>
            </Content>
        </PageContainer>
    );
};

export default CaseStudy;