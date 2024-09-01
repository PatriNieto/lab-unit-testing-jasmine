// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2 | Divide", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("should return the division of the two numbers.", () => {
            expect(divide(4,2)).toEqual(2);
            expect(divide(200,4)).toEqual(50);
            expect(divide(2,4)).toEqual(0.5);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(add(1)).toEqual(undefined);
            expect(add()).toEqual(undefined);
            expect(add(undefined, 1)).toEqual(undefined);
        });
    })    
})

