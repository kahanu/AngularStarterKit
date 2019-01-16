# Angular Starter Kit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Demo Site
[Angular Starter Kit Demo Site](https://kahanu.github.io/AngularStarterKit/)

## What is this?

This can be used as the basis for your new base Angular project.  It follows good Angular conventions in layout and structure for components and modules as suggested by the Angular docs.

This will save you time in creating the `shared` and `core` folders which should be in every Angular app, as described in the [Angular Docs](https://angular.io/guide/ngmodule-faq#what-kinds-of-modules-should-i-have-and-how-should-i-use-them).  It also has an `HttpBase` class in the services folder that provides all the plumbing for the basic CRUD operations with your RESTful service calls.

This project does not contain any additional `npm` packages over the normal packages added by the Angular CLI when creating a new project.

## Run It

After you download it, install the npm packages.  In the folder with the starter kit, open the terminal and enter:

```javascript
npm install
```

Once all the packages have been installed, you can run it.

```javascript
npm start
```

## Project Structure

This is the `app` folder structure:

```javascript
src 
 |- app
     |- about 
          |- about-routing.module.ts
          |- about.component.css
          |- about.component.html
          |- about.component.ts
          |- about.module.ts
     |- core
          |- guards
               |- module-import.guard.ts
          |- services
               |- customer.service.ts
               |- exception.service.ts
          |- core.module.ts
          |- http-base.ts
     |- home 
          |- home-routing.module.ts
          |- home.component.css
          |- home.component.html
          |- home.component.ts
          |- home.module.ts
     |- shared
          |- layout
               |- app-layouts
                   |- main-layout
                       |- main-layout.component.css
                       |- main-layout.component.html
                       |- main-layout.component.ts  
               |- navigation
                   |- primary-nav
                       |- primary-nav.component.css
                       |- primary-nav.component.html
                       |- primary-nav.component.ts
               |- layout.module.ts
          |- models
               |- base.ts
               |- index.ts
          |- shared.module.ts
     |- app-routing.module.ts
     |- app.component.css
     |- app.component.html
     |- app.component.ts
     |- app.module.ts

```

You can add your own application layout by simply creating a new component, and then updating the `app-routing.module.ts`.

## Usage

The best way to use this kit is:

1. Download or clone the repo to your local dev machine
2. Create your new Angular app in a folder of your choice
3. Copy the `core` and `shared` folders from the kit to your app
4. Update your app's `app-routing.module.ts` and `app.module.ts` files with the code from the kit.
5. Build your app.  It should build just fine.  Now continue to build your app.

## Concept

This is the basic concept of having a Core and Shared folder in your app.

* **Core** - this contains all the services for your application, including guards and other related services.
* **Services** - this contains all the shared modules and components that can be used throughout your application.

## Best Practices

There are several things you can do to follow some best practices which will make your life easier when developing Angular apps.

1. **Barrels** - when you have a folder (even with nested folders) that contain many components or other files that might be referenced elsewhere in your application, create a barrel file to list all the files.  This is just an `index.ts` file in the root of that folder that contains references to files in that folder.  This way if you are referencing more than one of those files in another file, you can include them all in the same IMPORT statement which makes your code cleaner and easier to manage.  (See the Shared/Entities folder)

When you have these files:

```javascript
-- entities/customer.ts
-- response-base.ts
-- entity.ts
```
... you can create a barrel file called `index.ts`, and include the reference to those files.

```javascript
export * from './entities/customer.ts';
export * from './response-base.ts';
export * from './entity.ts';
```

Now in the file that will reference these other files, you can import them like this:

```javascript
import { Customer, ResponseBase, Entity } from './shared/models';

@Component({
  ...
})
export class CustomerComponent {

}
```

You don't need to add the `index` to the path like, `'./shared/models/index'`.  The `index` reference is similar to the `index.html` page being the default document of a website, the `index.ts` file is the default file in a folder and does not have to be referenced.

2. **Models** - When models are shared throughout the application, put them in a `shared/models` folder, and then add them to the `index.ts` barrel file.
