import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";

const UpdateMovie = () => {
  const movie = useLoaderData();

  const {
    _id,
    poster,
    title,
    duration,
    year,
    selectedGenres,
    rating,
    summary,
  } = movie;

  const genresList = [
    "Comedy",
    "Drama",
    "Horror",
    "Action",
    "Sci-Fi",
    "Romance",
    "Adventure",
  ];
  const [updateGenres, setUpdateGenres] = useState(selectedGenres);
  const [error, setError] = useState({});

  const startYear = 2024;
  const years = Array.from({ length: 10 }, (_, i) => startYear - i);

  const [updateRating, setUpdateRating] = useState(rating);

  const handleRating = (rate) => {
    setUpdateRating(rate);
    // setError("");
  };

  const handleGenre = (genre) => {
    if (updateGenres.includes(genre)) {
      setUpdateGenres(updateGenres.filter((item) => item !== genre));
    } else {
      setUpdateGenres([...updateGenres, genre]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    console.log(form);
    const poster = form.poster.value;
    const title = form.title.value;
    const duration = form.duration.value;
    const year = form.year.value;
    const summary = form.summary.value;

    const updateMovie = {
      poster,
      title,
      duration,
      year,
      selectedGenres : updateGenres, 
      rating : updateRating,
      summary,
    };
    console.log(updateMovie);

    const errors = {};
    const url = /^https?:\/\//;
    if (!poster || !url.test(poster)) {
      errors.poster = "Please provide a valid URL for the poster";
    }

    if (!title || title.length < 2) {
      errors.title = "Title must be at least 2 characters long";
    }

    if (updateGenres.length < 1) {
      errors.updateGenres = "Please select a genre";
    }

    if (!duration || duration <= 60) {
      errors.duration = "Duration must be greater than 60 minutes";
    }

    if (!year) {
      errors.year = "Please select a release year";
    }

    if (!updateRating) {
      errors.rating = "Please select a Rating";
    }

    if (!summary || summary.length < 10) {
      errors.summary = "Summary must be at least 10 characters long";
    }

    console.log(errors);

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    // send data to server
    fetch(`http://localhost:5000/movies/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Movie Updated successfully",
            icon: "success",
            draggable: true,
          });
        }
      });

    form.reset();
    setError({});
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div>
          <h2 className="text-center text-4xl pt-4 font-bold">
            Update Movie : {title}
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="card-body grid grid-cols-2 gap-4"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Movie Poster</span>
            </label>
            <input
              type="text"
              placeholder="Movie Poster URL"
              className="input input-bordered"
              name="poster"
              defaultValue={poster}
            />
            {error.poster && (
              <label className="label text-xs text-red-500">
                {error.poster}
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Movie Title</span>
            </label>
            <input
              type="text"
              placeholder="Movie Title"
              className="input input-bordered"
              name="title"
              defaultValue={title}
            />
            {error.title && (
              <label className="label text-xs text-red-500">
                {error.title}
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Duration</span>
            </label>
            <input
              type="number"
              placeholder="Duration"
              className="input input-bordered"
              name="duration"
              defaultValue={duration}
            />
            {error.duration && (
              <label className="label text-xs text-red-500">
                {error.duration}
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Release Year</span>
            </label>
            <select
              className="select select-bordered w-full"
              name="year"
              defaultValue={year}
            >
              <option value="" disabled>
                Select Year
              </option>
              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
            {error.year && (
              <label className="label text-xs text-red-500">{error.year}</label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <div className="dropdown ">
              <div tabIndex={0} className="btn btn-outline font-normal ">
                {updateGenres.length > 0
                  ? `Selected: ${updateGenres.join(", ")}`
                  : "Choose a Genres"}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full max-h-60 overflow-y-auto"
              >
                {genresList.map((genre) => (
                  <li key={genre} className="p-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={updateGenres.includes(genre)}
                        onChange={() => handleGenre(genre)}
                        className="checkbox  mr-2"
                      />
                      {genre}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            {error.updateGenres && (
              <label className="label text-xs text-red-500">
                {error.updateGenres}
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <div>
              <Rating
                // key={updateRating}
                onClick={handleRating}
                ratingValue={updateRating}
                size={30}
                transition
                fillColor="gold"
                emptyColor="gray"
                allowFraction
                showTooltip
                SVGclassName={"inline-block"}
                initialValue={updateRating}
              />
            </div>
            {error.rating && (
              <label className="label text-xs text-red-500">
                {error.rating}
              </label>
            )}
          </div>
          <div className="form-control col-span-2 ">
            <label className="label">
              <span className="label-text">Summary</span>
            </label>
            <textarea
              type="text"
              placeholder="Short summary of the movie"
              className="textarea textarea-bordered"
              name="summary"
              defaultValue={summary}
            />
            {error.summary && (
              <label className="label text-xs text-red-500">
                {error.summary}
              </label>
            )}
          </div>

          <input
            type="submit"
            value="Update Movie"
            className="btn btn-outline bg-white col-span-2"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
