import * as person from "./index";

export const personPersonPages = [
  {
    path: "/person",
    element: person.PersonHomePage,
    permission: "person:person",
  },
  {
    path: "/person/dashboard",
    element: person.PersonDashboardPage,
    permission: "person:person",
  },
  {
    path: "/person/person/:id",
    element: person.PersonDetailsPage,
    permission: "person:person",
  },
  {
    path: "/person/person",
    element: person.PersonListPage,
    permission: "person:person",
  },
  {
    path: "/person/person/new",
    element: person.PersonNewPage,
    permission: "person:person",
  },
];
