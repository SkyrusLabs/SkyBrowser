import { createGlobalStyle } from 'styled-components';
import waves from '../assets/wavy-lines.svg'

export default createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: url("${waves}") no-repeat center center fixed;
    background-color: #242424;
    background-size: cover;
    user-select: none;
  }

  .versions {
    position: absolute;
    bottom: 30px;
    margin: 0 auto;
    padding: 15px 0;
    font-family: 'Menlo', 'Lucida Console', monospace;
    display: inline-flex;
    overflow: hidden;
    align-items: center;
    border-radius: 22px;
    background-color: #202127;
    backdrop-filter: blur(24px);
  }

  .versions li {
    display: block;
    float: left;
    border-right: 1px solid var(--ev-c-gray-1);
    padding: 0 20px;
    font-size: 14px;
    line-height: 14px;
    opacity: 0.8;
    &:last-child {
      border: none;
    }
  }

  :root {

    /* DarkTheme */
    --primary-dark: #FFFFFF;
    --secondary-dark: rgba(255, 255, 255, 0.55);
    --tertiary-dark: rgba(255, 255, 255, 0.25);
    --background-dark: rgba(44, 47, 72, 0.50);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;

    /* LightTheme */
    --primary-light: #00000;
    --secondary-light: rgba(0, 0, 0, 0.50);
    --tertiary-light: rgba(0, 0, 0, 0.25);
    --background-light: #393D5E;

    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;

    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;

    --link: #5d80d6;

    --branding: #FFFFFF;
  }
`;
