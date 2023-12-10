import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import Button from '../../components/button/Button';
import './index.css';

/**
 * type describing the data structure for inputs
 * @type Inputs 
 */
type Inputs = {
    firstName: string
    lastName: string
    email: string
    message: string
  };

  /**
   * 
   * @returns 
   */

const Contact: React.FC = (): JSX.Element =>{

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const [showErrorModal, setShowErrorModal] = useState(false)

    // for now, onSubmit open automatically a modal which tell us to send an email
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const res = await fakeApiCall(data);
            if(res.status === "success"){
                console.log('Données envoyées avec succès');
                setShowErrorModal(true);
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail', error);
            setShowErrorModal(true);
        }
    };

    const fakeApiCall = async(data: Inputs): Promise<{status: string}> => {

        return new Promise((res, rej) => {
            setTimeout(() => {
                const success = true
                if(success){
                    res({status: "success"});
                    console.log("data: ", data)
                }else{
                    rej(new Error('Echec de l\' envoi des données'));
                }
            }, 500);
        });
    };
    
    console.log(watch("firstName"))

    useEffect(() => {

        /**
        * Retrieves the section ID from the URL hash and scrolls to the corresponding section
        * @param {string} sectionId - The ID of the section to scroll to.
        */

       const sectionId = window.location.hash.substring(1);
       const section = document.getElementById(sectionId)
       if(section){
           section.scrollIntoView({ behavior: 'smooth' });
       }
    }, []);
    
    return (
        <div className='contact' id='contact'>
            <div className='contact_title'>
                <h2>Contactez-moi</h2>
                <div className='contact_title_desc'>
                    <p>Envie de me présenter un projet, </p>
                    <p className='contact_p'>ou tout simplement me dire bonjour </p>
                </div>
                
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='contact_form'>
            
                <div className='input'>
                    <label>firstName*</label>
                    <div className='input_item'>
                        <input placeholder='firstName' {...register("firstName", { required: true })} />
                        {errors.firstName && <span>Votre nom est obligatoire</span>}
                    </div>       
                </div>
                <div className='input'>
                    <label>lastName*</label>
                    <div className='input_item'>
                        <input placeholder='lastName' {...register("lastName", { required: true })} />
                        {errors.lastName && <span>Votre prénom est obligatoire</span>}
                    </div>
                </div>
                <div className='input'>
                    <label>email*</label>
                    <div className='input_item'>
                        <input placeholder='email' type='email' {...register("email", { required: true })} />
                        {errors.email && <span>Votre email est obligatoire</span>}
                    </div>
                </div>
                <div className='input'>
                    <label>message*</label>
                    <div className='input_item'>
                        <textarea placeholder='votre message' {...register("message", { required: true })} />
                        {errors.message && <span>Veuillez mettre un message</span>}
                    </div>
                </div>

                <Button type='submit'>Envoyer</Button>

                {showErrorModal && (
                <div className="error-modal">
                    <div className='error_msg'>
                        <p>Une erreur inattendue s'est produite. Envoyez-moi un email à :</p>
                        <p className='error_mail'>nivo.rakoto@yahoo.fr</p>
                        <Button onClick={() => setShowErrorModal(false)}>Fermer</Button>
                    </div>
                </div>
            )}
            </form>
        </div>
      )
}

export default Contact
