const lookUpTokenProperty = Symbol('AlhambrahLookUpToken');

export interface InjectEnabled {
  [lookUpTokenProperty]: Symbol;
}

interface Klass extends Function {
  [lookUpTokenProperty]?: Symbol;
  // tslint:disable-next-line
  new (): any;
}

interface InjectableOptions {
  token?: string;
}

export function Injectable(options?: InjectableOptions) {
  return (klass: Klass) => {
    const classToken = Symbol(options?.token ?? klass.name);
    return class extends klass implements InjectEnabled {
      [lookUpTokenProperty] = classToken;
    };
  };
}
