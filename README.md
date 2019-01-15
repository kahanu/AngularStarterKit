# Angular Starter Kit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## What is this?

This can be used to construct your new base Angular project.  It follows good Angular conventions in layout and structure for components and modules as suggested by the Angular docs.

## Project Structure

This is the ````app```` folder structure:

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
