import SpiritImage from "../assets/images/rovers/spirit/spirit.jpg"
import OpportunityImage from "../assets/images/rovers/opportunity/opportunity.jpg"
import CuriosityImage from "../assets/images/rovers/curiosity/curiosity.jpg"
import PerseveranceImage from "../assets/images/rovers/perseverance/perseverance.jpg"

const imageRovers = {
  spirit: SpiritImage,
  opportunity: OpportunityImage,
  curiosity: CuriosityImage,
  perseverance: PerseveranceImage,
}
export const getRoverImage = (name) => {
  return imageRovers[name.toLowerCase()]
}
