import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, author, imageUrl } = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24">
      {_id} And author is {author}
      <div className="">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default SingleBook;
