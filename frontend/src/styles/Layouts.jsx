import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 2rem;
  height: 100vh;
  display: flex;
  
  gap: 2rem;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 2rem 1.5rem;
  width: 100%;
  background: var(--card-bg);

  
  
  border-radius: 20px;
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    opacity: 0.5;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 15px 45px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 0 0 1px var(--accent-color);
    border-color: var(--accent-color);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    border-radius: 15px;
  }
`;

export const Card = styled.div`

//   background: var(--card-bg);
background-color: #121212; 
  
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.4),
      0 0 0 1px var(--accent-color);
    border-color: var(--accent-color);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.01);
  }
`;

export const Button = styled.button`

  background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(245, 102, 146, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const IconButton = styled.button`

  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  
  &:hover {
    background: var(--accent-color);
    color: white;
    transform: translateY(-2px) rotate(5deg);
    box-shadow: 0 8px 25px rgba(245, 102, 146, 0.3);
    border-color: var(--accent-color);
  }
  
  &:active {
    transform: translateY(0) rotate(0deg);
  }
`;

export const Input = styled.input`

  background: var(--input-bg);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  color: #101026;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
  
  &::placeholder {
    color: var(--text-secondary);
  }
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(245, 102, 146, 0.1);
    background: var(--card-bg);
  }
  
  &:hover:not(:focus) {
    border-color: var(--text-secondary);
  }
`;

export const Sidebar = styled.div`
//   background: var(--card-bg);
//   background-color: #1a1a1a;    
  border-radius: 20px;
  padding: 2rem 1.5rem;
  border: 1px solid var(--border-color);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  min-width: 280px;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    min-width: unset;
    width: 100%;
    transform: none;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export const NavItem = styled.div`

  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--accent-color);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: rgba(245, 102, 146, 0.1);
    color: var(--accent-color);
    transform: translateX(5px);
    
    &::before {
      transform: scaleY(1);
    }
  }
  
  &.active {
    background: rgba(245, 102, 146, 0.15);
    color:#2c2ca3;
    
    &::before {
      transform: scaleY(1);
    }
  }
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color);
  border-top: 3px solid var(--accent-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Modal = styled.div`
// background-color: #1a1a1a;    
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  
  .modal-content {
    background: var(--card-bg);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid var(--border-color);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    max-width: 500px;
    width: 90%;
    transform: scale(0.9);
    animation: modalAppear 0.3s ease forwards;
  }
  
  @keyframes modalAppear {
    to {
      transform: scale(1);
    }
  }
`;

export const Badge = styled.span`
   
  background: var(--accent-color);
  color: #101026;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  
  &.success {
    background: var(--color-green);
  }
  
  &.warning {
    background: #ff9800;
  }
  
  &.error {
    background: var(--color-delete);
  }
`;

export const ProgressBar = styled.div`
background-color: #1a1a1a;    
  width: 100%;
  height: 8px;
//   background: var(--border-color);
  border-radius: 10px;
  overflow: hidden;
  
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent-color), var(--accent-hover));
    border-radius: 10px;
    transition: width 0.3s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shimmer 2s infinite;
    }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;