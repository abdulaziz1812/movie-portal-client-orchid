import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";

const AddMovie = () => {
  const genresList = [
    "Comedy",
    "Drama",
    "Horror",
    "Action",
    "Sci-Fi",
    "Romance",
    "Adventure",
  ];
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [error, setError] = useState({});

  const startYear = 2024;
  const years = Array.from({ length: 10 }, (_, i) => startYear - i);

  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    // setError("");
  };

  const handleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((item) => item !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
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

    const newMovie = {
      poster,
      title,
      duration,
      year,
      selectedGenres,
      rating,
      summary,
    };
    console.log(newMovie);

    const errors = {};
    const url = /^https?:\/\//;
    if (!poster || !url.test(poster)) {
          errors.poster = "Please provide a valid URL for the poster";
    }

    if (!title || title.length < 2) {
           errors.title = "Title must be at least 2 characters long";
    }

    if (selectedGenres.length < 1) {
           errors.selectedGenres = "Please select a genre";
    }

    if (!duration || duration <= 60) {
           errors.duration = "Duration must be greater than 60 minutes";
    }

    if (!year) {
            errors.year = "Please select a release year";
    }

    if (!rating) {
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
    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "New Movie added successfully",
            icon: "success",
            draggable: true,
          });
        }
      });

    form.reset();
    setSelectedGenres([]);
    setRating(0);
    setError({});
  };

  return (
    <div className="py-6">
      <div className="w-11/12 mx-auto border rounded-2xl bg-gray-200 shadow-xl">
        <div>
          <h2 className="text-center text-4xl pt-4 font-bold">Add Movie</h2>
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
              defaultValue=""
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
                {selectedGenres.length > 0
                  ? `Selected: ${selectedGenres.join(", ")}`
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
                        checked={selectedGenres.includes(genre)}
                        onChange={() => handleGenre(genre)}
                        className="checkbox  mr-2"
                      />
                      {genre}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            {error.selectedGenres && (
              <label className="label text-xs text-red-500">
                {error.selectedGenres}
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <div>
              <Rating
                key={rating}
                onClick={handleRating}
                ratingValue={rating}
                size={30}
                transition
                fillColor="gold"
                emptyColor="gray"
                allowFraction
                showTooltip
                SVGclassName={"inline-block"}
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
            />
            {error.summary && (
              <label className="label text-xs text-red-500">
                {error.summary}
              </label>
            )}
          </div>

          <input
            type="submit"
            value="Add Movie"
            className="btn btn-outline bg-white col-span-2"
          />
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
