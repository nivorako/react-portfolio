import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import styled from 'styled-components';

const ContactContainer = styled.main.attrs({ className: 'contact-page' })` 
    margin: 0 auto;
    padding: 4rem 2rem;
    min-height: 100vh; 
    width: 100%;
    max-width: 100% !important; // S'assurer que le max-width du global ne s'applique pas
    overflow-x: hidden;
    color: ${({ theme }) => theme.text}; 
    background-color: ${({ theme }) => theme.background};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    label {
        color: ${({ theme }) => theme.text};
    }   
    
    input, textarea {
        background-color: ${({ theme }) => theme.surface};
        color: ${({ theme }) => theme.text};
        border: 1px solid ${({ theme }) => theme.border};
        
        &::placeholder {
            color: ${({ theme }) => theme.textSecondary};
            opacity: 0.7;
        }
    }
    
    @media (max-width: 768px) {
        padding: 8rem 0rem 2rem;
    }
`;

const ContactGrid = styled.div` 
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 4rem;
    min-height: 60vh;
    
    @media (max-width: 1024px) {
        gap: 2rem;
    }
    
    @media (max-width: 768px) { 
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        min-height: auto;
        padding: 1rem;
    }
`;

const Subtitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 3rem;
    max-width: 800px;
    line-height: 1.6;
    
    & > span {
        color: ${({ theme }) => theme.primary};
        font-weight: 600;
        display: block;
        margin-bottom: 1rem;
    }
`;

const ContactInfo = styled.div`
    flex: 1;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4rem;
    padding-left: 4rem;
    gap: 2rem;
    
    h2 {
        font-size: 2.5rem;
        margin: 0 0 2rem 0;
        width: 100%;
        text-align: left;
        color: ${({ theme }) => theme.primary};
    }
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        padding: 0;
        padding-left: 0;
        align-items: flex-start;
        //text-align: center;
        
        h2 {
            font-size: 2rem;
            text-align: left;
        }
    }
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    
    svg {
        font-size: 1.5rem;
        margin-right: 1rem;
        color: ${({ theme }) => theme.primary};
    }
`;

const ContactForm = styled.div`
    flex: 1;
    max-width: 600px;
    box-sizing: border-box;
    padding: 2rem;
    border-radius: 8px;
    
    @media (max-width: 1024px) {
        padding: 1.5rem;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        padding: .5rem;
        margin: 0;
    }
`;
 
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    box-sizing: border-box;
`;

const InputGroup = styled.div`
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    gap: 1.5rem;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Input = styled.input`
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding: 0.8rem 1rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.primary};
    }
`;

const TextArea = styled.textarea`
    padding: 0.8rem 1rem;
    width: 100%;
    max-width: 100%;
    font-size: 1rem;
    min-height: 150px;
    resize: vertical;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: border-color 0.3s ease;
    
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.primary};
    }
`;

const Button = styled.button`
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
`;

const ErrorMessage = styled.span`
    color: #ff4d4f;
    font-size: 0.875rem;
    margin-top: 0.25rem;
`;

const SuccessMessage = styled.div`
    color: #52c41a;
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
`;

const ErrorAlert = styled.div`
    color: #ff4d4f;
    background-color: #fff2f0;
    border: 1px solid #ffccc7;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
`;

const schema = yup.object().shape({
    firstName: yup.string().required('Le prénom est requis'),
    subject: yup.string().required('Le sujet est requis'),
    email: yup.string().email('Email invalide').required('L\'email est requis'),
    message: yup.string().required('Le message est requis'),
});

type FormData = yup.InferType<typeof schema>;

export default function NewContact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        console.log('Données du formulaire:', data);
        
        try {
            const response = await fetch('http://localhost:3001/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: 'onboarding@resend.dev',
                    to: 'nivo.rakoto@yahoo.fr',
                    subject: `Nouveau message de ${data.firstName}: ${data.subject}`,
                    text: `De: ${data.firstName} <${data.email}>\n\n${data.message}`,
                    html: `
                        <h2>Nouveau message de ${data.firstName}</h2>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <p><strong>Sujet:</strong> ${data.subject}</p>
                        <h3>Message:</h3>
                        <p>${data.message.replace(/\n/g, '<br>')}</p>
                    `,
                    replyTo: data.email,
                }),
            });

            const responseData = await response.json();
            
            if (!response.ok) {
                console.error('Server error response:', responseData);
                const errorMessage = responseData.details || responseData.error || 'Une erreur est survenue lors de l\'envoi du message';
                throw new Error(errorMessage);
            }

            console.log('Message envoyé avec succès:', responseData);
            reset();
            
            // Show success message to user
            // alert('Votre message a été envoyé avec succès !');
            
            return responseData;
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            throw error;
        }
    };

    return (
        <ContactContainer>
            <ContactGrid>
                <ContactInfo>
                    <h2>LET S DISCUSS</h2>
                    <ContactItem>
                        <FiPhone />
                        <span>+33 6 12 34 56 78</span>
                    </ContactItem>
                    <ContactItem> 
                        <FiMail />
                        <span>contact@exemple.com</span>
                    </ContactItem>
                    <ContactItem>
                        <FiMapPin />
                        <span>123 Rue de Paris, 75000 Paris, France</span>
                    </ContactItem>
                </ContactInfo>

                <ContactForm>
                    <Subtitle>
                        <span>Quelle est votre histoire ? </span>  
                        Discutons ensemble. Toujours disponible pour de beaux projets ou des opportunités professionnelles.
                    </Subtitle>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {isSubmitSuccessful && (
                            <SuccessMessage>
                                Votre message a été envoyé avec succès ! Je vous répondrai dès que possible.
                            </SuccessMessage>
                        )}
                        
                        {errors.root && (
                            <ErrorAlert>
                                {errors.root.message}
                            </ErrorAlert>
                        )}

                        <InputGroup>

                            <Input 
                                type="text" 
                                placeholder="Prénom" 
                                {...register('firstName')}
                                className={errors.firstName ? 'error' : ''}
                            />                           
                            {errors.firstName && (
                                <ErrorMessage>{errors.firstName.message}</ErrorMessage>
                            )}
                            
                            <Input 
                                type="email" 
                                placeholder="Email" 
                                {...register('email')}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && (
                                <ErrorMessage>{errors.email.message}</ErrorMessage>
                            )}
                            
                            <Input 
                                type="text" 
                                placeholder="Sujet" 
                                {...register('subject')}
                                className={errors.subject ? 'error' : ''}
                                />
                                {errors.subject && (
                                    <ErrorMessage>{errors.subject.message}</ErrorMessage>
                                )}
                            
                            <TextArea 
                                placeholder="Votre message" 
                                {...register('message')}
                                className={errors.message ? 'error' : ''}
                            />
                            {errors.message && (
                                    <ErrorMessage>{errors.message.message}</ErrorMessage>
                                )}
                            
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                            </Button>
                        </InputGroup>
                    </Form>
                </ContactForm>
            </ContactGrid>
        </ContactContainer>
    );
}
