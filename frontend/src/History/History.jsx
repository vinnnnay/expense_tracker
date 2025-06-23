import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';

function History() {
    const { transactionHistory } = useGlobalContext();
    const [...history] = transactionHistory();

    return (
        <HistoryStyled>
            <h2 className='text-blue-400'>Recent History</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                    <div key={_id} className="history-item">
                        <p className="title-text">
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? '#ff6b6b' : '#4ade80'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        color: #60a5fa; /* Tailwind blue-400 */
    }

    .history-item {
        background: #1f2937; /* dark gray */
        border: 1px solid #374151;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.3);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title-text {
            color: #60a5fa; /* blue-400 for title */
            font-weight: 500;
            
        }

        p {
            margin: 0;
            font-size: 1rem;
        }
    }
`;

export default History;
