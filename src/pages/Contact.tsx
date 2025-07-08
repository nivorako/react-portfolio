import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import styled from 'styled-components';

const ContactContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    min-height: 100vh;
    padding-top: 80px;
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
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  max-width: 800px;
  line-height: 1.6;
   & > span {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
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
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
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
  width: fit-content;
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

const schema = yup.object().shape({
  firstName: yup.string().required('Le prénom est requis'),
  subject: yup.string().required('Le sujet est requis'),
  email: yup.string().email('Email invalide').required('L\'email est requis'),
  message: yup.string().required('Le message est requis'),
});

type FormData = yup.InferType<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    alert('Message envoyé avec succès !');
    reset();
  };

  return (
    <ContactContainer>
      <ContactGrid>
        <ContactInfo>
          <h2>LET'S DISCUSS</h2>
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

        <div>
        <Subtitle>
            <span>Quelle est votre histoire ?</span>  Discutons ensemble. Toujours disponible pour des beaux projets ou des opportunités professionnelles.
        </Subtitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <div>
                <Input 
                  type="text" 
                  placeholder="Prénom" 
                  {...register('firstName')}
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
              </div>
              <div>
                <Input 
                  type="text" 
                  placeholder="Sujet" 
                  {...register('subject')}
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
              </div>
            </InputGroup>
            
            <div>
              <Input 
                type="email" 
                placeholder="Email" 
                {...register('email')}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </div>
            
            <div>
              <TextArea 
                placeholder="Votre message" 
                {...register('message')}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </div>
            
            <Button type="submit">ENVOYER</Button>
          </Form>
        </div>
      </ContactGrid>
    </ContactContainer>
  );
}
