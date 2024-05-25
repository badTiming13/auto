"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {toast} from "sonner";

const steps = [
    {
        id: 0,
        type: "email",
        placeholder: "To start, could you give us your email?"
    },
    {
        id: 1,
        type: "name",
        placeholder: "Awesome! And what's your name?"
    },
    {
        id: 2,
        type: "message",
        placeholder: "Perfect, and how can we help you?"
    },
    {
        id: 3,
        type: "y to confirm, or n to cancel",
        placeholder: ""
    },
];

const TerminalForm = () => {
    const key = process.env.RESEND_API_KEY;
    const [inputValue, setInputValue] = useState("");
    const [formData, setFormData] = useState([]);
    const [step, setStep] = useState(0);
    const [errors, setErrors] = useState(Array(steps.length).fill(""));
    const inputRef = useRef(null);
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleClick = () => {
        inputRef.current.focus();
    };

    const sendEmail = async () => {
       
        setStep(69);
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application',
            },
            body: JSON.stringify(formData),
        })
        if(response.status === 200){
            console.log("Nice dick bro");
            toast("Email has been sent", {
                description: "We will contact you soon!",
                action: {
                  label: "Got it",
                  onClick: () => console.log("OK"),
                },
              })
        }
       
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [step]);

    useEffect(() => {
        console.log(formData);
        console.log("step: ", step);
    }, [formData]);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(key);
        const validationError = validateStep(step, inputValue);
        if (validationError) {
            setErrors((prevErrors) => {
                const updatedErrors = [...prevErrors];
                updatedErrors[step] = validationError;
                return updatedErrors;
            });
            return;
        }
    
        if (step === 3) {
            if (inputValue === 'y') {
                // Handle form submission
                sendEmail();
                setFormData([]);
                setInputValue("");
                setErrors(Array(steps.length).fill(""));
                console.log("Form submitted successfully!");
            } else if (inputValue === 'n') {
                // Cancel and clear the form
                setFormData([]);
                setInputValue("");
                setStep(0);
                setErrors(Array(steps.length).fill(""));
                console.log("Form canceled");
            }
        } else {
            // Proceed with form submission for other steps
            const updatedFormData = [...formData, { step: steps[step].type, value: inputValue, placeholder: steps[step].placeholder }];
            setFormData(updatedFormData);
            setInputValue("");
            if (step < steps.length - 1) {
                setStep((prevStep) => prevStep + 1);
            }
        }
    };    


    // Function to validate email format using regex
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to validate name format (assuming full name is expected)
    const isValidName = (name) => {
        // You can customize the regex pattern based on your requirements
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name);
    };

    // Function to validate message length (assuming at least 10 characters are required)
    const isValidMessage = (message) => {
        return message.length >= 10;
    };

    // Validation function for each step
    const validateStep = (step, value) => {
        if (step === 0) {
            if (!isValidEmail(value)) {
                return "Invalid email";
            }
        } else if (step === 1) {
            if (!isValidName(value)) {
                return "Invalid name";
            }
        } else if (step === 2) {
            if (!isValidMessage(value)) {
                return "Message should be at least 10 charachters";
            }
        } else if (step === 3) {
            if (value !== 'y' && value !== 'n') {
                return "Incorrect input, input y or n";
            }
        }
        return ""; // No error
    };

    return (
        <div onClick={handleClick} className="no-scrollbar relative h-screen w-full overflow-hidden overflow-y-scroll "
            style={{ display: "block" }}>
            <section className="bg-violet-600 h-full px-4 py-12 no-scrollbar"
                style={{ backgroundSize: "cover", backgroundPosition: "center center" }}>
                <motion.div
                    drag
                    dragConstraints={{
                        top: -50,
                        left: -350,
                        right: 350,
                        bottom: 300,
                    }}
                    dragMomentum={false}
                    dragTransition={false}
                    className=" no-scrollbar mx-auto h-96 w-full max-w-6xl cursor-text overflow-y-scroll rounded-lg bg-slate-950/70 font-mono shadow-xl backdrop-blur">
                    <div className="hover:cursor-move sticky top-0 flex w-full items-center gap-1 bg-slate-900 p-3">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div><span
                            className="absolute left-[50%] -translate-x-[50%] text-sm font-semibold text-slate-200">office@automate-me.at</span>
                    </div>
                    <div className="p-2 text-lg text-slate-100">
                        <p>Hey there! We're excited to link 🔗</p>
                        <p className="overflow-hidden whitespace-nowrap font-light">
                            ------------------------------------------------------------------------</p>
                        {step != 69 && <p>To start, could you give us <span className="text-violet-300">your email?</span></p>}
                        {formData.map((item, i) => {
                            return (
                                <div key={i}>
                                    {i !== 0 && <p>{item["placeholder"]}</p>}
                                    <p className="text-emerald-300">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                            strokeLinecap="round" strokeLinejoin="round" className="mr-2 inline-block" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                        <span>{item["value"]}</span>
                                    </p>
                                </div>
                            )
                        })}
                        {step === 3 &&
                            formData.map((item, i) => {
                                return (
                                    <p key={i}><span className="text-blue-300">{item["step"]}</span> : {item["value"]}</p>
                                )
                            })
                        }
                         {errors[step] && <p className="text-red-500">{errors[step]}</p>}
                        <form onSubmit={handleSubmit}><input ref={inputRef} type="text" className="sr-only" autoComplete="off" value={inputValue} onChange={handleChange} /></form>
                        {step == 69 && 
                            <div>
                                 <h1>Your email has been sent,</h1>
                        <h1>we will contact you soon</h1>
                            </div>
                        } 
                        {step != 69 &&
                        <p className="flex gap-2">
                            <span className="text-emerald-400">➜</span>
                            <span className="text-cyan-300">~</span>
                            <span className="opacity-50 ">
                                Enter {steps[step]["type"]}:
                            </span>
                            <span className="text">{inputValue}</span>
                        </p>}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default TerminalForm;
