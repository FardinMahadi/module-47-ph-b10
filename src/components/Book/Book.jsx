import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    category,
    bookId,
    rating,
    totalPages,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-300 w-96 shadow-xl p-6">
        <figure className="bg-blue-200 py-8 rounded-2xl">
          <img src={image} className="h-[166px]" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-outline bg-green-100 text-green-600 font-semibold p-3"
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{totalPages}</div>
          </h2>
          <p>By: {author}</p>
          {/* divider */}
          <div className="my-3 border-t-2 border-dashed border-gray-500"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            {/* rating */}
            <div className="flex gap-2 ">
              <div>{rating}</div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
