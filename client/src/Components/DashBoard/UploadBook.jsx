import { Button, Label, TextInput, Textarea } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Horror",
    "Romance",
    "Fantasy",
    "Biblography",
    "Self Help",
    "History",
    "Autobiography",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art & Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  // handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const description = form.description.value;
    const pdfUrl = form.pdfUrl.value;

    const bookObj = {
      title,
      authorName,
      imageURL,
      category,
      description,
      pdfUrl,
    };
    console.log(bookObj);
    // send data to database
    fetch("http://localhost:8080/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      toast.success("Book uploaded successfully!");
      form.reset();
    })
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* {First row} */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput
              id="title"
              type="text"
              name="title"
              placeholder="Book name"
              required
            />
          </div>
          {/* {Author Name} */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              name="authorName"
              placeholder="Author name"
              required
            />
          </div>
        </div>

        {/* {second row} */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image Url" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              name="imageURL"
              placeholder="Book Image Url"
              required
            />
          </div>

          {/* {category} */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              id="inputState"
              name="category"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* {book description} */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea
            id="description"
            rows={5}
            name="description"
            placeholder="Write your book description..!"
            required
            className="w-full"
          />
        </div>

        {/* {book PDF link} */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pdfUrl" value="Book PDF url" />
          </div>
          <TextInput
            id="pdfUrl"
            type="text"
            name="pdfUrl"
            placeholder="Enter PDF url"
            required
          />
        </div>
        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
