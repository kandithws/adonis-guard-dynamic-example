# Adonis RESTFUL adonis-guard example application

An example of using [RomainLanz/adonis-guard](https://github.com/RomainLanz/adonis-guard) Authorization with dynamic rules finding.

The core logic is implemented at `App/Validators/BaseValidator.js`

## Description

For RESTFUL API, the `BaseValidator`:

 * Matches `ResourceController` with `App/Policies/ResourcePolicy` and authorize the route
 * Find and load `Resource` from DB if the id is set. E.g. if request `resources/:id` is given, the validator loads the resource and pass it through the controller context.  
