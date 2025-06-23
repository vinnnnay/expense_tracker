import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function Form() {
    const {addIncome, getIncomes, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Salary Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add Income'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </FormStyled>
    )
}


export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    background: rgba(30, 30, 35, 0.95);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    
    .error {
        color: #ff6b6b;
        background: rgba(255, 107, 107, 0.1);
        padding: 0.75rem 1rem;
        border-radius: 8px;
        border: 1px solid rgba(255, 107, 107, 0.3);
        margin-bottom: 1rem;
        font-size: 0.9rem;
    }
    
    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        background: rgba(40, 40, 45, 0.8);
        resize: none;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        color: rgba(255, 255, 255, 0.9);
        transition: all 0.3s ease;
        
        &::placeholder {
            color: rgba(255, 255, 255, 0.4);
        }
        
        &:focus {
            border-color: #4CAF50;
            background: rgba(50, 50, 55, 0.9);
            box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1), 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        
        &:hover {
            border-color: rgba(255, 255, 255, 0.2);
            background: rgba(45, 45, 50, 0.9);
        }
    }
    
    .input-control {
        input {
            width: 100%;
        }
    }

    .selects {
        display: flex;
        justify-content: flex-end;
        
        select {
            color: rgba(255, 255, 255, 0.6);
            cursor: pointer;
            min-width: 200px;
            
            &:focus, &:active {
                color: rgba(255, 255, 255, 0.9);
            }
            
            option {
                background: rgba(40, 40, 45, 0.95);
                color: rgba(255, 255, 255, 0.9);
                padding: 0.5rem;
            }
        }
    }

    .submit-btn {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        
        button {
            box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
            transition: all 0.3s ease;
            
            &:hover {
                background: var(--color-green) !important;
                transform: translateY(-2px);
                box-shadow: 0 6px 25px rgba(76, 175, 80, 0.4);
            }
        }
    }
    
    /* DatePicker Dark Theme Styles */
    .react-datepicker-wrapper {
        width: 100%;
        
        input {
            width: 100% !important;
        }
    }
    
    .react-datepicker {
        background-color: rgba(40, 40, 45, 0.95) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 8px !important;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;
        
        .react-datepicker__header {
            background-color: rgba(30, 30, 35, 0.95) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            
            .react-datepicker__current-month {
                color: rgba(255, 255, 255, 0.9) !important;
            }
            
            .react-datepicker__day-name {
                color: rgba(255, 255, 255, 0.7) !important;
            }
        }
        
        .react-datepicker__day {
            color: rgba(255, 255, 255, 0.8) !important;
            
            &:hover {
                background-color: rgba(76, 175, 80, 0.3) !important;
                color: rgba(255, 255, 255, 1) !important;
            }
            
            &--selected {
                background-color: #4CAF50 !important;
                color: white !important;
            }
            
            &--today {
                background-color: rgba(76, 175, 80, 0.2) !important;
                color: rgba(255, 255, 255, 0.9) !important;
            }
        }
        
        .react-datepicker__navigation {
            &--previous, &--next {
                border-color: transparent transparent transparent rgba(255, 255, 255, 0.6) !important;
                
                &:hover {
                    border-color: transparent transparent transparent rgba(255, 255, 255, 0.9) !important;
                }
            }
            
            &--next {
                border-color: transparent transparent transparent rgba(255, 255, 255, 0.6) !important;
                
                &:hover {
                    border-color: transparent transparent transparent rgba(255, 255, 255, 0.9) !important;
                }
            }
        }
    }
`;

export default Form