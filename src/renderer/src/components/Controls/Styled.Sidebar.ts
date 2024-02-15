/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from 'styled-components';

export enum windowAction {
  close,
  maxmize,
  minimize,
}

export interface SidebarProps {
  windowsActionType: windowAction;
}

export const Sidebar = styled.div`
  max-width: 234px;
  height: 100vh;
  background: rgba(39, 39, 39, 0.68);
`;

export const Navigation = styled.div`
  width: 100%;
  height: 36px;
  padding: 12px;
`;

export const WindowsActionsContainer = styled.div`
  width: 70px;
  height: 12px;
  display: flex;
  justify-content: space-around;

  .close {
    content: 'x';
    background-color: red;
    position: relative;
  }

  .close:hover::before {
    font-family: 'inter';
    font-weight: 700;
    content: 'x';
    position: absolute;
    top: 38%;
    left: 52%;
    transform: translate(-50%, -50%);
    color: #1e1e1ee8;
  }

  .max {
    background-color: #35ff00;
  }

  .ultra {
    background-color: blue;
  }

  .min {
    background-color: yellow;
  }

  &::hover {
    background-color: #35ff00;
  }
`;

export const WindowActionControl = styled.div`
  width: 12px;
  height: 12px;

  border-radius: 50%;
  margin-right: 5px;
`;
