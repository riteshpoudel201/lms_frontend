export const bookFields = [
    {
      label: "Title",
      name: "title",
      type: "text",
      required: true,
      placeholder: "Eg: The Great Tale",
      minLength: 3
    },
    {
      label: "Year",
      name: "year",
      type: "number",
      required: true,
      placeholder: "Eg: 2025",
      min:1904,
      max: new Date().getFullYear(),
    },
    {
      label: "Image URL",
      name: "imageURL",
      type: "url",
      required: true,
      placeholder: "Eg: https://www.example.com/images/some-random-pic.jpg"
    },
    {
      label: "ISBN",
      name: "isbn",
      type: "number",
      placeholder:1234567890,
      required: true,
    },
    {
      label: "Genre",
      name: "genre",
      type: "text",
      required: true,
      placeholder: "Eg: Action"
    },
    {
      label: "Author",
      name: "author",
      type: "text",
      required: true,
      placeholder: "Eg: William Shakespeare"
    },
    {
      label: "Description",
      name: "description",
      type:"text",
      as:"textarea",
      rows:"5",
      required: true,
      placeholder: "Book Summary"
    }
  ];