import * as person from "./index";

export const personPersonPages = [
  {
    path: "/persons/:id",
    element: person.PersonDetailsPage,
    permission: "person:person",
  },
  {
    path: "/persons",
    element: person.PersonListPage,
    permission: "person:person",
  },
  {
    path: "/persons/new",
    element: person.PersonNewPage,
    permission: "person:person",
  },
];
