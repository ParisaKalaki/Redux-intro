const initialStateAccount = {
  balance: 0,
  loan: 0,
  laonPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "acount/requestLaon":
      if (state.loan > 0) return state;
      return { ...state, loan: action.payload };

    case "acount/payLoan":
      return {
        ...state,
        laon: 0,
        laonPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

export function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}

export function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

export function payloan() {
  return { type: "account/payLoan" };
}
