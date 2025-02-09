import { BASE_GAP_CLASS } from "@/lib/constants"

import Button from "@/components/ui/Button"

function Authentication() {
  // Returned JSX
  return (
    <div className={`flex ${BASE_GAP_CLASS}`}>
      <Button><span>SIGN IN</span></Button>
      <Button><span>SIGN UP</span></Button>
    </div>
  )
}

export default Authentication
