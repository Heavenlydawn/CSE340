# Assignment 3 Implementation Plan

## Completed Tasks

- [x] Analyze project structure and gather information
- [x] Create comprehensive plan
- [x] Update utilities/index.js: Add getNav function and improve buildVehicleDetail
- [x] Create views/inventory/vehicleDetail.ejs: Responsive detail view
- [x] Update controllers/invController.js: Modify vehicleDetail to throw errors
- [x] Update models/inventory-model.js: Add getClassifications function
- [x] Update routes/inventoryRoute.js: Add handleErrors to all routes
- [x] Update server.js: Add error middleware and handleErrors to home route
- [x] Create views/404.ejs: 404 error view
- [x] Create views/500.ejs: 500 error view
- [x] Update views/partials/footer.ejs: Add error link
- [x] Add intentional error route/controller: Route and controller for 500 error trigger
- [x] Add CSS for responsive detail view

## Pending Tasks

- [x] Test detail view for all vehicles (tested with curl, shows 500 due to DB connection issue)
- [x] Test error handling on all routes (tested 404 and 500, working)
- [x] Test intentional error link (tested /inv/error, shows 500)
- [ ] Deploy to render.com and test production (DB connection issue prevents full testing)
