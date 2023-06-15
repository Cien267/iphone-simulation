import Big from "big.js";

import operate from "./operate";

export default function calculate(oldResult, buttonType) {
  console.log(oldResult, buttonType);
  if (buttonType === "AC") {
    return {
      result: null,
      next: null,
      operation: null,
    };
  }

  if (/[0-9]+/.test(buttonType)) {
    if (buttonType === "0" && oldResult.next === "0") {
      return {
        result: null,
        next: 0,
        operation: null,
      };
    }
    if (oldResult.operation) {
      if (oldResult.next) {
        return { 
          result:oldResult.result, 
          next: oldResult.next + buttonType,
          operation: oldResult.operation
         };
      }
      return { 
        result:oldResult.result,
        next: buttonType,
        operation: oldResult.operation
      };
    }
    if (oldResult.next) {
      const next = oldResult.next === "0" ? buttonType : oldResult.next + buttonType;
      return {
        result: null,
        next: next,
        operation: oldResult.operation
      };
    }
    return {
      result: null,
      next: buttonType,
      operation: oldResult.operation
    };
  }

  if (buttonType === "%") {
    if (oldResult.operation && oldResult.next) {
      const result = operate(oldResult.result, oldResult.next, oldResult.operation);
      return {
        result: Big(result)
          .div(Big("100"))
          .toString(),
        next: null,
        operation: null,
      };
    }
    if (oldResult.next) {
      return {
        result: oldResult.result,
        next: Big(oldResult.next)
          .div(Big("100"))
          .toString(),
        operation: oldResult.operation
      };
    }
    return {
      result: oldResult.result,
      next: oldResult.next,
      operation: oldResult.operation,
    };
  }

  if (buttonType === ".") {
    if (oldResult.next) {
      if (oldResult.next.includes(".")) {
        return {
          result: oldResult.result,
          next: oldResult.next,
          operation: oldResult.operation,
        };
      }
      return { 
        result: oldResult.result,
        next: oldResult.next + ".",
        operation: oldResult.operation
      };
    }
    return { 
      result: oldResult.result,
      next: "0.",
      operation: oldResult.operation
    };
  }

  if (buttonType === "=") {
    if (oldResult.next && oldResult.operation) {
      return {
        result: operate(oldResult.result, oldResult.next, oldResult.operation),
        next: null,
        operation: null,
      };
    } else {
      return {
        result: oldResult.result,
        next: oldResult.next,
        operation: oldResult.operation,
      };
    }
  }

  if (buttonType === "+/-") {
    if (oldResult.next) {
      return { 
        result:oldResult.result,
        next: (-1 * parseFloat(oldResult.next)).toString(),
        operation: oldResult.operation 
      };
    }
    if (oldResult.result) {
      return { 
        result: (-1 * parseFloat(oldResult.result)).toString(),
        next: oldResult.next,
        operation: oldResult.operation 
      };
    }
    return {
      result: oldResult.result,
      next: oldResult.next,
      operation: oldResult.operation,
    };
  }

  if (oldResult.operation) {
    return {
      result: operate(oldResult.result, oldResult.next, oldResult.operation),
      next: null,
      operation: buttonType,
    };
  }

  if (!oldResult.next) {
    return { 
      result: oldResult.result,
      next: oldResult.next,
      operation: buttonType 
    };
  }

  return {
    result: oldResult.next,
    next: null,
    operation: buttonType,
  };
}
