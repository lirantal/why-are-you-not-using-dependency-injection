## Fruits of Dependency Injection

The following are the fruits of using dependency injection frameworks like Awilix and IoC containers in Node.js applications:

- Testing and mocking becomes an easier task
  - No more `proxyquire` or `rewire` and working out Jest's magical `__mocks__` folder
  - Inject the dependency directly into the module under test, and you choose what to inject
- Avoid hard-coding dependencies
  - No more `import something from './services/some-service.js'`
- Avoid globals
  - Avoid `process.env`
  - Avoid `config` module exported from `config.js`, acting as a singleton
  - Avoid passing down a database connection string or database instance through the entire application
- Easier maintenance, solving these problems
  - Manually creating and instantiating classes require you to specify dependencies. When you later change the constructor signature, you will be forced to update all the places where the class is instantiated and this gets worse if the class is instantiated in multiple places or is nested within other classes.
- Promotes loose coupling
- Supports breaking dependencies on sub-systems and layers
