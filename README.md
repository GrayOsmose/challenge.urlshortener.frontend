# The Challenge

## Description

I was asked to create an application for url shrotener. Frontend should be done using Angular 1.x, 2 or KnockoutJS. Bootstrap for UI. Without authentification. The clicks on shortened urls should be tracked.

I've picked Angular 2, Bootstrap 4, and webpack 2.2 of course.

## Architecture

Single page application.

## Components

I've got starter from [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter), but had to tweak it a bit for bootstrap 4.

- Angular 2
- webpack 2
- Bootstrap 4 (with jquery)
- other stuff which comes with it

## Angular components structure

```
- app
-|
--- app.component // bootstrap
---|
----- navigation.component // one link really
----- home.component // contains urls and saves
-----|
------- url.component // validates url and sends up to save
------- urls.component // show list of urls
```

### WebApi

The main point is that accessing web api we send credentials, since identification is done with cookie and it's http only(not accessible via js code).

NOTE: right now webpapi route is hardwired, should be done by using proxy (which didn't work for some reason) or have same domain configured on deployment. Thus accessing via just '/api/url'.

### Validation

It's own segment. I've used [google shortener](https://goo.gl/) as an example and they don't have validation for urls. I don't think that it's necessary as people can shorten anything, not only urls.

It's quite simple to add `validation pattern` to `UrlModel` and reuse it in html pattern and check in `IsValid()` for validation.

It was a choice.

### Unit testing

Haven't done that before with Angular 2, no time to learn it unfortunately.

## PS

Use what you've never used before.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=1W7c8QghPxk
" target="_blank"><img src="http://img.youtube.com/vi/1W7c8QghPxk/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="800" height="600" border="10" /></a>

