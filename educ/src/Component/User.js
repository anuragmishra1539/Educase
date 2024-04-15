import "./User.css"
import profile from './Ellipse114.png'
function User(){
    return(
    
        <div class="main">
        <div class = "setting"><p class="as">Account Settings</p></div>
        <div class="info">
            <div class="photo">
                <img src={profile} alt=""></img>
            </div>
            <div>
                <p class = "txt">Marry Doe</p>
                <p class = "txt2">Marry@Gmail.Com</p>
            </div>
        </div>
        <div class="about">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>


    </div>
      )};

export default User;