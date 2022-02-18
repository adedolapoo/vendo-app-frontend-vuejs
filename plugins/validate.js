import {extend} from "vee-validate";
import {required, email, numeric, confirmed} from "vee-validate/dist/rules";

extend("my-validation", {
  message: "This {_field_} is invalid.",
  validate: value => {
    // ...
    return true;
  }
});

extend('verify_password', {
  message:  `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,
  validate: value => {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return strongRegex.test(value);
  }
})

extend('email', email);

extend('confirmed', confirmed);

extend('numeric', numeric);

// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required'
});

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Password confirmation does not match'
});

extend('greaterThan', {
  params: ['target'],
  validate(value, { target }) {
    return value > target;
  },
  message: 'The end date must be greater than the award date'
});
