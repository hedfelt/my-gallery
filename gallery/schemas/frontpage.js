export default {
  name: "frontpage",
  title: "FrontPage",
  type: "document",
  fields: [
    {
      name: "images",
      title: "images",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "post" }],
        },
      ],
    },
  ],
};
