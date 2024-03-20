  const { Repository, Activity } = require("../scripts/models.js");


  describe("La clase Activity", () => {
    let activity;

    beforeEach(() => {
      activity = new Activity(1, "Título de la actividad", "Descripción de la actividad", "imagen.jpg");
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
        const expectActivity = {
          title: "Cocinar",
          description: "A la parrilla",
          imgUrl: "parrillada.jpg"
        }

        repository.createActivity(
          expectActivity.title,
          expectActivity.description,
          expectActivity.imgUrl)

          const newActivity = new Activity(id = 1,
            expectActivity.title,
            expectActivity.description,
            expectActivity.imgUrl)

            expect(repository.getAllActivities()).toEqual([newActivity]);
    });

    it("Debe tener implementado el metodo deleteActivity()", () => {
      expect(typeof repository.deleteActivity).toBe('function');
    });

    it("Debe eliminar una actividad con el metodo deleteActivity()", () => {
      const expectActivity = {
        title: "Correr",
        description: "Por el parque",
        imgUrl: "parque.jpg"
      }

      repository.createActivity(
        expectActivity.title,
        expectActivity.description,
        expectActivity.imgUrl)

        const newActivity = new Activity(id = 1,
          expectActivity.title,
          expectActivity.description,
          expectActivity.imgUrl)

        repository.deleteActivity(newActivity.id);

          expect(repository.getAllActivities()).toEqual([]);
    });
  });

  