const { Repository, Activity } = require("../scripts/index");


describe("La clase Activity", () => {
  let activity;

  beforeEach(() => {
    activity = new Activity();
  });

  it("Debe ser una clase", () => {
    expect(typeof Activity).toBe('function');
    expect(typeof Activity.prototype.constructor).toBe('function');
  });
});

describe("La clase Repository", () => {
  let repository;

  beforeEach(() => {
    repository = new Repository();
  });

  it("Debe ser una clase", () => {
    expect(typeof Repository).toBe('function');
    expect(typeof Repository.prototype.constructor).toBe('function');
  });

  it("Repository debe tener instancias de Activity", () => {
    repository.createActivity("Actividad 1", "Descripción de la actividad 1", "imagen1.jpg");
    expect(repository.getAllActivities()[0] instanceof Activity).toEqual(true);
  });

  it("Debe tener implementado el metodo getAllActivities()", () => {
    expect(typeof repository.getAllActivities).toBe('function');
  });

  it("Debe tener implementado el metodo createActivity()", () => {
    expect(typeof repository.createActivity).toBe('function');
  });

  it("Debe agregar una nueva actividad con el metodo createActivity()", () => {
    repository.createActivity("Título", "Descripción", "URL");
    expect(repository.getAllActivities().length).toBe(1);
  });

  it("Debe tener implementado el metodo deleteActivity()", () => {
    expect(typeof repository.deleteActivity).toBe('function');
  });

  it("Debe eliminar una actividad con el metodo deleteActivity()", () => {
    repository.createActivity("A");
    repository.createActivity("B");
    repository.createActivity("C");
    repository.deleteActivity(2);
    expect(repository.getAllActivities().map(activity => activity.title)).toEqual(["A", "C"]);
  });
});

 