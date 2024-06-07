import '../home.css'
import { banner } from '../../assets'
export const Hero=()=>{
    return(
        <div className="hero">
        <img src={banner} alt="" />
        <div className="header">
          <p>Shop Now <i class="fa-solid fa-arrow-right"></i></p>
        </div>
      </div>
    )
}