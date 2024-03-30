import UserProfile from '.components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo:1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Ester Howard',
    role: 'Software Engineer',
  },
  {
    uniqueNo:2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd miles',
    role: 'Business Analyst',
  },
  {
    uniqueNo:3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'DevOps Engineer',
  },
  {
    uniqueNo:4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon lane',
    role: 'Jr. Software Engineer',
  },
]

const App = () => (
  <div className = "list-container">
    <h1 className = "title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails = {eachItem} key = {eachItem.uniqueNo}/>
      ))}
    </ul>
  </div>
)

export default App
