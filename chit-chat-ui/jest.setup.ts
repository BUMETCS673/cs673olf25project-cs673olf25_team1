// jest.setup.ts
// jest.setup.ts
import "@testing-library/jest-dom";

// mock scrollIntoView for jsdom tests
Element.prototype.scrollIntoView = jest.fn();