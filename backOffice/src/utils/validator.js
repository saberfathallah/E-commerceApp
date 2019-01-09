import { compact, pickBy } from 'lodash';

const GENERIC_THANKS = 'Merci de renseigner';

export const validateMessages = {
  required: {
    mail: `${GENERIC_THANKS} votre adresse E-mail`,
    password: `${GENERIC_THANKS} votre mot de passe.`,
    firstName: `${GENERIC_THANKS} votre prénon.`,
    lastName: `${GENERIC_THANKS} votre non.`,
    adress: `${GENERIC_THANKS} votre adresse.`,
    age: `${GENERIC_THANKS} votre age.`,
    name: `${GENERIC_THANKS} le nom..`,
    level: `${GENERIC_THANKS} le level de la categorie.`,
    brand: `${GENERIC_THANKS} la marque du produit.`,
    price: `${GENERIC_THANKS} le le prix du produit.`,
    quantity: `${GENERIC_THANKS} le quanity du produit.`,
    description: `${GENERIC_THANKS} la description du produit.`,
    image: `${GENERIC_THANKS} l'image du produit.`,
    categoryId: `${GENERIC_THANKS} le categorie du produit.`,
  },
  validEmail: 'Le format de votre adresse Email est incorrect. Merci de recommencer.',
  validPassword: 'Votre mot de passe doit comporter 8 caractères minimum, avec au moins 1 lettre, 1 chiffre et 1 caractère spécial (?!:;,&*-/+#$...)',
};

export const validateFunctions = {
  validPassword: {
    passed: (value = '') => (value === '' || /^(?=.*[A-Za-z])(?=.*\d)(?=.*[-!$%^&*()_+|~=`{}@#[\]\\:";'<>?,./])[A-Za-z\d-!$%^&*()_+|~=`{}@#[\]\\/:";'<>?,./]{8,}$/
      .test(value)),
    message: () => (validateMessages.validPassword),
  },
  validEmail: {
    passed: (value = '') => (value === '' || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      .test(value)),
    message: () => (validateMessages.validEmail),
  },
  isRequire: {
    passed: (value = '') => (value !== ''),
    message: (key = '') => (validateMessages.required[key]),
  },
  hasNumber: {
    passed: (value = '') => (value === '' || /.*[0-9].*/.test(value)),
    message: () => ('Nombre'),
  },
};

export const validateObject = (valuesToTest, funcs, options = {}) => {
  const errors = {};

  Object.keys(funcs).forEach((key) => {
    const reducer = (sum, curr) => sum
      .concat(curr.passed(valuesToTest[key]) ? null : curr.message(key));
    errors[key] = funcs[key].reduce(reducer, []);
    errors[key] = compact(errors[key]);
    if (!options.multi) {
      [errors[key]] = errors[key];
    }
  });
  return pickBy(errors, (a) => a);
};

export default validateFunctions;
