import { Injectable } from './injectable';
import { DIContainer } from './di-container';

@Injectable()
class TestDep1 {}

describe('DIContainer', () => {
  let diContainer: DIContainer;

  beforeEach(() => {
    diContainer = new DIContainer();
  });

  describe('#lookUp', () => {
    it('throws an error if the dependency is missing', () => {
      expect(() => diContainer.lookUp(TestDep1)).toThrow();
    });
  });

  // describe('#register', () => {
  //   it('adds a dependency that can be looked up by its class', () => {
  //     const diContainer = new DIContainer();
  //
  //
  //   });
  // });
});
