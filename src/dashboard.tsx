import react from 'react';
import Header from './components/header/header';
import Sidebar from './components/sider/sider';
const Dashboard = () =>{
return(
    <>
    
    <div className="container-scroller">   
    <Header/>
    <Sidebar/> 
    </div>
   </>
)
}


export default Dashboard;