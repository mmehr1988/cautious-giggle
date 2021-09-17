'use strict';

const nav = document.querySelector('nav');
const windowLocation = window.location.pathname;

const navHome = document.querySelector('.nav-home');
const navLogin = document.querySelector('.nav-login');
const navDashboard = document.querySelector('.nav-dashboard');
const navCreate = document.querySelector('.nav-create');

const navLinkFocus = () => {
  if (windowLocation === '/') {
    navHome.classList.replace('text-secondary', 'text-dark');
  } else if (windowLocation === '/login' || windowLocation === '/signup') {
    navLogin.classList.replace('text-secondary', 'text-dark');
  } else if (windowLocation === '/dashboard') {
    navDashboard.classList.replace('text-secondary', 'text-dark');
  } else if (windowLocation === '/dashboard/create/') {
    navCreate.classList.replace('text-secondary', 'text-dark');
  }
};

navLinkFocus();
