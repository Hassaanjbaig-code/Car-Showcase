import { CustumFilter } from "@/types"
import Image from "next/image"

const CustomeFilter = ( {title}: CustumFilter ) => {
  return (
    <div>
      {title}
    </div>
  )
}

export default CustomeFilter