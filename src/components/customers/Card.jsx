import { comments } from "./comments";

export const CustomerCard = ({ user }) => {
  const { name, location, picture } = user;
  const generatedStar = Math.floor(Math.random() * 6);
  return (
    <div className="w-[400px] h-[250px] rounded-xl border-2 p-5 hover:shadow-2xl hover:border-red-500">
      <div className="flex items-center gap-4 ">
        <div className="flex p-4">
          <img
            src={picture.thumbnail}
            width={50}
            height={50}
            alt=""
            className="rounded-full"
          />
          <div>
            <p className="text-xl font-semibold">
              {name?.first}
              {name?.last}
            </p>
            <p>
              {location?.city}, {location?.country}
            </p>
          </div>
          <div className="font-semibold">{generatedStar} Star</div>
        </div>
      </div>
      <p className="mt-3 font-medium leading-8 line-clamp-3">
        {comments[generatedStar]}
      </p>
    </div>
  );
};
