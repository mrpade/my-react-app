import Welcome from "./welcome"
import Services from "./services"
import Stacks from "./stacks"
import Photography from "./photography"

function Container(){
  return (

    <div className="container">
      <Welcome/>
      <Services/>
      <Photography/>
    </div>

  )
}

export default Container