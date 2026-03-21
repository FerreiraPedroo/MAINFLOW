

import { HomePainel } from "@/pages/home/HomePainel";


import * as person from "@/pages/person";
import * as manager from "@/pages/manager";


export const PAGES: Record<string, React.FC> = {
  ///////////////////////////////////////////////////////////////////////
  // HOME /////////////////////////////////////////////////////////////////
  painel: HomePainel,
  /////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////
  // MANAGER //////////////////////////////////////////////////////////////
  manager: manager.ManagerHome,
  "manager/localizations": manager.LocalizationList,
  "manager/localizations/new": manager.LocalizationNew,
  "manager/localizations/buildings": manager.ListBuilding,
  "manager/localizations/building-floors": manager.ListBuildingFloor,
  "manager/localizations/building-divisions": manager.ListBuildingDivision,
  "manager/localizations/building-spaces": manager.ListBuildingSpace,

  // "manager/projects": manager.ProjectList,
  "manager/cost-center": manager.ListCostCenter,
  "manager/payment-groups": manager.ListPaymentGroup,
  // "manager/payment-group": manager.PaymentGroupList,
  /////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////
  // PESSOAS //////////////////////////////////////////////////////////////
  persons: person.PersonHome,
  "persons/new": person.PersonNew,
  "persons/list": person.PersonList,
  "persons/:id": person.PersonDetails,
  "persons/dashboard": person.PersonDashboard,
};

export const pagesConfig = {
  Pages: PAGES,
  Layout: Layout,
  NotFoundPage: NotFoundPage,
};
