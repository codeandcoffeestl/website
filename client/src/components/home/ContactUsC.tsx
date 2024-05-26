
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import ContactUsPic from '../../assets/contactUs.png'

export default function ContactUsC() {
    const defaultValues = {
        name: "",
        email: "",
        message: ""
    };
    const {
        control,
        formState: { errors },
        getValues,
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const toast = useRef(null);

    const show = () => {
        if (toast.current) {
            const toastInstance = toast.current as Toast;
            toastInstance.show({ severity: 'success', summary: 'Form Submitted', detail: getValues("name") });
        }
    };

    const onSubmit = async (data: any) => {
        data && show();
        const apiUrl = "https://afuftutfoi.execute-api.us-east-1.amazonaws.com/test";

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        reset();
    };

    const getFormErrorMessage = (name: keyof typeof errors) => {
        return errors[name] ? <small className="p-error">{errors[name]?.message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div id="contact" className='card' style={{
            backgroundImage: `url(${ContactUsPic})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
        }}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScsnMtCqoNHPxJy0v0y3Yw9OtWjiLwMXSKTRQVaUxBBS_g94Q/viewform?embedded=true" width="640" height="726" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            {/* <div className="form-contact" >
                <div className="flex justify-center">
                    <Card className='opacity-90  card-contact'>
                        <h2 className="text-center text-SecondaryColor text-[36px] pb-3 font-bold ">Contact Us</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className=" p-fluid">
                            <Toast position="top-center" ref={toast} />
                            <div className="field-contact">
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: 'Name is required.' }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': fieldState.error })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error, "border-SecondaryColor border-solid border-2": !fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label className="text-SecondaryColor" htmlFor={field.name}>Name</label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                />
                            </div>

                            <div className="field-contact">
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                        required: 'Email is required.',
                                        pattern: {
                                            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Email is Required"
                                        }
                                    }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': fieldState.error })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error, "border-SecondaryColor border-solid border-2": !fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label className="text-SecondaryColor" htmlFor={field.name}>Email</label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                />
                            </div>

                            <div className="field-contact">
                                <Controller
                                    name="message"
                                    control={control}
                                    rules={{ required: 'Message is required.' }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <span className="p-float-label">
                                                <InputTextarea id={field.name} {...field} rows={4} cols={30} className={classNames({ 'p-invalid': fieldState.error, "border-SecondaryColor border-solid border-2": !fieldState.error })} />
                                                {getFormErrorMessage(field.name)}
                                                <label className="text-SecondaryColor" htmlFor={field.name}>Message</label>
                                            </span>
                                        </>
                                    )}
                                />
                            </div>
                            <Button label="Submit" type="submit" className=' bg-OHighlightColor  text-PrimaryColor w-auto' raised />
                        </form>
                    </Card>
                </div>
            </div> */}
        </div>
    )
}
