import { EditBookForm } from "@components/forms"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const EditBookPage = () => {
  return (
    <div className="m-2 mx-4">
      <h3 className="mb-4 d-flex flex-row gap-4"><Link to="/user/books" className="text-dark"><ArrowLeft /></Link>Update Book Details</h3>
      <EditBookForm data={[]}/>
    </div>
  )
}

export default EditBookPage