import expeseImg from '../../assets/images/expenseTracker.png'
import imgToPdf from '../../assets/images/imgToPdf.png'
import chatImg from '../../assets/images/chatApp.png'
import portfolio from '../../assets/images/portfolio.png'
import urlShortner from '../../assets/images/urlShortner.png'

let workData = [
    {
        "name": "Expense Tracker",
        "desc": "A web app to keep track of Daily, Monthly, and Yearly expenses",
        "image": expeseImg,
        "category": "mern",
        "links": {
            "view": "",
            "code": "https://github.com/atharv0811/ExpenseTrackerWithAws"
        }
    },
    {
        "name": "Image To PDF",
        "desc": "Application on which user can convert images of .png or .jpeg format to .pdf formate.",
        "image": imgToPdf,
        "category": "mern",
        "links": {
            "view": "",
            "code": "https://github.com/atharv0811/image-to-pdf"
        }
    },
    {
        "name": "URL Shortner",
        "desc": "A tool that allows users to shorten long URLs.",
        "image": urlShortner,
        "category": "mern",
        "links": {
            "view": "https://url-shortner-five-ebon.vercel.app/",
            "code": "https://github.com/atharv0811/URL-Shortner-NextJs"
        }
    },
    {
        "name": "Realtime Chat App",
        "desc": "A chat app with realtime chating functionality with Socket.io.",
        "image": chatImg,
        "category": "basicweb",
        "links": {
            "view": "https://chat-app-next-js-topaz.vercel.app/",
            "code": "https://github.com/atharv0811/ChatAppNextJs"
        }
    },
    {
        "name": "Portfolio Website",
        "desc": "Personal Portfolio Website. Don't Need Much Info About It, Just Scroll Down. You're Here Only!",
        "image": portfolio,
        "category": "basicweb",
        "links": {
            "view": "https://atharv0811.github.io/portfolio/",
            "code": "https://github.com/atharv0811/portfolio"
        }
    }
]

export default workData;