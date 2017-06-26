import Vue from 'vue'
import Router from 'vue-router'


const Index = r => require.ensure([], () => r(require('@/views/Index')), 'index')


const Personal = r => require.ensure([], () => r(require('@/views/personal/Index')), 'personal')
const PersonalCar = r => require.ensure([], () => r(require('@/views/personal/Car')), 'personal')
const PersonalLayout = r => require.ensure([], () => r(require('@/views/personal/Layout')), 'personal')
const PersonalLoanSunLearn = r => require.ensure([], () => r(require('@/views/personal/LoanSunLearn')), 'personal')
const PersonalLoanSunSalary = r => require.ensure([], () => r(require('@/views/personal/LoanSunSalary')), 'personal')
const PersonalLoanSunAttived = r => require.ensure([], () => r(require('@/views/personal/LoanSunAttived')), 'personal')


const JoinUs = r => require.ensure([], () => r(require('@/views/JoinUs')), 'joinus')
const ContactUs = r => require.ensure([], () => r(require('@/views/ContactUs')), 'contactus')
const AppDownload = r => require.ensure([], () => r(require('@/views/AppDownload')), 'appdownload')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/personal/car',
      component: PersonalCar
    },
    {
      path: '/personal',
      component: PersonalLayout,
      children: [
        {
          path: 'loansunlearn',
          component: PersonalLoanSunLearn
        },
        {
          path: 'loansunsalary',
          component: PersonalLoanSunSalary
        },
        {
          path: 'loansunattived',
          component: PersonalLoanSunAttived
        }
      ]
    },
    {
      path: '/joinus',
      component: JoinUs
    },
    {
      path: '/contactus',
      component: ContactUs
    },
    {
      path: '/appdownload',
      component: AppDownload
    }
  ]
})
