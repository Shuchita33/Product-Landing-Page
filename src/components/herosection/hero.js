import '../home.css'
import { banner } from '../../assets'
export const Hero=()=>{
    return(
        <div className="hero">
        <img src={banner} alt="" />
        <div className="header">
          <h1>Level up your style with</h1>
          <h1> our collections</h1>
          <p>Shop Now <i class="fa-solid fa-arrow-right"></i></p>
        </div>
      </div>
    )
}