export const comments = {
  id: "id0",
  message: "this message one",
  parentId: null,
  children: [
    {
      id: "id1",
      message: "this message two",
      parentId: "id0",
      children: [],
    },
    {
      id: "id2",
      message: "this message three",
      parentId: "ido",
      children: [
        {
          id: "id3",
          message: "this message four",
          parentId: "id2",
          children: [],
        },
      ],
    },
  ],
};
