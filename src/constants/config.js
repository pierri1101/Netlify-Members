import { UserRole } from "../utils/auth.roles";
import firebase from 'firebase';
require("firebase/firestore");

export const defaultMenuType = 'menu-default' // 'menu-default', 'menu-sub-hidden', 'menu-hidden';
export const adminRoot = '/app';
export const searchPath = `${adminRoot}/#`;
export const buyUrl = 'https://dominvestimentos.com.br';
export const apiUrl = 'https://danilozanini.com.br';

export const subHiddenBreakpoint = 1440
export const menuHiddenBreakpoint = 768

export const defaultLocale = 'en'
export const defaultDirection = 'ltr'
export const localeOptions = [
  { id: 'en', name: 'English LTR', direction: 'ltr' },
  { id: 'es', name: 'Español', direction: 'ltr' },
  { id: 'enrtl', name: 'English RTL', direction: 'rtl' }
]

export const firebaseConfig = {
  apiKey: "AIzaSyDSUn1UL2HF9bCWivUIEZpn7o8DwZDXCEE",
  authDomain: "area-de-membros-dz.firebaseapp.com",
  databaseURL: "https://area-de-membros-dz.firebaseio.com",
  projectId: "area-de-membros-dz",
  storageBucket: "area-de-membros-dz.appspot.com",
  messagingSenderId: "792555216255",
  appId: "1:792555216255:web:a31c23f5cb321802848e4a"
};



export const currentUser = {
  id: 1,
  title: 'Nome do Usuário',
  img: '/assets/img/profiles/l-6.png',
  date: 'Last seen today 15:24',
  role: UserRole.Admin
}

export const isAuthGuardActive = true;
export const themeRadiusStorageKey = 'theme_radius'
export const themeSelectedColorStorageKey = 'theme_selected_color'
export const defaultColor = 'dark.bluenavy'
export const colors = ['bluenavy', 'blueyale', 'blueolympic', 'greenmoss', 'greenlime', 'purplemonster', 'orangecarrot', 'redruby', 'yellowgranola', 'greysteel']
