
import "./Hero.scss"

const Hero = () => {
  return (
    <div>
      <div className='main_mango'>
        <div className="overlay"></div>
        <video src='/video_mango.mp4' autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>
    </div>
    </div>
  );
};

export default Hero;