import HomeComponent from "./components/frontend/home.vue";
import LoginComponent from "./components/frontend/registration/login.vue";
import RegistrationComponent from "./components/frontend/registration/registration.vue";


export const routes = [
    { path: "/", component: HomeComponent, name: "home" },
    { path: "/login", component: LoginComponent, name: "login" },
    { path: "/registration", component: RegistrationComponent, name: "registration" },
];
