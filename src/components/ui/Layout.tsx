import { Outlet } from "react-router-dom"

function Layout() {
  // Returned JSX
  return (
    <aside>
      Head + Nav
      <Outlet />
    </aside>
  )
}

export default Layout
