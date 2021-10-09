import pic from '/home/ec2-user/my_website/profile-app-prathimalgi/src/assets/prathi.jpg'
function Aboutme() {
    return (
        <div>
          <h3>My Profile</h3>
          <img src={pic}  width = "200" height = "200"></img>
        </div>
      );
    }
    
  
  export default Aboutme;
  