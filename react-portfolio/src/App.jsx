import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./pages/notfound"
import { HomePage } from "./pages/home"
import { Toaster } from "sonner"


function App() {
  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
