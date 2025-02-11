import { NewBookForm } from "@components/forms"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const NewBookPage = () => {
  return (
    <div className="m-2 mx-4">
      <h3 className="mb-4 d-flex flex-row gap-4"><Link to="/user/books" className="text-dark"><ArrowLeft /></Link>Insert New Book Details</h3>
      <NewBookForm />
    </div>
  )
}

export default NewBookPage