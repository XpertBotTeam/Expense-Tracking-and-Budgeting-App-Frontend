import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import LoginPage from "@/components/LoginPage.vue";
import UserInfo from "@/components/UserInfo.vue";
import DepositPage from "@/components/DepositPage.vue";
import WithdrawalPage from "@/components/WithdrawalPage.vue";
import NetWorth from "@/components/NetWorth.vue";
import IncomePage from "@/components/IncomePage.vue";
import ScanPage from "@/components/ScanPage.vue";
import ExpensePage from "@/components/ExpensePage.vue";
import ExpensesReports from "@/components/ExpensesReports.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage 
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/UserInfo',
        name: 'UserInfo',
        component: UserInfo 
    },
    {
        path: '/deposit',
        name: 'Deposit',
        component: DepositPage 
    },
    {
        path: '/WithdrawalPage',
        name: 'WithdrawalPage',
        component: WithdrawalPage 
    },
    {
        path: '/ExpensePage',
        name: 'ExpensePage',
        component: ExpensePage 
    },
    {
        path: '/NetWorth',
        name: 'NetWorth',
        component: NetWorth 
    },
    {
        path: '/IncomePage',
        name: 'IncomePage',
        component: IncomePage 
    },
    {
        path: '/ScanPage',
        name: 'ScanPage',
        component: ScanPage 
    },
    {
        path: '/ExpensesReports',
        name: 'ExpensesReports',
        component: ExpensesReports 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
