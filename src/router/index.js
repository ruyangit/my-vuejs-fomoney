import Vue from 'vue'
import Router from 'vue-router'


const Index = r => require.ensure([], () => r(require('@/views/Index')), 'index')


const Personal = r => require.ensure([], () => r(require('@/views/personal/Index')), 'personal')
const PersonalCar = r => require.ensure([], () => r(require('@/views/personal/Car')), 'personal')
const PersonalLayout = r => require.ensure([], () => r(require('@/views/personal/Layout')), 'personal')
const PersonalLoanSunLearn = r => require.ensure([], () => r(require('@/views/personal/LoanSunLearn')), 'personal')
const PersonalLoanSunSalary = r => require.ensure([], () => r(require('@/views/personal/LoanSunSalary')), 'personal')
const PersonalLoanSunAttived = r => require.ensure([], () => r(require('@/views/personal/LoanSunAttived')), 'personal')

const Company = r => require.ensure([], () => r(require('@/views/company/Index')), 'company')
const CompanyCar = r => require.ensure([], () => r(require('@/views/company/Car')), 'company')
const CompanyLayout = r => require.ensure([], () => r(require('@/views/company/Layout')), 'company')
const CompanyLoanPlatform = r => require.ensure([], () => r(require('@/views/company/LoanPlatform')), 'company')
const CompanyLoanFactoring = r => require.ensure([], () => r(require('@/views/company/LoanFactoring')), 'company')

const CompanyTechLayout = r => require.ensure([], () => r(require('@/views/company/TechLayout')), 'company')
const CompanyTechCheat = r => require.ensure([], () => r(require('@/views/company/TechCheat')), 'company')
const CompanyTechCredit = r => require.ensure([], () => r(require('@/views/company/TechCredit')), 'company')
const CompanyTechCreditRisks = r => require.ensure([], () => r(require('@/views/company/TechCreditRisks')), 'company')
const CompanyTechRisk = r => require.ensure([], () => r(require('@/views/company/TechRisk')), 'company')

const Enter = r => require.ensure([], () => r(require('@/views/enter/Index')), 'enter')
const EnterAboutUs = r => require.ensure([], () => r(require('@/views/enter/AboutUs')), 'enter')
const EnterBrandCulture = r => require.ensure([], () => r(require('@/views/enter/BrandCulture')), 'enter')
const EnterCooperativePartner = r => require.ensure([], () => r(require('@/views/enter/CooperativePartner')), 'enter')
const EnterDevelopmentHistory = r => require.ensure([], () => r(require('@/views/enter/DevelopmentHistory')), 'enter')
const EnterLeadershipTeam = r => require.ensure([], () => r(require('@/views/enter/LeadershipTeam')), 'enter')


const NewsLayout = r => require.ensure([], () => r(require('@/views/news/Layout')), 'news')
const GroupNews = r => require.ensure([], () => r(require('@/views/news/GroupNews')), 'news')
const MediaNews = r => require.ensure([], () => r(require('@/views/news/MediaNews')), 'news')
const DataLayout = r => require.ensure([], () => r(require('@/views/news/DataLayout')), 'news')
const DataDraft = r => require.ensure([], () => r(require('@/views/news/DataDraft')), 'news')
const DataDraftDetail = r => require.ensure([], () => r(require('@/views/news/DataDraftDetail')), 'news')
const DataVideo = r => require.ensure([], () => r(require('@/views/news/DataVideo')), 'news')
const DataDoc = r => require.ensure([], () => r(require('@/views/news/DataDoc')), 'news')
const DataImg = r => require.ensure([], () => r(require('@/views/news/DataImg')), 'news')
const DataImgDetail = r => require.ensure([], () => r(require('@/views/news/DataImgDetail')), 'news')
const NewsDetail = r => require.ensure([], () => r(require('@/views/news/Detail')), 'news')

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
      path: '/company',
      component: Company
    },
    {
      path: '/company/car',
      component: CompanyCar
    },
    {
      path: '/company',
      component: CompanyLayout,
      children: [
        {
          path: 'loanplatform',
          component: CompanyLoanPlatform
        },
        {
          path: 'loanfactoring',
          component: CompanyLoanFactoring
        }
      ]
    },
    {
      path: '/company',
      component: CompanyTechLayout,
      children: [
        {
          path: 'techcheat',
          component: CompanyTechCheat
        },
        {
          path: 'techcredit',
          component: CompanyTechCredit
        },
        {
          path: 'techcreditrisks',
          component: CompanyTechCreditRisks
        },
        {
          path: 'techrisk',
          component: CompanyTechRisk
        }
      ]
    },
    {
      path: '/enter',
      component: Enter,
    },
    { path: '/enter/aboutus', component: EnterAboutUs },
    { path: '/enter/brandculture', component: EnterBrandCulture },
    { path: '/enter/cooperativepartner', component: EnterCooperativePartner },
    { path: '/enter/developmenthistory', component: EnterDevelopmentHistory },
    { path: '/enter/leadershipteam', component: EnterLeadershipTeam },
    {
      path: '/news',
      component: NewsLayout,
      children: [
        {
          path: 'groupnews',
          component: GroupNews
        },
        {
          path: 'medianews',
          component: MediaNews
        },
        {
          path: 'data',
          component: DataLayout,
          children: [
            {
              path: 'draft',
              component: DataDraft
            },
            {
              path: 'video',
              component: DataVideo
            },
            {
              path: 'doc',
              component: DataDoc
            },
            {
              path: 'img',
              component: DataImg
            },
          ]
        }
      ]
    },
    {
      path: '/news/detail/:id',
      component: NewsDetail
    },
    {
      path: '/news/data/draft/detail/:id',
      component: DataDraftDetail
    },
    {
      path: '/news/data/img/detail/:id',
      component: DataImgDetail
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
