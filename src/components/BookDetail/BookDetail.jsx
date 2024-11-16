import { useParams } from "react-router-dom";

const BookDetail = () => {
  const param = useParams();
  console.log(param);

  return (
    <div>
      <h2>Book details</h2>
    </div>
  );
};

export default BookDetail;
