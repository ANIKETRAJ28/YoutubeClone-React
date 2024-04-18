import Feed from '../../components/Feed/Feed';
import SideBar from '../../components/SideBar/SideBar';
import './Home.css'

function Home({sideBar}) {
    return (
        <>
            <SideBar sideBar={sideBar}/>
            <div className={`container ${sideBar ? "" : "large-container"}`}>
                <Feed/>
            </div>
        </>
    )
}

export default Home;